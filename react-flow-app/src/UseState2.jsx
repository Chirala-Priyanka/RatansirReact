import { useState } from "react";

function UseState2()
{
    const[count,setcount]=useState(0)
    const handleclick=()=>{
        setcount(count+1);
    }
        const handleclick1=()=>{
            setcount(count-1);
        }
    return(
        <>
        <h1>this is counter value:{count}</h1>
       <button style={{color:'red'}} onClick={handleclick}> Increment</button>  
       <button style={{color:'blue'}} onClick={handleclick1}>Decrement</button>     
           </>
    )
}
export default UseState2;

