import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get All Cryptos
const crypto_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

export const fetchCoins = createAsyncThunk("coins/getCoins", async () => {
  try {
    const response = await axios.get(crypto_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  coins: [],
  status: "idle",
  error: null,
};

const coinsListSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.status = "Succeeded";
      state.coins = action.payload;
    });
    builder.addCase(fetchCoins.pending, (state, action) => {
      state.status = "Pending";
    });
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.status = "Rejected";
    });
  },
});

export const getAllCoins = (state) => state.coins;
export const getCoinsStatus = (state) => state.coins.status;

export default coinsListSlice.reducer;
