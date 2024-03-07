import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/UserSlice'
import authorReducer from "./slices/author/AuthorSlice";
import commentsReducer from './slices/comments/CommentsSlice'
import postReducer from './slices/post/PostSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        author: authorReducer,
        comments: commentsReducer,
        post: postReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch