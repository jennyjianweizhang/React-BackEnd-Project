import { createSlice } from "@reduxjs/toolkit";
// import events from "src/@core/data/datasetCalendar";
const initialState = {
  events:[
    {
      id: 1,
      title: "Team Meeting",
      start: "2024-04-19T10:32:00Z",
      end: "2024-04-19T12:00:00Z",
      classNames: ['event-business'],
      extendedProps: {
        category: "Business",
        guests: ["John", "Jane"]
      }
    },
    {
      id:2,
      title: "Client Review",
      start: "2024-04-23T14:45:00Z",
      end: "2024-04-23T16:00:00Z",
      classNames: ['event-business'],
      extendedProps: {
        category: "Business",
        guests: ["Smith"]
      }
    },
    {
      id:3,
      title: "Project Launch",
      start: "2024-05-02T09:15:00Z",
      end: "2024-05-02T12:32:00Z",
      classNames: ['event-holiday'],
      extendedProps: {
        category: "Holiday",
        guests: ["Alice"]
      }
    },
    {
      id:4,
      title: "Budget Meeting",
      start: "2024-05-15T11:00:00Z",
      end: "2024-05-15T12:30:00Z",
      classNames: ['event-personal'],
      extendedProps: {
        category: "Personal",
        guests: ["Carol"]
      }
    },
    {
      id:5,
      title: "Marketing Plan",
      start: "2024-05-20T16:00:00Z",
      end: "2024-05-20T17:30:00Z",
      classNames: ['event-etc'],
      extendedProps: {
        category: "ETC",
        guests: ["Frank"]
      }
    },
    {
      id:6,
      title: "Yearly Review",
      start: "2024-05-30T13:30:00Z",
      end: "2024-05-30T15:00:00Z",
      classNames: ['event-family'],
      extendedProps: {
        category: "Family",
        guests: ["Gary"]
      }
    },
    {
      id:7,
      title: "Software Update",
      start: "2024-06-05T15:45:00Z",
      end: "2024-06-05T17:00:00Z",
      classNames: ['event-business'],
      extendedProps: {
        category: "Business",
        guests: ["Ivy", "Joe"]
      }
    },
    {
      id:8,
      title: "Office Party",
      start: "2024-06-18T19:00:00Z",
      end: "2024-06-18T21:00:00Z",
      classNames: ['event-personal'],
      extendedProps: {
        category: "Personal",
        guests: ["Leo"]
      }
    },
    {
      id:9,
      title: "Compliance Training",
      start: "2024-06-25T08:30:00Z",
      end: "2024-06-25T10:00:00Z",
      classNames: ['event-etc'],
      extendedProps: {
        category: "ETC",
        guests: ["Nick"]
      }
    },
    {
      id:10,
      title: "Summer Outing",
      start: "2024-07-01T10:00:00Z",
      end: "2024-07-01T15:00:00Z",
      classNames: ['event-holiday'],
      extendedProps: {
        category: "Holiday",
        guests: ["Patty"]
      }
    },
    {
      id:11,
      title: "Strategy Workshop",
      start: "2024-07-11T14:00:00Z",
      end: "2024-07-11T16:00:00Z",
      classNames: ['event-business'],
      extendedProps: {
        category: "Business",
        guests: ["Rachel"]
      }
    },
    {
      id:12,
      title: "Q3 Planning",
      start: "2024-07-22T16:30:00Z",
      end: "2024-07-22T18:00:00Z",
      classNames: ['event-personal'],
      extendedProps: {
        category: "Personal",
        guests: ["Steve"]
      }
    },
    {
      id:13,
      title: "Birthday Celebration",
      start: "2024-05-09T12:00:00Z",
      end: "2024-05-09T14:00:00Z",
      classNames: ['event-family'],
      extendedProps: {
        category: "Family",
        guests: ["Uma"]
      }
    },
  ]
}
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
          extendedProps: {
            ...state.events[index].extendedProps,
            ...changes.extendedProps,
            guests: changes.extendedProps && changes.extendedProps.guests
                ? changes.extendedProps.guests
                : state.events[index].extendedProps.guests
          }
        };
        state.events[index] = updatedEvent;
      }
    },
    deleteEvent(state, action) {
      state.events = state.events.filter(
        (event) => event.id.toString() !== action.payload.toString
      );
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions;
const eventDataReducer = eventSlice.reducer;
export default eventDataReducer;
