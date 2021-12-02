import React, { useRef, useEffect } from "react";
import styles from '../styles/Home.module.css'


export default function MyButton() {
    const text = useRef();
    function focustext(){
        text.current.focus();
    }
    return (
        <div className=
        "mt-12 w-auto m-auto text-3xl">
            <CustomText ref={text}/>
        <input type="button" value="focus" onClick={focustext}/>
        
        </div>
    );
};

const CustomText = React.forwardRef((props, ref)=>{
    return(
        <input type="text" ref={ref}/>
    )
})


