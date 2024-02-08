import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name:'tom'
        }
    },
    reducers: {
        setToken(state, action) {
            // console.log(action.payload);
            state.user = {...state.user,token:action.payload}
        }
    }
})

export const { setToken } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer