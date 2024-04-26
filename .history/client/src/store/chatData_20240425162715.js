import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'src/@core/services/chatDataService';

export const fetchAllData = createAsyncThunk('chatData/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetchData();
    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    return rejectWithValue('Failed to fetch data');
  }
});



const chatDataSlice = createSlice({
  name: 'chatData',
  initialState: {
    allData: [],
    isLoading: false, 
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const chatIndex = state.allData.findIndex(chat => chat.id.toString() === chatId.toString());
      if (chatIndex !== -1) {
        state.allData[chatIndex].messages.push(message);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        console.log("Storing data in state:", action.payload);
        state.allData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Data fetch rejected:", action.payload);
      });
  },
  
});
export const { addMessage } = chatDataSlice.actions;
const chatDataReducer = chatDataSlice.reducer
export default chatDataReducer