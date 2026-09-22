import React, { useState } from "react";
export default function MemoExample(){
    const [click,setClick] = useState('div1');
    console.log("MemoExample rendered");
    return <>
    <div>
        <button onClick={()=>setClick('div2')}>button from MemoExample</button>
    <Comp1/></div>
    </>
}
// here we can see that when we click on the button the state of MemoExample changes and it re-renders the whole component and all the child components also re-rendered. But if we use React.memo() then only MemoExample will re-render and not the child components.

function Comp1(){
    console.log("Comp1 rendered");
    return<>
    <div>
    hye I am from Comp1
    <Comp2/></div>
    </>
}

function Comp2(){
    console.log("Comp2 rendered");
    return<>
    <div>
    hye I am from Comp2</div>
    </>
}