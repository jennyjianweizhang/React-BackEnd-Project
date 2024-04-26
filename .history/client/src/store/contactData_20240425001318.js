import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "src/@core/services/chatDataService";

export const fetchAllData = createAsyncThunk("contactData/fetchAll", async () => {
  const response = await fetchData();
  return response;
});

const contactDataSlice = createSlice({
  name: "contactData",
  initialState: {
    allData: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        console.log('Data fetched and stored in Redux:', action.payload);
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

const contactDataReducer = contactDataSlice.reducer;
export default contactDataReducer;