import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "../features/coins/coinsList";
import coinReducer from "../features/coins/coinSlice";
import trendingCoins from "../features/coins/trendingSlice";
export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    coin: coinReducer,
    trendingCoins,
  },
});
