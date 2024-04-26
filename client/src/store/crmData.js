import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'src/@core/services/crmDataService';

export const fetchAllData = createAsyncThunk('crmData/fetchAll', async () => {
  const response = await fetchData();
  return response;
});

const crmDataSlice = createSlice({
  name: 'crmData',
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

const crmDataReducer = crmDataSlice.reducer
export default crmDataReducer