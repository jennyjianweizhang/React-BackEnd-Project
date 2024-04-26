import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "src/@core/services/chatDataService";

export const fetchAllData = createAsyncThunk("emailData/fetchAll", async () => {
    const response = await fetchData();
    return response;
  });
  