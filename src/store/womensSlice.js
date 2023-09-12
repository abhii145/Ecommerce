import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LPADING: "loading",
  sorting_value: "lowest",
});

const womensSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {sortW(state, action) {
    state.sorting_value = action.payload;

    if (state.sorting_value === "lowest") {
      state.data.sort((a, b) => a.price - b.price);
    } else if (state.sorting_value === "highest") {
      state.data.sort((a, b) => b.price - a.price);
    } else if (state.sorting_value === "new") {
      for (let i = state.data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.data[i], state.data[j]] = [state.data[j], state.data[i]];
      }
    }
  },},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts,sortW } = womensSlice.actions;
export default womensSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );
  const data = await res.json();
  return data;
});
