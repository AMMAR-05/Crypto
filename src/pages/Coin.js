import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinById, getCoinById } from "../features/coins/coinSlice";
import { BsArrow90DegDown } from "react-icons/bs";
import { BsArrow90DegUp } from "react-icons/bs";
function Coin() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinById(id));
  }, [dispatch, id]);

  const coinById = useSelector(getCoinById);

  const image = window.localStorage.getItem("image");
  const currentPrice = window.localStorage.getItem("currentPrice");
  const percentage_24h = window.localStorage.getItem("percentage_24h");

  return (
    <div className="pt-16 pl-10 h-screen">
      {/* Rank */}
      <p className="bg-neutral-800 w-20 text-white rounded p-1 text-sm text-center">
        Rank #<span>{coinById.coingecko_rank}</span>
      </p>

      {/* Img, Name, Symbol  */}
      <div className="flex items-center my-5">
        <img src={image} alt={coinById.id} />
        <span className="mx-3">{coinById.name}</span>
        <span>({coinById.symbol.toUpperCase()})</span>
      </div>

      {/* Price, Percentage_24h */}
      <div className="flex">
        <p className="mr-2">${currentPrice}</p>

        {percentage_24h >= 0 ? (
          <div className="text-green-500 flex items-center">
            <BsArrow90DegUp />
            <span className="ml-1">{percentage_24h.slice(0, 5)}%</span>
          </div>
        ) : (
          <div className="text-red-500 flex items-center">
            <BsArrow90DegDown />
            <span className="ml-1">{percentage_24h.slice(0, 5)}%</span>
          </div>
        )}
      </div>
      <div>Chart</div>
    </div>
  );
}

export default Coin;
