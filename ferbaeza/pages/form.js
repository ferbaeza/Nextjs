import React, {useState} from 'react';

function useStatePage() {
    /*const [state, setState] = useState({
        count: 4,
        color: "blue"
    });

    const count = state.count;
    const color = state.color;


                    <button className="text-3xl rounded-2xl w-auto " onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <span className="text-2xl mx-4">{color}</span>
                <button className="text-3xl rounded-2xl w-auto" onClick={incrementCount}>+</button>




    */
    const [state, setState] = useState({
        name: "",
        email: ""
    });
    const name = state.name;
    const email = state.email;







    // Decrement Count function
    function decrementCount(){
        setState(prevState => {
            return {...prevState, name : prevState.name}
        });
    }

    // Increment Coutn Function
    function incrementCount(){
        setState(prevState => {
            return {...prevState, email : prevState.email}
        });
    }

    return (
        <>
            <div className="text-center text-3xl text-red-600"><a href="/">Back</a></div>
            <div className="flex flex-row items-center justify-center shadow-2xl w-full flex-1 px-20 text-center pt-20">
            </div>
            <div>
                <form className="w-auto m-auto text-center placeholder-red-700 mt-20">
                    <input type='text' placeholder="name"></input>
                    <input type='text' placeholder="name"></input>

                </form>
                <div className="flex flex-row items-center justify-center shadow-2xl w-full flex-1 px-20 text-center pt-20">
                <span className="text-2xl mx-4">{name}</span>
                <span className="text-2xl mx-4">{email}</span>
            </div>

            </div>
        </>
    )
}

export default useStatePage;