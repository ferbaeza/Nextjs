import React, {useState} from 'react';

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
        if(count>9){
            document.getElementById("diez").style.display="block";
            console.log("Clear");
        }else if(count<10){
            document.getElementById("diez").className="hidden";
        }else{
            document.getElementById("diez").innerHTML="...";
        }
    }

    return (
        <>
            <section className="sec_counter">
                <a  className="back" href="/">Back</a>
                <h2 className="texto">Simple Counter</h2>
                <p className="texto">Editing by FerBaeza</p>
    
            </section>

            <div className="contador">
                <button className="btn text-2xl" onClick={decrementCount}>-</button>
                <span className="text-2xl mx-4">{count}</span>
                <button className="btn text-2xl" onClick={incrementCount}>+</button>
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