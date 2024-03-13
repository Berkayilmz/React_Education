import React from "react"

const Counter=React.memo((props)=>{
    console.log("Render!!!")
    return(
    <>
        <button onClick={props.decrement}>Azalt</button>
    </>
    )
  })  
 export default Counter  