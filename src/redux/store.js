import { configureStore } from "@reduxjs/toolkit"
import { useSelector } from "react-redux/es/exports"
import authReducer from './features/auth-slice'


export const store = configureStore({
    reducer: {
        authReducer
    }
})

export const useAppSelector = useSelector