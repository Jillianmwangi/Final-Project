import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  questions: [],
  answers: [],
  comments: [],
};

const questionsApi =
  "https://finalproject-91b20-default-rtdb.firebaseio.com/Questions.json";
const answersApi =
  "https://finalproject-91b20-default-rtdb.firebaseio.com/Answers.json";
const commentsApi =
  "https://finalproject-91b20-default-rtdb.firebaseio.com/Comments.json";

export const addQuestion = createAsyncThunk(
  "questions/addquestion",
  async (payload, thunkapi) => {
    try {
      console.log(payload);
      const newQuestion = await axios.post(questionsApi, { ...payload });
      thunkapi.dispatch(fetchQuestions());
      console.log(payload.question);
    } catch (error) {
      thunkapi.rejectWithValue(error);
    }
  }
);

export const fetchQuestions = createAsyncThunk(
  "questions/fetch",
  async (_, thunkApi) => {
    try {
      let response = await axios.get(questionsApi);
      let data = [];
      let keys = Object.keys(response.data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key }); 
      }
      console.log('yooooooooooh');
      console.log(data);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
export const addAnswer = createAsyncThunk(
    "answer/addanswer",
    async (payload, thunkApi) => {
      try {
        console.log("yppph");
        console.log(payload);
        const newAnswer = await axios.post(answersApi, { ...payload });
        console.log(payload.answer);
      } catch (error) {
        thunkApi.rejectWithValue(error);
      }
    }
  );

  export const fetchAnswers = createAsyncThunk(
    "answers/fetch",
    async (_, thunkApi) => {
      try {
        let response = await axios.get(answersApi);
        let data = [];
        let keys = Object.keys(response.data);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          data.push({ ...response.data[key], id: key });
        }
        console.log(data);
        return data;
      } catch (error) {
        thunkApi.rejectWithValue(error);
      }
    }
  );

  export const addComment = createAsyncThunk(
    "comment/addcomment",
    async (payload, thunkApi) => {
      try {
        const newComment = await axios.post(commentsApi, { ...payload });
      } catch (error) {
        thunkApi.rejectWithValue(error);
      }
    }
  );
  
  export const fetchComments = createAsyncThunk(
    "fetchcomments",
    async (_, thunkApi) => {
      try {
        let response = await axios.get(commentsApi);
        let data = [];
        let keys = Object.keys(response.data);
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          data.push({ ...response.data[key], id: key }); //this line uses the spread operator to store all the objects and their properties corresponding to their key
        }
        console.log(data);
        return data;
      } catch (error) {
        thunkApi.rejectWithValue(error);
      }
    }
  );
  



const questionSlice = createSlice({
  name: "Questions",
  initialState,
  reducers: {
    updateQuiz: (state, action) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      // ADD QUESTION
      .addCase(addQuestion.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(addQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
       })
      // .addCase(addAnswer.pending, (state, action) => {
      //   state.loading = true;
      //   state.error = "";
      // })
      // .addCase(addAnswer.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = "";
      // })
      // .addCase(addAnswer.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })
      //fetch questions
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
        state.questions = [];
        state.error = ""
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.loading = false;
      })

      //Add Answers
    //   .addCase(addAnswer.pending, (state, action) => {
    //     state.loading = true;
    //     state.error = "";
    //   })
    //   .addCase(addAnswer.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //   })
    //   .addCase(addAnswer.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
    // //fetch answers
    // builder
    //   .addCase(fetchAnswers.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchAnswers.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.answers = action.payload;
    //   })
    //   .addCase(fetchAnswers.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   })
    //   //Add comments
    //   .addCase(addComment.pending, (state, action) => {
    //     state.loading = true;
    //     state.error = "";
    //   })
    //   .addCase(addComment.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //   })
    //   .addCase(addComment.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   })
    //   //fetch comments
    //   .addCase(fetchComments.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchComments.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.comments = action.payload;
    //   })
    //   .addCase(fetchComments.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

// export default {updateQuiz} = questionSlice.actions;

export default questionSlice.reducer;
