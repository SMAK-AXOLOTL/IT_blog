import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {AuthorData} from "../../../dataMocks/AuthorData";

export const authorSlice = createSlice({
    name: 'author',
    initialState: AuthorData,
    reducers: {
        changeAuthorName: (state, action) => {
            state.authorName = action.payload
        },
        changeAuthorImg: (state, action) => {
            state.authorImg = action.payload
        },
        changeStatus: (state, action) => {
            state.authorStatus = action.payload
        },
        changeEngagementBait:(state, action) => {
            state.engagementBait = action.payload
        }
    }
})
export const {changeAuthorName, changeAuthorImg, changeStatus, changeEngagementBait} = authorSlice.actions
export const selectAuthorInfo= (state:RootState) => state.author
export default authorSlice.reducer