import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
  name: 'auth',
  initialState: {}
})
const authReducer = auth.reducer
export default authReducer
