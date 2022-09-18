import React from 'react';
import CreateTodo from "../components/Todo/CreateTodo";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
    return (
        <div className="container  my-5">
            <div className="row">
                <div className="col">
                    <div className="card  mb-3" >
                        <div className="card-header">
                            <h2>Todo App</h2>
                        </div>
                        <div className="card-body">
                            <CreateTodo></CreateTodo>
                            <TodoList></TodoList>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TodoPage;