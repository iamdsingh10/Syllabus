import React, { useRef,useState } from 'react';

 export default function Optimisation1({name}){
    const [click,setClick] = useState('div1');
    console.log("Optimisation1 rendered");
    return <>
    <div>hello---{name}{click}</div>
    <button onClick={()=>setClick('div2')}>button from Optimisation1</button>
    </>
}

function Optimisation2({name}){
    const [city,setCity] = useState('Delhi');
    console.log("Optimisation2 rendered");
    return <div>
    <div>Hello My name is {name} and I am from {city}</div>
    <button onClick={()=>setCity('Mumbai')}>Optimisation2</button>
    </div>
}


const Optimisation3 = React.memo(({onClick}) => {
    const [name,setName] = useState('Kuntal');
    console.log("Optimisation3 rendered");
    return <>

    <div>hello {name}!
        <button onClick={()=>{setName('John'); onClick()}}>Optimisation3</button>
        </div></>
})

const UpdateName = React.memo(({onClick}) =>{
    console.log('UpdateName rendered');
    const inputRef = useRef(null);
    return <div>
        <input ref={inputRef} placeholder='Enter Your Name'/>
        <button onClick = {()=>{onClick(inputRef.current.value)}}>
            UpdateName
        </button>

    </div>
})

function Dinner(){
    console.log('Dinner rendered');
    return <>
    <div> hye from dinner </div>
    </>
}
export {Optimisation2, Optimisation3, UpdateName, Dinner};