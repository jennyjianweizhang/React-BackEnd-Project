import { createSlice } from "@reduxjs/toolkit";
import initialRows from "src/@core/data/datasetInvoice";
const initialState = {
  i: events,
};
const eventSlice = createSlice({
  name: "eventsData",
  initialState,
  reducers: {
    
  },
});

export const {  } = eventSlice.actions;
const eventDataReducer = eventSlice.reducer;
export default eventDataReducer;
