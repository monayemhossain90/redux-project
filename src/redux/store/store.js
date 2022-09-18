import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../state/counter/counterSlice";
import TodoSlice from "../state/Todo/TodoSlice";

export default configureStore({
    reducer:{
        counter:counterSlice,
         todo:TodoSlice
    }
})