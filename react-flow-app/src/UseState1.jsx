import { useState } from "react";

function UseState1()
{
    const [count,setcount]=useState(0)
    const handleclick=()=>{
        setcount(count+1);

    }
    return(
        <>
        <h1>this is counter value:{count}</h1>
        <button style={{color:'green'}} onClick={handleclick}>Increment</button>
        </>
    )
}
export default UseState1;
