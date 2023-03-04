import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getUserDataAlways, getUserDataOnce} from "./FirebaseHelper";

const initialState = {
    loading: false,
    data: {},
    error: ''
}

export const firebaseMyProfile = createAsyncThunk('data/myProfile', () => getUserDataAlways())

const myProfileSlice = createSlice({
    name: 'dataFirebase',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(firebaseMyProfile.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(firebaseMyProfile.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(firebaseMyProfile.rejected, (state, action) => {
            state.loading = false
            state.data = {}
            state.error = action.error.message
        })
    },
})

export default myProfileSlice.reducer