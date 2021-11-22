import React, {useEffect, useState} from "react";

export default function showPage(){
    const [resourceType, setResourceType] = useState('bender');
    const [items, setItems]= useState([]);
    useEffect(() => {
        fetch(`https://futuramaapi.herokuapp.com/api/characters/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    return (
        <>
            <div className="back"><a href="/">Back</a></div>

            <div className="text-center text-blue-700">
                <button
                    className="btn text-center text-4xl "
                    onClick={() => setResourceType('bender')}>
                    Bender
                </button>
                <button
                    className="btn text-4xl"
                    onClick={() => setResourceType('fry')}>
                    Fry
                </button>
                <button
                    className="btn text-4xl"
                    onClick={() => setResourceType('leela')}>
                    Leela
                </button>
            </div>
            <h1 className="text-7xl text-center text-blue-500">{resourceType}</h1>
            <ul className="my-10">
                {items.map((item, index) => {
                    return <div key={index} className=" w-auto m-auto text-xl pb-2 mb-2 ml-14">
                        {JSON.stringify(item.character)}, 
                        {JSON.stringify(item.quote)}
                        {JSON.stringify(item.image)}


                    </div>
                })}
            </ul>
        </>

    )

}