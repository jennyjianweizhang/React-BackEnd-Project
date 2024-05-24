import { createSlice } from "@reduxjs/toolkit";
import events from "src/@core/data/datasetCalendar";
const initialState = {
  events: events,
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
