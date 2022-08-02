import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coinApi from "../../app/Urls";

export const fetchCoinById = createAsyncThunk("coin/getCoin", async (id) => {
  try {
    const response = await coinApi.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  coin: {},
  status: "idle",
  error: null,
};
const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCoinById.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      state.coin = action.payload;

      window.localStorage.setItem("image", state.coin.image.thumb);
      window.localStorage.setItem(
        "currentPrice",
        state.coin.market_data.current_price.usd
      );
      window.localStorage.setItem(
        "percentage_24h",
        state.coin.market_data.price_change_percentage_24h
      );
    });

    builder.addCase(fetchCoinById.pending, (state, action) => {
      state.status = "Pending";
    });

    builder.addCase(fetchCoinById.rejected, (state, action) => {
      state.status = "Rejected";
    });
  },
});

export const getCoinById = (state) => state.coin.coin;

export default coinSlice.reducer;
