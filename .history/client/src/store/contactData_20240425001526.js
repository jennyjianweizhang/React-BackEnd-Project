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
    builder
    .addCase(fetchAllData.pending, (state) => {
      console.log('Fetching data pending...');
      state.isLoading = true;
    })
    .addCase(fetchAllData.fulfilled, (state, action) => {
      console.log('Data fetched and stored in Redux:', action.payload);
      state.allData = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchAllData.rejected, (state, action) => {
      console.error('Fetching data failed:', action.error);
      state.isLoading = false;
    });
  
  },
});

const contactDataReducer = contactDataSlice.reducer;
export default contactDataReducer;
