import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "src/@core/services/chatDataService";

export const fetchAllData = createAsyncThunk("chatData/fetchAll", async () => {
    const response = await fetchData();
    return response;
  });


  const chatDataSlice = createSlice({
    name: "chatData",
    initialState: {
      allData: [],
      isLoading: false,
    },
    reducers: {
      
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

  const chatDataReducer = chatDataSlice.reducer;
export default cDataReducer;