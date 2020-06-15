import React, { useState } from 'react';
import './Room.css';

function Room(){
    const [ islit, notlit ] = useState (false) ;
function on(){
    notlit (true);
}
function off(){
    notlit ( false );
}
return(
    <div className= {'room ${islit? "lit" : "dark"}'}>
        This room is {islit ? "lit" : "dark"}
        <button onClick={on}>Click to turn on lights!</button>
        <button onClick={off}>Click to turn off lights!</button>
    </div>
)
}

export default Room;