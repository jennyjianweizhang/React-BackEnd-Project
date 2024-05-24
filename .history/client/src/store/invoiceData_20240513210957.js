import { createSlice } from "@reduxjs/toolkit";
import initialRows from "src/@core/data/datasetInvoice";
const initialState = {
  invoice: initialRows,
  searchTerm: "",
};
const invoiceSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = invoiceSlice.actions;
const invoiceDataReducer = invoiceSlice.reducer;
export default invoiceDataReducer;
