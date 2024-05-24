import { createSlice } from "@reduxjs/toolkit";
import events from "src/@core/data/datasetCalendar";
const initialState = {
  events: events,
};
const eventSlice = createSlice({
  name: "eventsData",
  initialState,
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    updateEvent(state, action) {
      const { id, changes } = action.payload;
      console.log("Action received in reducer:", action);
      const index = state.events.findIndex((event) => {
        console.log(
          `Event ID: ${
            event.id
          }, Type: ${typeof event.id}, Searching ID: ${id}, Type: ${typeof id}`
        );
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
          extendedProps: {
            ...state.events[index].extendedProps,
            ...changes.extendedProps,
            guests:
              changes.extendedProps && changes.extendedProps.guests
                ? changes.extendedProps.guests
                : state.events[index].extendedProps.guests,
          },
        };
        state.events[index] = updatedEvent;
      }
    },
    deleteEvent(state, action) {
      console.log("Payload received:", action.payload); 
      state.events = state.events.filter(
        (event) => event.id.toString() !== action.payload.toString()
      );
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
const eventDataReducer = eventSlice.reducer;
export default eventDataReducer;