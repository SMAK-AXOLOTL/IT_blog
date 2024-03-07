import {createSlice} from "@reduxjs/toolkit";
import {UserData} from "../../../dataMocks/UserData";
import {RootState} from "../../store";

export const userSlice = createSlice({
    name: 'user',
    initialState: UserData,
    reducers: {
        changeName: (state, action) => {
            state.userName = action.payload
        },
        changeProfilePic: (state, action) => {
            state.userProfilePic = action.payload
        },
        changeRating: (state, action) => {
            state.userRating = action.payload
        }
    }
})
export const selectUserName = (state: RootState) => state.user.userName
export default userSlice.reducer