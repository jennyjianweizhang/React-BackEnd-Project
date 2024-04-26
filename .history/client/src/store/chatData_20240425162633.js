import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'src/@core/services/chatDataService';

export const fetchAllData = createAsyncThunk('chatData/fetchAll', async () => {
  console.log("Fetching data...");
  const response = await fetchData();
  console.log("Data fetched:", response);
  return response;
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
        state.allData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { addMessage } = chatDataSlice.actions;
const chatDataReducer = chatDataSlice.reducer
export default chatDataReducer