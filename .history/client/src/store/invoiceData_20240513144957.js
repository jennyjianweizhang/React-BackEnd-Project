import { createSlice } from "@reduxjs/toolkit";
import initialRows from "src/@core/data/datasetInvoice";
const initialState = {
  invoice: initialRows,
};
const invoiceSlice = createSlice({
  name: "eventsData",
  initialState,
  reducers: {
    
  },
});

export const {  } = eventSlice.actions;
const eventDataReducer = eventSlice.reducer;
export default eventDataReducer;
