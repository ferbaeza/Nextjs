import React, {useEffect, useState} from "react";
import Link from 'next/link';
import Head from "next/head";

export default function showPage(){
    const [resourceType, setResourceType] = useState('1');
    const [items, setItems]= useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    for (let i=1; i<=10; i++){
        //const div = document.getElementById('nav').innerHTML='<button className="btn text-2xl"onClick={() => setResourceType('+i+')}>'+i+'</button>';
        //console.log(i);
    }

    return (
        <>
            <Head>
                <title>Api</title>
            </Head>

            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>
            
            <div className="text-center" id="nav">
                <button
                    className="btn text-3xl text-center bg-gray-300 text-white w-16 shadow-2xl saturate-100"
                    onClick={() => setResourceType('1')}>
                    1
                </button>
                <button
                    className="btn text-3xl text-center bg-gray-300 text-white w-16 shadow-2xl saturate-100"
                    onClick={() => setResourceType('2')}>
                    2
                </button>
                <button
                    className="btn text-3xl text-center bg-gray-300 text-white w-16 shadow-2xl saturate-100"
                    onClick={() => setResourceType('3')}>
                    3
                </button>
                <button
                    className="btn text-3xl text-center bg-gray-300 text-white w-16 shadow-2xl saturate-100"
                    onClick={() => setResourceType('4')}>
                    4
                </button>                <button
                    className="btn text-3xl text-center bg-gray-300 text-white w-16 shadow-2xl saturate-100"
                    onClick={() => setResourceType('5')}>
                    5
                </button>
            </div>
            <h1 className="text-9xl text-center">{resourceType}</h1>
            <div>
                {items.map((item, index) => {
                    return (<div 
                    key={index} 
                    className="my-10 bg-gray-400">
                    <h2 className="text-3xl text-white ml-10">{item.id}</h2>
                    <h2 className="text-2xl text-white text-center">{item.title}</h2>
                    <p className="text-center">{item.body}</p>

                    </div>
                )})}
            </div>
        </>

    )

}