import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins, getAllCoins } from "../../features/coins/coinsList";
import Pagination from "../Pagination/Pagination";

function CoinsList() {
  // Get All coins from redux State
  const { coins } = useSelector(getAllCoins);
  const [pageNumber, setPageNumber] = useState(0);

  const showPerPage = 5;

  const visitedPages = pageNumber * showPerPage;

  // Classes variable
  const tdClasses = "h-16 text-center px-7 whitespace-nowrap";
  const thClasses = "";

  // Dispatch get all coins function
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  // Render list of coins
  const displayCoins = coins
    .slice(visitedPages, visitedPages + showPerPage)
    .map((coin) => {
      return (
        <tr key={coin.id}>
          {/* Rank */}
          <td className={`${tdClasses} `}>&#9733; {coin.market_cap_rank}</td>

          {/* Img, Name and Symbol */}
          <td className={`${tdClasses} flex items-center justify-between  `}>
            <img src={coin.image} alt="coin" className="w-5" />

            <Link className="mx-5" to={`/coins/${coin.id}`}>
              {coin.name.slice(0, 12)}
            </Link>

            <p className="text-xs ">{coin.symbol.toUpperCase()}</p>
          </td>

          {/* Price */}
          <td className={tdClasses}>
            {`$ ${coin.current_price.toLocaleString()}`}
          </td>

          {/* In one Hour */}
          {coin.price_change_percentage_1h_in_currency >= 0 ? (
            <td className={`${tdClasses}  text-green-300`}>
              {coin.price_change_percentage_1h_in_currency.toFixed(2)} %
            </td>
          ) : (
            <td className={`${tdClasses}  text-red-500`}>
              {coin.price_change_percentage_1h_in_currency.toFixed(2)} %
            </td>
          )}

          {/* In 24 Hours */}
          {coin.price_change_percentage_24h_in_currency >= 0 ? (
            <td className={`${tdClasses}  text-green-500`}>
              {coin.price_change_percentage_24h_in_currency.toFixed(2)} %
            </td>
          ) : (
            <td className={`${tdClasses}  text-red-500`}>
              {coin.price_change_percentage_24h_in_currency.toFixed(2)} %
            </td>
          )}

          {/* In Seven Days */}
          {coin.price_change_percentage_7d_in_currency.toFixed(2) >= 0 ? (
            <td className={`${tdClasses} text-green-300`}>
              {coin.price_change_percentage_7d_in_currency.toFixed(2)} %
            </td>
          ) : (
            <td className={`${tdClasses} text-red-500`}>
              {coin.price_change_percentage_7d_in_currency.toFixed(2)} %
            </td>
          )}

          {/* Total Volume */}
          <td className={tdClasses}>$ {coin.total_volume.toLocaleString()}</td>
          {/* Market Cap */}
          <td className={tdClasses}>$ {coin.market_cap.toLocaleString()}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(coins.length / showPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="overflow-auto  md:text-xs lg:text-lg text-xs pt-5">
        <table className="w-full border-collapse ">
          <thead>
            <tr>
              <th className={thClasses}>#</th>
              <th className={thClasses}>Coins</th>
              <th className={thClasses}>Price</th>
              <th className={thClasses}>1h</th>
              <th className={thClasses}>24h</th>
              <th className={thClasses}>7d</th>
              <th className={thClasses}>24 Volume</th>
              <th className={thClasses}>Mkt Cap</th>
            </tr>
          </thead>
          <tbody>{displayCoins}</tbody>
        </table>
      </div>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </>
  );
}

export default CoinsList;
