import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  token: string | null;
  loading: boolean;
  productsData: object;
}

const initialState: CounterState = {
  value: 0,
  token: localStorage.getItem("userShopToken") || null,
  loading: false,
  productsData: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    // my Function

    setLocalToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("userShopToken", action.payload);

      console.log(
        "maniki",
        state.token,
        "local",
        localStorage.getItem("userShopToken")
      );
    },

    startLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setProducts: (state, action: PayloadAction<object>) => {
      state.productsData = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setLocalToken,
  startLoading,
  setProducts,
} = counterSlice.actions;

export default counterSlice.reducer;
