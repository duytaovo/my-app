import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './pages/auth/auth.slice'

const rootReducer = {
  auth: authReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
})
export default store
