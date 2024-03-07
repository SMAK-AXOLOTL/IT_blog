import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";
import {AllCommentsData} from "../../../dataMocks/CommentsData";
import {CommentType} from "../../../Utils/Types";


//FIXME: fix adding comments
export const allCommentsSlice = createSlice({
    name: 'comments',
    initialState: AllCommentsData,
    reducers: {
        deleteCommentById: (state, action) => {
            state.splice(action.payload, 1)
        },
        addComment: (state, action) => {
            const new_comment: CommentType= {id: state.length, authorName:action.payload.userName, commentDateTime: Date.now(), rating: 0, commentText: action.payload.text}
            state.push(new_comment)
        },
        likeCommentById: (state, action) => {
            state[action.payload].rating += 1
        },
        dislikeCommentById: (state, action) => {
            state[action.payload].rating -= 1
        }
    }
})
export const {deleteCommentById, addComment, likeCommentById, dislikeCommentById} = allCommentsSlice.actions
export const selectCommentById = (state:RootState, id:number) => state.comments[id]
export const selectAllComments = (state:RootState) => state.comments
export default allCommentsSlice.reducer

