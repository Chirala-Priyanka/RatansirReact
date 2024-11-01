import { useState } from "react";

function UseState3()
{
    const [score,setscore]=useState(0)
    return(
        <>
        <h1>cricket score:{score}</h1>
        <button onClick={()=>setscore(score+1)}>+1</button>
        <button onClick={()=>setscore(score+2)}>+2</button>
        <button onClick={()=>setscore(score+3)}>+3</button>
        <button onClick={()=>setscore(score+4)}>+4</button>
        <button onClick={()=>setscore(score+5)}>+5</button>
        <button onClick={()=>setscore(score+6)}>+6</button>
        <button onClick={()=>setscore(0)}>reset</button>
        </>
    )

}
export default UseState3;