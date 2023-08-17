import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    course: {
      allCourses: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    courseStart: (state) => {
      state.course.isFetching = true;
    },
    courseSuccess: (state, action) => {
      state.course.isFetching = false;
      state.course.allCourses = action.payload;
      state.course.error = false;
    },
    courseFailed: (state) => {
      state.course.isFetching = false;
      state.course.error = true;
    },
  },
});

export const { courseStart, courseFailed, courseSuccess } = courseSlice.actions;

export default courseSlice.reducer;
