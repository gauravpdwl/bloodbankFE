import donorReducer from "./reducers/donorreducer";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        donorReducer
    }
})

export default store;