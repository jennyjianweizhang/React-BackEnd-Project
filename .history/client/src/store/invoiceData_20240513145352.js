import { createSlice } from "@reduxjs/toolkit";
import initialRows from "src/@core/data/datasetInvoice";
const initialState = {
  invoice: initialRows,
};
const invoiceSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    
  },
});

export const {  } = invoiceSlice.actions;
const eventDataReducer = invoiceSlice.reducer;
export default eventDataReducer;
