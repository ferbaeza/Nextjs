import React,{ useState, useMemo} from "react";
import UserCard from "./utils/Usercard";
import Link from'next/link';
import Head from 'next/head';


const App = () => {
    const [counter, setCounter] = useState(0);

    const memoCard = useMemo(()=>{
        return <UserCard/>;
    },[]);
    
return(
    <>
            <Head>
                <title>Vista dos</title>
            </Head>

            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

    <div className="text-3xl text-center  w-81 h-72">
        <h1 className="
        bg-blue-200 text-center mt-9 text-white w-36 m-auto shadow-lg
        ">Custom UserCard</h1>
        <button className="
        bg-blue-500 mt-9 rounded-2xl text-white text-3xl shadow-lg
        
        " onClick={() => setCounter(counter + 1)}>
            Click Me! You clicked {counter} times.
        </button>
    </div>
    </>
    )
}
export default App;