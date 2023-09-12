import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LPADING: "loading",
});

const mensSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    sorting_value: "lowest",
  },
  reducers: {
    sortM(state, action) {
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMensProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchMensProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchMensProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, sortM } = mensSlice.actions;
export default mensSlice.reducer;

export const fetchMensProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    const data = await res.json();
    return data;
  }
);
