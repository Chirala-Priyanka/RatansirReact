import { useState } from "react";

function UseState4()
{
    const [apple,setApple]=useState(0)
    return(
        <>
        <h1>Number of Apples: {apple}</h1>{
            apple===0?(
                <p>No apples left!</p>
             ):(
            <p>great! you have some apples</p>
        )
    }
<button onClick={()=>setApple(apple+1)}>Add 1 apple</button>
<button onClick={()=>apple>0 && setApple(apple-1)}>remove 1 apple</button>
<button onClick={()=>setApple(0)}>reset</button> 
        </>
    )
}
export default UseState4;