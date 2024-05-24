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
      const { id, changes } = action.payload;
      const index = state.events.findIndex(event => event.id === id);
      if (index !== -1) {
        const updatedEvent = { ...state.events[index], ...changes };
        const updatedEvents = [...state.events];
        updatedEvents[index] = updatedEvent;
        return { ...state, events: updatedEvents };
      } else {
        console.log("Event not found with id:", id);
        return state; // Return the unmodified state if the event is not found
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
