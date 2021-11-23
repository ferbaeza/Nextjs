import React, {useEffect, useState} from "react";
import Link from 'next/link';
import Head from "next/head";

export default function showPage(){
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems]= useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

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

            <div className="">
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('')}>
                    1
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('')}>
                    2
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('')}>
                    3
                </button>
            </div>
            <h1 className="text-9xl">{resourceType}</h1>
            <div>
                {items.map((item, index) => {
                    return (<div 
                    key={index} 
                    className="my-10 bg-gray-400">
                    {item.id}
                    <h2>{item.title}</h2>
                    {item.body}

                    </div>
                )})}
            </div>
        </>

    )

}