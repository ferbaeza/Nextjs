import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';

function createUser() {
    const [state, setState] = useState([]);
    const [name, setName] = useState('');


    function data(){
        setState(ol => [...ol ,' '+ name]);
        
    }

    return (
        <>
            <Head>
                <title>Formulario</title>
            </Head>
            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

            <div className="contador">
            </div>
            <div>
                <form className="w-auto m-auto text-center  mt-20">
                    <input onChange={(e)=>setName(e.target.value)}  className="data" type='text' placeholder="name"></input>
                </form>
                <div className="btn2">
                <button onClick={data}  className="btn" type='submit' placeholder="send">Send</button></div>

                <div className="flex flex-row items-center justify-center shadow-2xl w-full flex-1 px-20 text-center pt-20">
                <span className="text-2xl mx-4">{state}</span>

            </div>

            </div>
        </>
    )
}

export default createUser;