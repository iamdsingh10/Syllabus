//     import React, { useEffect } from "react";
import { useEffect } from "react";

// export default function ErrorExample({name:{name,setName}}) {
// //     console.log(`hye i am from from error example ${setName}`)
// //     const nameToDisplay = name || { firstName: '', lastName: '' }; // Default to empty strings if name is null or undefined
// //     useEffect(()=>{
// //         setName({
// //             firstName: 'John',
// //              lastName: 'Doeggg'
// //             })},[])
// //    return<>
// //    hello errorexample {nameToDisplay.firstName} {nameToDisplay.lastName}
// //    </>
// }


export default function ErrorExample({list:{list,setList}}){
useEffect(()=>{
    setList(['apple','banana','mango'])
},[setList]);                             // for some moment until and unless this code is executed list is null
console.log(list);
    return<>
    <div>
    {(list instanceof Array) && list.map(item=>(<div>{item}</div>))}
    </div>
    </>
}