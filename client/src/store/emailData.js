import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "src/@core/services/emailDataService";

export const fetchAllData = createAsyncThunk("emailData/fetchAll", async () => {
  const response = await fetchData();
  return response;
});

const emailDataSlice = createSlice({
  name: "emailData",
  initialState: {
    allData: [],
    isLoading: false,
    searchTerm: "",
  },
  reducers: {
    moveToTrash: (state, action) => {
      const emailId = action.payload;
      const emailIndex = state.allData.findIndex(
        (email) => email.id === emailId
      );
      if (emailIndex !== -1) {
        state.allData[emailIndex].status = "trash";
      }
    },
    moveEmailArrayToTrash: (state, action) => {
      const emailIds = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.allData = state.allData.map((email) =>
        emailIds.includes(email.id) ? { ...email, status: "trash" } : email
      );
    },
    toggleReadStatus: (state, action) => {
      const emailId = action.payload;
      const emailIndex = state.allData.findIndex(
        (email) => email.id === emailId
      );
      if (emailIndex !== -1) {
        //  turning true into false and vice versa
        state.allData[emailIndex].read = !state.allData[emailIndex].read;
      }
    },
    moveToSpam: (state, action) => {
      const emailId = action.payload;
      const emailIndex = state.allData.findIndex(
        (email) => email.id === emailId
      );
      if (emailIndex !== -1) {
        state.allData[emailIndex].status = "spam";
      }
    },
    moveToStarred: (state, action) => {
      const emailId = action.payload;
      const email = state.allData.find((email) => email.id === emailId);
      if (email) {
        const isCurrentlyStarred = email.status.includes("starred");
        if (isCurrentlyStarred) {
          // Remove 'starred' from the status array
          email.status = email.status.filter((status) => status !== "starred");
        } else {
          // Add 'starred' to the status array
          email.status.push("starred");
        }
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.allData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { moveToTrash } = emailDataSlice.actions;
export const { toggleReadStatus } = emailDataSlice.actions;
export const { moveToSpam } = emailDataSlice.actions;
export const { moveToStarred } = emailDataSlice.actions;
export const { moveEmailArrayToTrash } = emailDataSlice.actions;
export const { setSearchTerm } = emailDataSlice.actions;

const emailDataReducer = emailDataSlice.reducer;
export default emailDataReducer;
