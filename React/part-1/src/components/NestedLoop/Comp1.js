import { useContext } from "react"
import { PersonContext } from "../PersonContext"

// export default function Comp1(){
//     const [name,setName] = useState({
//         firstName: 'kuntal',
//         lastName: 'banerjee'
//     })
//     return <>
//     <div>I am from Comp1</div>
//     <Comp2   name={name}/>
//     <Comp4 name={name}/>
//     </>
// }
//  function Comp2({name}){
//     return <>
//     <div>I am from Comp2</div>
//     <Comp3 name={name}/>
//     </>
// }
//  function Comp3({name}){
//     return <>
//     <div>I am from Comp3- {name.firstName}</div>
    
//     </>
// }
// function Comp4({name}){
//     return <>
//     <div>I am from Comp4- {name.lastName}</div>
//     </>
// }

export default function Comp1(){
    
    return <>
    <div>I am from Comp1</div>
    <Comp2   />
    <Comp4 />
    </>
}
 function Comp2(){
    return <>
    <div>I am from Comp2</div>
    <Comp3/>
    </>
}
//  function Comp3(){
//     const names = useContext(PersonContext)
//     console.log(`hye i am from comp3, ${names}`)
//     return <>
//     <div>I am from Comp3-{Object.values(names).join(',')}</div>
    
//     </>
// }    Hooks are used only in the functional component
 function Comp3(){
    const contextValue = useContext(PersonContext)
    const person = contextValue?.name ?? contextValue
    const { firstName = '', lastName = '' } = person || {}
    const updateName = contextValue?.updateName

    console.log(`hye i am from comp3, ${firstName}`)
    return <>
    <div>I am from Comp3-{firstName}{lastName}</div>
    {updateName && (
      <button onClick={()=>{
            updateName({
                firstName:'prashant',
                lastName: 'shaw'
            })
        }} >Update Name</button>
    )}
    </>
}
function Comp4(){
    const contextValue = useContext(PersonContext)
    const person = contextValue?.name ?? contextValue
    const { firstName = '', lastName = '' } = person || {}
    return <>
    <div>I am from Comp4-{firstName}{lastName}</div>
    
    </>
}
