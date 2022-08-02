import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get Trending Cryptos
const TrendingUrl = "https://api.coingecko.com/api/v3/search/trending";

export const fetchTrendingCoins = createAsyncThunk(
  "trending/getTrending",
  async () => {
    try {
      const response = await axios.get(TrendingUrl);
      return response.data.coins;
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  trending: [],
  status: "idle",
  error: null,
};
const trendingCoinsSlice = createSlice({
  name: "trendingCoins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingCoins.fulfilled, (state, action) => {
      state.status = "Fullfiled";
      state.trending = action.payload;
      state.trending = state.trending
        // .filter((fil) => fil.item)
        .flatMap((toMa) => toMa)
        .map((toFla) => toFla.item);
    });
  },
});

export const getTrendingCoins = (state) => state.trendingCoins.trending;
export default trendingCoinsSlice.reducer;
