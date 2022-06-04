import React from "react";
import './index.css'

function Header()
{
    return(
    <>
    <div className="box">     
    <p> <b>Contractor Form </b></p> <hr/>
    <form> 
            <label> Name </label>
            <input  type = 'text'></input> 
            <br/>
            
            <label> Pan Card </label>
            <input  type = 'text'></input>
            <br/>
            
            <label> Remarks </label>
            <textarea style={{verticalAlign:'text-top'}}></textarea>
            <br/>
            <button className="button"> Submit </button>
            <button className="button"> Cancel </button> 
    </form>
    </div>
    </>)
}
export default Header;
