import React, { useRef, useEffect } from "react";
import Link from'next/link';
import Head from 'next/head';



export default function MyButton() {
    const text = useRef();
    function focustext(){
        text.current.focus();
    }
    return (
        <>
            <Head>
                <title>ref Hook </title>
            </Head>

            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>

            <div className=
                "mt-12 w-auto m-auto text-3xl text-center">
                <CustomText ref={text}/>
                <input className="
                bg-yellow-300 rounded-l rounded-r text-2xl text-white" 
                type="button" value="PUSH" onClick={focustext}/>
            
            </div>
        </>
    );
};

const CustomText = React.forwardRef((props, ref)=>{
    return(
        <input className=
        "" 
        type="text" ref={ref}/>
    )
})


