import React from "react";

const Display=(para)=>{
    const {item_name,cost,stocks}=para;
    // console.log(para);
    return(
        <div>hello
        <h2>{item_name}</h2>
        <p>{cost}</p>
        <p>{stocks}</p>
        </div>
    )
}

export default Display;