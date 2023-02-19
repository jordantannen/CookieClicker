import { useState } from "react";
import React from "react";
import CookieImg from "../img/cookie.png"

export default function Cookie(){

    const [count, setCount] = useState(0)

    function increaseCount() {

        let x = 1

        if (count >= 10){
            x = 2
        }

        setCount(prevCount => prevCount + x)
    }

    return(
        <div className="apple">
            <img className="cookie" onClick={increaseCount} src={CookieImg} alt="" width={200} height={200} />
            <h1>{count}</h1>
            
        </div>
    )
}