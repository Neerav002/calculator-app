import React, { useState } from "react";

function Input(){

    
    const [initialVal , setInitialVal] = useState("");
    let [finalVal , setFinalVal] = useState("");
    const[op, setOp] = useState();
    
    function handleClick(e){
        const value = e.target.value;
        // console.log(!isNaN(value));
        if(!finalVal || !op){
            if(!isNaN(value)){
                setFinalVal(finalVal + value);
                } else {
                    if(finalVal){
                        if(value === "ac"){
                            setInitialVal("");
                        }  else {
                            setOp(value);
                        }
                    }
                }
        }
        else{
        if(!isNaN(value)){
        setInitialVal(initialVal + value);
        } else {
            
            if(value === "ac"){
                setInitialVal("");
            } else if(value === "="){
                if(op === "+"){
                    setFinalVal(parseInt(finalVal) + parseInt(initialVal))
                }
                if(op === "*"){
                    setFinalVal(parseInt(finalVal) * parseInt(initialVal))
                }
                if(op === "-"){
                    setFinalVal(parseInt(finalVal) - parseInt(initialVal))
                }if(op === "/"){
                    setFinalVal(parseInt(finalVal) / parseInt(initialVal))
                }
               setInitialVal("")
            } else {
                setOp(value);
                
            }
        } 
    }   
    }

    return(
        <>
        <div className="center"> 
        <button className="input-btn" >{initialVal || finalVal} </button>
        </div>
        
        <div className='center buttons'>
        <button className='num-button' value="1" onClick={handleClick}> 1 </button>
        <button className='num-button' value="2" onClick={handleClick}> 2 </button>
        <button className='num-button' value="3" onClick={handleClick}> 3 </button>
        <button className='num-button' value="4" onClick={handleClick}> 4 </button>
        <button className='num-button' value="5" onClick={handleClick}> 5 </button>
        <button className='num-button' value="6" onClick={handleClick}> 6 </button> 
        <button className='num-button' value="7" onClick={handleClick}> 7 </button>
        <button className='num-button' value="8" onClick={handleClick}> 8 </button>
        <button className='num-button' value="9" onClick={handleClick}> 9 </button>
        <button className='num-button' value="0" onClick={handleClick}> 0 </button>
        <button className='num-button' value="." onClick={handleClick}> . </button>
        <button className='num-button' value="+" onClick={handleClick}> + </button>
        <button className='num-button' value="-" onClick={handleClick}> - </button>
        <button className='num-button' value="*" onClick={handleClick}> * </button>
        <button className='num-button' value="/" onClick={handleClick}> / </button>
        <button className='num-button spl-btn' value="ac" onClick={handleClick}> AC </button>
        <button className='num-button spl-btn' value ="=" onClick={handleClick}> = </button>
    </div>
        </>
    )
}

export default Input;