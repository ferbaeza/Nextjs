import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';



function useStatePage() {
    const [count, setCount] = useState(5);

    // Decrement Count function
    function decrementCount(){
        // Not perfect way
        // setCount(count - 1);
        // Recomended way
        setCount(prevCount => prevCount - 1);
    }

    // Increment Coutn Function
    function incrementCount(){
        setCount(prevCount => prevCount + 1);
        if(count===9){
            document.getElementById("diez").style.display="block";
            console.log("Clear");
        }else{
            document.getElementById("diez").innerHTML="...";
        }
    }

    return (
        <>
            <Head>
                <title>Vista Uno</title>
            </Head>


            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>
            <section className="sec_counter">
                <h2 className="texto">Simple Counter</h2>
                <p className="texto">Editing by FerBaeza</p>
    
            </section>

            <div className="w-auto m-auto text-center text-3xl mt-36">
                <button className="rounded-3xl w-12 bg-blue-600 text-center text-white btn text-2xl" onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <button className="rounded-3xl w-12 bg-blue-600 text-center text-white btn text-2xl" onClick={incrementCount}>+</button>
            </div>
            <div id="diez" className="hidden">
            <div className="contador">
                <span className="text-8xl mx-4">Diez</span>
            </div>
            </div>
        </>
    )
}

export default useStatePage;