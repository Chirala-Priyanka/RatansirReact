import { useState } from "react";

function UseState5()
{
    const originalPrice=7899;
    const[price,setPrice]=useState(originalPrice)
    const[discount,setDiscount]=useState(0)
    const applyDiscount=(discountValue)=>{
        if(discountValue===10){
            setDiscount(10);
            setPrice(price*0.1);
        }
        else if(discountValue===20){
            setDiscount(20);
        setPrice(price*0.2);
    }
    else if(discountValue===30){
        setDiscount(30);
    setPrice(price*0.3);
    }
    else{
        setDiscount(0);
        setPrice(price);
    }
    }
    return(
        <>
        <h1>originalPrice:${originalPrice}</h1>
        <h2>discount price:${originalPrice-discount.toFixed(2)}</h2>
        <h3>applied discount:{discount}%</h3>
        <p>click a button to apply a discount:</p>
        <button onClick={()=>applyDiscount(10)}>apply 10% discount</button>
        <button onClick={()=>applyDiscount(20)}>apply 20% discount</button>
        <button onClick={()=>applyDiscount(30)}>apply 30% discount</button>
        <button onClick={()=>applyDiscount(0)}>reset price</button>
        </>
    )

}
export default UseState5;