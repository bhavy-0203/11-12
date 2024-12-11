import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getBlogs = createAsyncThunk(
  "blogs/getBlogs",
  async (_, { rejectWithValue }) => {
    try {
      let res = await axios.get(`${baseUrl}/blogs`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postBlog = createAsyncThunk(
  "blogs/post",
  async (blog, { rejectWithValue }) => {
    try {
      let res = await axios.post(`${baseUrl}/blogs`, blog);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  blogs: [],
  error: null,
  isLoading: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(getBlogs.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    builder.addCase(postBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postBlog.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs.push(payload);
    });
    builder.addCase(postBlog.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export const BlogReducer = blogSlice.reducer;
