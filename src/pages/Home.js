import React from "react";
import CoinsList from "../components/Coins/CoinsList";
import TrendingCoins from "../components/Coins/TrendingCoins";
function Home() {
  return (
    <>
      <TrendingCoins />
      <CoinsList />
    </>
  );
}

export default Home;
