import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  answers: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setQuestions: (state, { payload }) => {
      state.questions = payload;
    },
    setAnswer: (state, { payload }) => {
      state.answers[payload.question_id] = payload.answer;
    },
  },
});

export const { setQuestions, setAnswer } = dataSlice.actions;

export default dataSlice.reducer;
