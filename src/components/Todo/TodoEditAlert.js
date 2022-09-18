import React from 'react';
import Swal from 'sweetalert2';
import {EditTodo} from "../../redux/state/Todo/TodoSlice";
import store from "../../redux/store/store";



const TodoEditAlert = (i,item) => {
    Swal.fire({
             title: 'Update Task Name',
            input: 'text',
             inputValue:item ,
             inputValidator: (value) => {
                 if (value) {
                     store.dispatch(EditTodo({index:i,task:value}))
                 }
         }}
     );

};

export default TodoEditAlert;



