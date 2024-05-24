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
    deleteInvoice(state, action) {
        state.invoice = state.invoice.filter(
          (i) => i.id.toString() !== action.payload.toString()
        );
    },
  },
});

export const { setSearchTerm, deleteInvoice } = invoiceSlice.actions;
const invoiceDataReducer = invoiceSlice.reducer;
export default invoiceDataReducer;
