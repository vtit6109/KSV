import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3000/blogs`,
  });
  
  export const getAllBlogs = createAsyncThunk(
    'blogs/getAllBlogs',
    async () => {
      const response = await api.get('/');
      return response.data;
    },
  );


  const blogsSlice = createSlice({
    name: 'blogs',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        if (JSON.stringify(state.data) !== JSON.stringify(action.payload)) {
          state.data = action.payload;
        }
      });
      builder.addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }});
  
  export default blogsSlice.reducer;