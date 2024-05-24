import { createSlice } from "@reduxjs/toolkit";
// import initialRows from "src/@core/data/datasetInvoice";
const initialRows = [
  {
    id: 1,
    status: "Paid",
    client: "Jordan Stevenson",
    email: "don85@johnson.com",
    total: "$1000",
    issuedDate: "2024-05-13",
    balance: "Paid",
    companyName: "Stevenson Ltd.",
    address: "1234 Elm St, Springfield, IL",
    phoneNumber: "(312) 555-1234",
    dueDate: "2024-06-13"
  },
  {
    id: 2,
    status: "Draft",
    client: "Stephanie Burns",
    email: "brenda49@taylor.info",
    total: "$1200",
    issuedDate: "2024-05-14",
    balance: "$600",
    companyName: "Burns International",
    address: "789 Pine Rd, Denver, CO",
    phoneNumber: "(303) 555-7890",
    dueDate: "2024-06-14"
  },
  {
    id: 3,
    status: "Sent",
    client: "Alice Johnson",
    email: "smithtiffany@powers.com",
    total: "$1500",
    issuedDate: "2024-05-15",
    balance: "$1500",
    companyName: "Johnson Consulting",
    address: "456 Maple Ave, Austin, TX",
    phoneNumber: "(512) 555-4567",
    dueDate: "2024-06-15"
  },
  {
    id: 4,
    status: "Downloaded",
    client: "Bob Brown",
    email: "mejiageorge@lee-perez.com",
    total: "$700",
    issuedDate: "2024-05-16",
    balance: "Paid",
    companyName: "Brown Goods",
    address: "321 Birch St, Miami, FL",
    phoneNumber: "(305) 555-3210",
    dueDate: "2024-06-16"
  },
  {
    id: 5,
    status: "Partial Payment",
    client: "Tony Herrera",
    email: "brandon07@pierce.com",
    total: "$3428",
    issuedDate: "2024-05-17",
    balance: "$400",
    companyName: "Herrera Foods",
    address: "678 Oak St, Seattle, WA",
    phoneNumber: "(206) 555-6789",
    dueDate: "2024-06-17"
  },
  {
    id: 6,
    status: "Partial Payment",
    client: "Kevin Patton",
    email: "guerrerobrandy@beasley-harper.com",
    total: "$5200",
    issuedDate: "2024-05-18",
    balance: "Paid",
    companyName: "Patton Tech",
    address: "962 Cedar Rd, Philadelphia, PA",
    phoneNumber: "(215) 555-9620",
    dueDate: "2024-06-18"
  },
  {
    id: 7,
    status: "Downloaded",
    client: "Amanda Phillips",
    email: "williamshenry@moon-smith.com",
    total: "$3710",
    issuedDate: "2024-05-19",
    balance: "$815",
    companyName: "Phillips Design",
    address: "839 Willow St, San Francisco, CA",
    phoneNumber: "(415) 555-8391",
    dueDate: "2024-06-19"
  },
  {
    id: 8,
    status: "Past Due",
    client: "Christina Collier",
    email: "margaretharvey@russell-murray.com",
    total: "$2720",
    issuedDate: "2024-05-20",
    balance: "-$200",
    companyName: "Collier Manufacturing",
    address: "105 Maple Drive, Atlanta, GA",
    phoneNumber: "(404) 555-1050",
    dueDate: "2024-06-20"
  },
  {
    id: 9,
    status: "Sent",
    client: "Carol White",
    email: "dianarodriguez@villegas.com",
    total: "$2770",
    issuedDate: "2024-05-21",
    balance: "$400",
    companyName: "White Consulting",
    address: "500 Cherry Blvd, Boston, MA",
    phoneNumber: "(617) 555-5000",
    dueDate: "2024-06-21"
  },
  {
    id: 10,
    status: "Past Due",
    client: "David Flores",
    email: "bwilson@norris-brock.com",
    total: "$4360",
    issuedDate: "2024-05-22",
    balance: "Paid",
    companyName: "Flores Gardening",
    address: "333 Peachtree St, Nashville, TN",
    phoneNumber: "(615) 555-3333",
    dueDate: "2024-06-22"
  },
  {
    id: 11,
    status: "Paid",
    client: "Valerie Perez",
    email: "yrobinson@nichols.com",
    total: "$3357",
    issuedDate: "2024-05-23",
    balance: "$305",
    companyName: "Perez Art & Design",
    address: "450 Birch Lane, Orlando, FL",
    phoneNumber: "(407) 555-4500",
    dueDate: "2024-06-23"
  },
  {
    id: 12,
    status: "Sent",
    client: "Susan Dickerson",
    email: "arielberg@wolfe-smith.com",
    total: "$4578",
    issuedDate: "2024-05-24",
    balance: "Paid",
    companyName: "Dickerson Publishing",
    address: "220 Elm St, Phoenix, AZ",
    phoneNumber: "(602) 555-2200",
    dueDate: "2024-06-24"
  }
];

export default initialRows;

const initialState = {
  invoice: initialRows,
  searchTerm: "",
};
const invoiceSlice = createSlice({
  name: "invoiceData",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
    },
    deleteInvoice(state, action) {
        console.log("Payload received:", action.payload); 
        state.invoice = state.invoice.filter(
          (i) => i.id.toString() !== action.payload.toString()
        );
    },
  },
});

export const { setSearchTerm, deleteInvoice } = invoiceSlice.actions;
const invoiceDataReducer = invoiceSlice.reducer;
export default invoiceDataReducer;
