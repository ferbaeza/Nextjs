import React, {useEffect, useState} from "react";
import Link from 'next/link'

export default function showPage(){
    const [resourceType, setResourceType] = useState('character');
    const [items, setItems]= useState([]);
    useEffect(() => {
        fetch(`http://futuramaapi.herokuapp.com/api/quotes/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

            <div className="">
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('character')}>
                    Characteres
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('quote')}>
                    Quote
                </button>
                <button
                    className="btn text-2xl"
                    onClick={() => setResourceType('runtime')}>
                    Runtime
                </button>
            </div>
            <h1 className="text-9xl">{resourceType}</h1>
            <ul className="my-10">
                {items.map((item, index) => {
                    return <li key={index} className="my-10 bg-gray-400">{JSON.stringify(item.character)} {JSON.stringify(item.quote)}

                    </li>
                })}
            </ul>
        </>

    )

}