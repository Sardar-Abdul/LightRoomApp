import React, { useState } from 'react';
import './Room.css';

function Room(){
    const [ islit, notlit ] = useState (false) ;
function on(){
    notlit(true);
}
function off(){
    notlit(false);
}
return(
    <div className= {`room ${islit? "On" : "Off"}`}>
        <h2>This App is developed by <strong>Abdul!</strong></h2>
        <br/>
        <br/>
        <br/>
        <p><strong>This is a basic react app. Click buttons to turn lights on and off of this room.</strong></p>
        <br/>
        <br/>
        <br/>
        Lights of this room are {islit ? "On" : "Off"}
        <br/>
        <br/>
        <br/>
        
        <button onClick={on}>Turn on lights!</button>
        <button onClick={off}>Turn off lights!</button>
    </div>
)
}

export default Room;