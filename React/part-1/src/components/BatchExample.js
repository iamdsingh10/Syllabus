import React, { useState } from 'react';

function BatchExample1(){
    const [fName,setFName] = useState('Kuntal');
    const [lName,setLName] = useState('Banerjee');
    console.log('BatchExample Rendered');
    return <>
    <div>Greeting -- {fName} {lName}</div>
    <button onClick = {()=>{setFName('Bibek'); setLName('Sharma')}}>Change Name</button>
    </>
}

function BatchExample2(){
    const [fName,setFname] = useState('deepak');
    const [lName,setlname] = useState('Singh');
    return <>
    <div>hye I am {fName} {lName}</div>
    <button onClick = {()=>{setFname('John')}}>Update Fname</button>
    <button onClick = {()=>{setlname('Doe')}}>Update Lname</button>
    </>
}

function BatchExample3(){
    const [fName,setFName] = useState('deepak');
    const [lName,setlName] = useState('Singh');
    return <>
<div>hye bro {fName} {lName}</div>    
<button onClick = {()=>{
    setFName('john')
    setlName('doe')
    setFName('kuntal')
    setlName('Banerjee')
}}
>Update Name</button>
    </>
}
export {BatchExample1, BatchExample2,BatchExample3};