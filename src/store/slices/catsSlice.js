import { createSlice } from "@reduxjs/toolkit"
import { getCats } from "../thunks/catsThunk";

const initialState = {
  cats:JSON.parse(localStorage.getItem('favourites') ?? []),
  isLoading: true,
  error: ''
}

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setFavourite(state,action) {
      state.cats.map((cat)=>{
        if(cat.id === action.payload){
          cat.isFavourite = !cat.isFavourite
        }
      });
    }
  },
  extraReducers: {
    [getCats.pending]: (state) => {
      state.isLoading = true;
    },
    [getCats.fulfilled]: (state, action) => {
      state.cats = [...state.cats, ...action.payload];
      state.isLoading = false;
    },
    [getCats.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
})

export const { setFavourite } = catsSlice.actions;
export default catsSlice.reducer;