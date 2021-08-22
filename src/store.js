import { configureStore } from '@reduxjs/toolkit'
import authReducer from './pages/auth/auth.slice'
import cartReducer from './pages/cart/cart.slice'
import appReducer from './app.slice'

const rootReducer = {
  auth: authReducer,
  cart: cartReducer,
  app: appReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false })
  ]
})
export default store
