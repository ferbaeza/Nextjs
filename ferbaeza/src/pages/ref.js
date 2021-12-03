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
                "mt-12 w-auto m-auto text-3xl">
                <CustomText ref={text}/>
                <input type="button" value="focus" onClick={focustext}/>
            
            </div>
        </>
    );
};

const CustomText = React.forwardRef((props, ref)=>{
    return(
        <input type="text" ref={ref}/>
    )
})


