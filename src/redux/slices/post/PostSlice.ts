import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {PostData} from "../../../dataMocks/PostData";

export const postSlice = createSlice({
    name: 'author',
    initialState: PostData,
    reducers: {
        changePostRating: (state, action) => {
            state.postRating += action.payload
        }
    }
})
export const {changePostRating} = postSlice.actions
export const selectPostInfo= (state:RootState) => state.post
export default postSlice.reducer