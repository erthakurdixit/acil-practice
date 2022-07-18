import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  const decrease = () => {
    setcount(count - 1);
    setshow(!show)
  };
  const increase = () => {
    setcount(count + 1);
  };

  let arr=[1,2,3,4]

  const [show, setshow] = useState(true)

const mycall=(childData)=>{
    return childData
}

mycall()


  return (
    <>
      <div className="counter">
        <button onClick={decrease}>-</button>
        <input type="text" value={count} />
        <button onClick={increase}>+</button>
      </div>

{arr.map((e)=><h2>{e}</h2>)}

{show && (<h1>
    Boom Guys
</h1>) }

<InnerComponent parentCallback={mycall} name={"Bhuvi"} greeting={"Good Morning"}/>

    </>
  );
}

export default Counter;


const InnerComponent=({name,greeting,parentCallback})=>{
     
    return(
        <>
        {parentCallback("narender")}
        <h2>z</h2>
        <h1>Hellosss {name} {greeting}</h1>
        </>
    )
  
}

// export InnerComponent;