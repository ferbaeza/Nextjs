import React, {useState} from 'react';

function createUser() {
    const [state, setState] = useState({
        name: "Fer",
        email: "fbaeza@gmail.com"
    });
    const name = state.name;
    const email = state.email;

    function setmail(){
        setState(prevState=> name.email)
    }

    /*
    function setmail(){
        setState(prevState => {
            return {...prevState, email : prevState.email}
        });
    }
    */
    return (
        <>
            <div className="back"><a href="/">Back</a></div>
            <div className="contador">
            </div>
            <div>
                <form className="w-auto m-auto text-center placeholder-red-700 mt-20">
                    <input className="data" type='text' placeholder="name"></input>
                    <input name={state.email} className="data" type='text' placeholder="email"></input>
                    <button onSubmit={setmail} className="btn" type='submit' placeholder="send">Send</button>


                </form>
                <div className="flex flex-row items-center justify-center shadow-2xl w-full flex-1 px-20 text-center pt-20">
                <span className="text-2xl mx-4">{name}</span>
                <span className="text-2xl mx-4">{email}</span>
            </div>

            </div>
        </>
    )
}

export default createUser;