import { createSlice } from "@reduxjs/toolkit";
import events from "src/@core/data/datasetCalendar";

const eventSlice = createSlice({
  name: "eventsData",
  initialState: {
    events: events,
  },
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    updateEvent(state, action) {
      const { id, changes } = action.payload;  // Assuming id is now consistently a string
      const index = state.events.findIndex(event => event.id.toString() === id);  // Ensure ID is treated as string
      if (index !== -1) {
          state.events[index] = { ...state.events[index], ...changes };
      } else {
          console.log("No event found with ID:", id);
      }
  }
  
  
  
    deleteEvent(state, action) {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
const eventDataReducer = eventSlice.reducer;
export default eventDataReducer;
