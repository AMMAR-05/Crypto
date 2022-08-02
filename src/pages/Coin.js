import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinById, getCoinById } from "../features/coins/coinSlice";

function Coin() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinById(id));
  }, [dispatch, id]);

  const coinById = useSelector(getCoinById);
  // console.log(coinById);

  const image = window.localStorage.getItem("image");
  const currentPrice = window.localStorage.getItem("currentPrice");
  const percentage_24h = window.localStorage.getItem("percentage_24h");

  return (
    <>
      <p>{coinById.coingecko_rank}</p>
      <img src={image} alt={coinById.id} />
      <p>{coinById.name}</p>
      <span>{coinById.symbol}</span>
      <p>{currentPrice}</p>
      <span>{percentage_24h}%</span>
    </>
  );
}

export default Coin;
