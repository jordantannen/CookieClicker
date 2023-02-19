import { useState } from "react";
import React from "react";
import CookieImg from "../img/cookie.png"
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

export default function Cookie(){

    const [count, setCount] = useState(0)
    const [doubleClick, setDoubleClick] = useState(false)

    function increaseCount() {

        let x = 1

        if (count >= 10){
            doubleClick ? null : confetti()
            x = 2
            setDoubleClick(true)
        }

        setCount(prevCount => prevCount + x)
    }

    return(
        <div className="apple">
            <img className="cookie" onClick={increaseCount} src={CookieImg} alt="" width={200} height={200} />
            <h1>{count}</h1>
            {doubleClick ? <h2>Double Click Activated!</h2> : null}
        </div>
    )
}