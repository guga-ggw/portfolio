import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type slicetype = {
  pages: string[],
  currentPage: string,
}

const initialState: slicetype = {
  pages: [],
  currentPage: "",
}

export const routingslice = createSlice({
  name: "routingslice",
  initialState,
  reducers: {
    addPages: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      if (!state.pages.includes(payload)) {
        state.pages = [...state.pages, payload];
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    deletePages: (state, action) => {
      state.pages = state.pages.filter((page) => page !== action.payload);
    },
  },
});

export default routingslice.reducer;
export const { addPages, setCurrentPage, deletePages } = routingslice.actions;