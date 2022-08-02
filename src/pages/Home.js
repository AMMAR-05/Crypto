import React from "react";
import CoinsList from "../components/Coins/CoinsList";
import TrendingCoins from "../components/Coins/TrendingCoins";
function Home() {
  return (
    <div className="home">
      <TrendingCoins />
      <CoinsList />
    </div>
  );
}

export default Home;
