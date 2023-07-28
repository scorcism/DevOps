import { useState,useEffect } from "react"
import Clock from "./Clock";

const Body = () => {
    const [clockStart,setclockStart] = useState(false);
    
    const setLocal = (value) => {
        localStorage.setItem("time",value);
        location.reload()
    }
 

    const click25 = (e) =>{
        e.preventDefault()
        setLocal(25)
    }

    const click40 =(e) =>{
        e.preventDefault()
        setLocal(40);
    }
    const clickclock =(e) =>{
        e.preventDefault()
        setLocal(25);
    }
    const clickshort =(e) =>{
        e.preventDefault()
        setLocal(10);
    }
    const clicklong =(e) =>{
        e.preventDefault()
        setLocal(15);
    }

    const clockstart = () => {
        setclockStart(true)
    }

    return (
        <>
            <div className="container">
                <div className="container-body">
                    <div className="timings-main">
                        <div className="25" onClick={click25}>25 Minute Clock</div>
                        <div className="line">|</div>  
                        <div className="40" onClick={click40}>40 Minute Clock</div>
                    </div>
                    <div className="container-clock">
                        <div className="body-clock">

                            <div className="body">
                                <div className="menu">
                                    <div className="clock" onClick={clickclock}><a>Clock</a></div>
                                    <div className="short-time" onClick={clickshort}><a>Short Break</a></div>
                                    <div className="long-time" onClick={clicklong}><a>Long Break</a></div>
                                </div>
                                <div id="timer">
                                    <Clock clockStart = {clockStart}/>
                                </div>
                                <div className="start-button">
                                    <h4 onClick={clockstart}>

                                    Start
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body