import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  },
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    updateEvent(state, action) {
      const { id, ...updatedEvent } = action.payload;
      const index = state.events.findIndex((event) => event.id === id);
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent };
      }
    },
    deleteEvent(state, action) {
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
  },

});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
const eventDataReducer=event
export default eventSlice.reducer;
