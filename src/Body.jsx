import React from 'react';
import './index.css'

function Body()
{
    return(
    
        <form className="background"> 
            <label> Name </label>
            <input className="background" type = 'text'></input> 
            <br></br>
            
            <label> Pancard </label>
            <input className="background" type = 'text'></input>
            <br></br>
            
            <label> Remarks </label>
            <textarea className="background"></textarea>

        </form>)
}
export default Body;