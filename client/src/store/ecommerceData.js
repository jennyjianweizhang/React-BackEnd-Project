import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'src/@core/services/ecommerceDataService';

export const fetchAllData = createAsyncThunk('ecommerceData/fetchAll', async () => {
  const response = await fetchData();
  return response;
});

const ecommerceDataSlice = createSlice({
  name: 'ecommerceData',
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

const ecommerceDataReducer = ecommerceDataSlice.reducer
export default ecommerceDataReducer


