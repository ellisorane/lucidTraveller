import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feature/Auth/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})