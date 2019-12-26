import React, { useState } from 'react';

const Counter = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }

    return (
        <div className="text-center">
            <h4 className="mb-4">{props.name}</h4>
            <button className="btn btn-outline-success btn-sm" onClick={increment}>Incremant</button>&nbsp;&nbsp;
            <button className="btn btn-outline-danger btn-sm" onClick={decrement}>Decremant</button>
            <h5 className="mt-3">{count}</h5>
        </div>
    )
}

export default Counter
