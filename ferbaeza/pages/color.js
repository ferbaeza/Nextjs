import React, {useState} from 'react';

function useStatePage() {
    const [state, setState] = useState({
        count: 4,
        color: "blue"
    });

    const count = state.count;
    const color = state.color;

    // Decrement Count function
    function decrementCount(){
        setState(prevState => {
            return {...prevState, count : prevState.count - 1}
        });
    }

    // Increment Coutn Function
    function incrementCount(){
        setState(prevState => {
            return {...prevState, count : prevState.count + 1}
        });
    }

    return (
        <>
            <div className="text-center text-3xl text-red-600"><a href="/">Back</a></div>
            <div className="flex flex-row items-center justify-center shadow-2xl w-full flex-1 px-20 text-center pt-20">
                <button className="text-3xl rounded-2xl w-auto " onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <span className="text-2xl mx-4">{color}</span>
                <button className="text-3xl rounded-2xl w-auto" onClick={incrementCount}>+</button>
            </div>
        </>
    )
}

export default useStatePage;