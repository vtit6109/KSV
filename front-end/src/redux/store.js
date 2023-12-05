import { configureStore } from '@reduxjs/toolkit'
import blogsSlice from './slice/blogsSlice'
export const store = configureStore({
  reducer: {
    blogs: blogsSlice
  },
})
