import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/Todo/TodoSlice";

const CreateTodo = () => {
    const dispatch = useDispatch();
     const taskInput = useRef();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} type="text" className="form-control" placeholder="Task Name"/>
                </div>
                <div className="col-md-2">
                    <button onClick={()=>dispatch(AddTodo(taskInput.current.value))} className="btn btn-danger"> Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;