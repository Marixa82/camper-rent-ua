import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://661fafdb16358961cd9523c1.mockapi.io/api';

const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("adverts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export default fetchAdverts;