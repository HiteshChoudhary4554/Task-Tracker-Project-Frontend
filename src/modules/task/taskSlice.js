import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cohort: null,
  college: null,
  extra: null,
  onGoning: null,
  today: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addCohort: (state, action) => {
      state.cohort = action.payload;
    },
    addCollege: (state, action) => {
      state.college = action.payload;
    },
    addExtra: (state, action) => {
      state.extra = action.payload;
    },
    addOnGoing: (state, action) => {
      state.onGoning = action.payload;
    },
    addToday: (state, action) => {
      state.today = action.payload;
    },
    allTasksNull : (state) => {
      state.cohort = null
      state.college = null
      state.extra = null
      state.onGoning = null
      state.today = null
    }
  },
});

// Action creators are generated for each case reducer function
export const { addCohort, addCollege, addExtra, addOnGoing, addToday, allTasksNull } =
  taskSlice.actions;

export default taskSlice.reducer;
