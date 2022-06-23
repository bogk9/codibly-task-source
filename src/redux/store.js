import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appReducer"

let reducer = {
    app: appReducer
}

export const store = configureStore({
    reducer
})