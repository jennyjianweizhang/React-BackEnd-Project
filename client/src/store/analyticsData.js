import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'src/@core/services/analyticsDataService';

export const fetchAllData = createAsyncThunk('analyticsData/fetchAll', async () => {
  const response = await fetchData();
  return response;
});

const analyticsDataSlice = createSlice({
  name: 'analyticsData',
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

const analyticsDataReducer = analyticsDataSlice.reducer
export default analyticsDataReducer