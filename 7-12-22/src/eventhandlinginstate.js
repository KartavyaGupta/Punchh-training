import React, { Component } from 'react'
function Eventhandlinginstate(){
    const handleClick = () =>{
        console.log("button clicked");
    }
    const newhandleClick=(e)=>{
        console.log(e);
        e.preventDefault();
        console.log("link clicked");
    }
    return (
        <div><button onClick={handleClick}>click me</button>
        <a href="https://www.google.com" onClick={newhandleClick}>click me </a>
        </div>
    )
}
export default Eventhandlinginstate;