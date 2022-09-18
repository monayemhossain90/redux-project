import React from 'react';
import Swal from "sweetalert2";
import {RemoveTodo} from "../../redux/state/Todo/TodoSlice";
import store from "../../redux/store/store";

const TodoDeleteAlert = (i) => {
    return (
        Swal.fire({
            title: 'Are you sure to delete ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                   store.dispatch(RemoveTodo(i))
            }
        })
    );
};

export default TodoDeleteAlert;