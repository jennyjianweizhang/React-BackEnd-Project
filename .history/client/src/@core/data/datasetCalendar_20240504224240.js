const events = [
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
    guests: "Alice",
    category: "Holiday"
  },
  {
    id:4,
    title: "Budget Meeting",
    start: "2024-05-15T11:00:00Z",
    end: "2024-05-15T12:30:00Z",
    classNames: ['event-personal'],
    guests: "Carol",
    category: "Personal"
  },
  {
    id:5,
    title: "Marketing Plan",
    start: "2024-05-20T16:00:00Z",
    end: "2024-05-20T17:30:00Z",
    classNames: ['event-etc'],
    guests: "Frank",
    category: "ETC"
  },
  {
    id:6,
    title: "Yearly Review",
    start: "2024-05-30T13:30:00Z",
    end: "2024-05-30T15:00:00Z",
    classNames: ['event-family'],
    guests: "Gary",
    category: "Family"
  },
  {
    id:7,
    title: "Software Update",
    start: "2024-06-05T15:45:00Z",
    end: "2024-06-05T17:00:00Z",
    classNames: ['event-business'],
    guests: "Ivy, Joe",
    category: "Business"
  },
  {
    id:8,
    title: "Office Party",
    start: "2024-06-18T19:00:00Z",
    end: "2024-06-18T21:00:00Z",
    classNames: ['event-personal'],
    guests: "Leo",
    category: "Personal"
  },
  {
    id:9,
    title: "Compliance Training",
    start: "2024-06-25T08:30:00Z",
    end: "2024-06-25T10:00:00Z",
    classNames: ['event-etc'],
    guests: "Nick",
    category: "ETC"
  },
  {
    id:10,
    title: "Summer Outing",
    start: "2024-07-01T10:00:00Z",
    end: "2024-07-01T15:00:00Z",
    classNames: ['event-holiday'],
    guests: "Patty",
    category: "Holiday"
  },
  {
    id:11,
    title: "Strategy Workshop",
    start: "2024-07-11T14:00:00Z",
    end: "2024-07-11T16:00:00Z",
    classNames: ['event-business'],
    guests: "Rachel",
    category: "Business"
  },
  {
    id:12,
    title: "Q3 Planning",
    start: "2024-07-22T16:30:00Z",
    end: "2024-07-22T18:00:00Z",
    classNames: ['event-personal'],
    guests: "Steve",
    category: "Personal"
  },
  {
    id:13,
    title: "Birthday Celebration",
    start: "2024-05-09T12:00:00Z",
    end: "2024-05-09T14:00:00Z",
    classNames: ['event-family'],
    guests: "Uma",
    category: "Family"
  },
];

export default events;
