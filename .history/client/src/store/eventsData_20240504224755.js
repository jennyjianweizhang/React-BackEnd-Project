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
      console.log("Action received in reducer:", action);
      const index = state.events.findIndex(event => {
          console.log(`Event ID: ${event.id}, Type: ${typeof event.id}, Searching ID: ${id}, Type: ${typeof id}`);
          return event.id === id;
      });
      console.log("Found index:", index);
      // if (index !== -1) {
      //     state.events[index] = { ...state.events[index], ...changes };
      // } else {
      //     console.log("No event found with ID:", id);
      // }
      if (index !== -1) {
        const updatedEvent = {
          ...state.events[index],
          ...changes,
          guests: changes.guests ? changes.guests.split(',').map(guest => guest.trim()) : state.events[index].guests
        };
        console.log("Updating event, guests as array:", updatedEvent.guests); 
        state.events[index] = updatedEvent;
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
