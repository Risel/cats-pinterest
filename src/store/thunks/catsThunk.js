import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCats = createAsyncThunk(
  "cats/getCats",
  async (limit, { rejectWithValue }) => {
    try {
      const catsList = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`
      );
      return catsList.data;
    } catch ({message}) {
      return rejectWithValue(message);
    }
  }
);