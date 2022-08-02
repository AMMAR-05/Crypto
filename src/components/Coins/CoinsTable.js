import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCoins,
  getAllCoins,
  // getCoinsStatus,
} from "../../features/coins/coinsList";
import Pagination from "../Pagination/Pagination";

function CoinsList() {
  // Get All coins from redux State
  const { coins } = useSelector(getAllCoins);
  const [pageNumber, setPageNumber] = useState(0);

  const showPerPage = 5;

  const visitedPages = pageNumber * showPerPage;

  // Classes variable
  const tableClasses = "text-center h-14";

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
          <td className={`${tableClasses}`}>&#9733; {coin.market_cap_rank}</td>

          {/* Img, Name and Symbol */}
          <td className={`${tableClasses} flex items-center justify-between`}>
            <img src={coin.image} alt="coin" className="w-10" />
            <Link to={`/coins/${coin.id}`}>{coin.name.slice(0, 12)}</Link>
            <p className="text-xs">{coin.symbol.toUpperCase()}</p>
          </td>

          {/* Price */}
          <td className={tableClasses}>
            {`$ ${coin.current_price.toLocaleString()}`}
          </td>

          {/* In one Hour */}
          {coin.price_change_percentage_1h_in_currency >= 0 ? (
            <td className={`${tableClasses}  text-green-300`}>
              {coin.price_change_percentage_1h_in_currency.toFixed(2)} %
            </td>
          ) : (
            <td className={`${tableClasses}  text-red-500`}>
              {coin.price_change_percentage_1h_in_currency.toFixed(2)} %
            </td>
          )}

          {/* In 24 Hours */}
          {coin.price_change_percentage_24h_in_currency >= 0 ? (
            <td className={`${tableClasses}  text-green-500`}>
              {coin.price_change_percentage_24h_in_currency.toFixed(2)} %
            </td>
          ) : (
            <td className={`${tableClasses}  text-red-500`}>
              {coin.price_change_percentage_24h_in_currency.toFixed(2)} %
            </td>
          )}

          {/* In Seven Days */}
          {coin.price_change_percentage_7d_in_currency.toFixed(2) >= 0 ? (
            <td className={`${tableClasses} text-green-300`}>
              {coin.price_change_percentage_7d_in_currency.toFixed(2)} %
            </td>
          ) : (
            <td className={`${tableClasses} text-red-500`}>
              {coin.price_change_percentage_7d_in_currency.toFixed(2)} %
            </td>
          )}

          {/* Total Volume */}
          <td className={tableClasses}>
            $ {coin.total_volume.toLocaleString()}
          </td>
          {/* Market Cap */}
          <td className={tableClasses}>$ {coin.market_cap.toLocaleString()}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(coins.length / showPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <table className=" table-fixed w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Coins</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24 Volume</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>{displayCoins}</tbody>
      </table>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </>
  );
}

export default CoinsList;
