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
      const { id, ...updatedEvent } = action.payload;
      const events = [...state.events];
      const index = events.findIndex(event => event.id === id);
      if (index !== -1) {
          events[index] = { ...events[index], ...updatedEvent };
          state.events = events;
      } else {
          console.log("No event found with ID:", id);
      }
  },
  
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
