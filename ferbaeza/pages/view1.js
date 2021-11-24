import React, {useState , useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';



function useStatePage() {
    const [count, setCount] = useState(5);
    function decrementCount(){
        setCount(prevCount => prevCount - 1);
    }
    function incrementCount(){
        setCount(prevCount => prevCount + 1);
        if(count===9){
            document.getElementById("diez").innerHTML="<span className='text-8xl mx-4'>Diez</span>";
            console.log("Clear");
        }else{
            document.getElementById("diez").innerHTML="...";
        }
    }
    const handleScroll = () => {}
        useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    useEffect(() => {
        document.body.addEventListener('keydown', onKeyDown);
      }, []);
      
      function onKeyDown(event) {
        console.log(event);
        document.getElementById('listener').innerHTML=event['code'];
      }

    return (
        <>
            <Head>
                <title>Vista Uno</title>
            </Head>


            <div onMouseOver={handleScroll} className="back">
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
            <div className="titulo" id="diez">
            </div>
            <div className='titulo'>
                <h1>Press any key</h1>
                <h1 id="listener" className="mt-16 bg-yellow-300"></h1>
            </div>
        </>
    )
}

export default useStatePage;

