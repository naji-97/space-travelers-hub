import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const getRocketData = createAsyncThunk('rockets/get', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v4/rockets');
    const data = await res.data;
    return data;
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    return err.message;
  }
});
const initialState = {
  status: 'idle',
  data: [],
  error: '',
};
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getRocketData.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        data: action.payload,
      }))
      .addCase(getRocketData.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getRocketData.rejected, (state, action) => ({
        ...state,
        status: 'error',
        error: action.payload,
      }));
  },
});
export default rocketSlice.reducer;
