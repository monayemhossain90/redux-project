import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, customValue} from "../../redux/state/counter/counterSlice";

const Counter = () => {

    const myNumber=useRef();
    const dispatch = useDispatch();
    const count=  useSelector((state)=>state.counter.value);

    return (
        <>
            <div className="card-body">
                  <h1 className="card-title">{count}</h1>
                <div className="my-4">
                    <button onClick={()=>dispatch(increment())} className="btn btn-primary mx-2">Increase</button>
                    <button onClick={()=>dispatch(decrement())} className="btn btn-primary">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={ myNumber} className="form-control w-50" type="number"/> <br/>
                    <button onClick={()=>dispatch(customValue(myNumber.current.value))} className="btn btn-danger my-4"> Custom Value</button>
                </div>

            </div>
        </>
    );
};

export default Counter;