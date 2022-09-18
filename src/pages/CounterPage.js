import React from 'react';
import Counter from "../components/counter/Counter";

const CounterPage = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-6">
                    <Counter/>
                </div>
            </div>
        </div>
    );
};

export default CounterPage;