//import logo from './logo.svg';
import './App.css';

import { useCallback, useEffect, useMemo, useState } from "react";
import Car from "./components/Class";
import Cars from "./components/Functional";
import Props from "./components/Props";
import State from './components/State'
import { Button, FaceBookButton, GoogleButton } from "./components/Buttons";
import { Card, CardWithImage, CardWithTitle } from "./components/Card";
import Click from "./components/ClickHandler";
import Form from "./components/Form";
import LifeCycle from "./components/LifeCycle";
import UseEffectExample from "./components/UesEffect";
import UseButton from "./components/UseEffectButton";
import FormValidation from "./components/FormValidation";
import ConditionalExample from "./components/ConditionalRender";
import UncontrolledComponent from "./components/UncontrolledComponent";
import FetchExample from "./components/FetchExample";
import Greeting from "./components/Greeting";
import RouteExample from './components/RouteExample';
import Fill from "./components/Fill";
import TodoListContainer from "./components/TodoListNew/TodoListContainer";
import Comp1 from "./components/NestedLoop/Comp1";
import { createContext } from "react";
import { PersonContext,PersonContextProvider } from "./components/PersonContext";
import AnotherComp from "./components/NestedLoop/AnotherComp";
import ErrorExample from "./components/ErrorExample";
import AppContainer from "./components/AppContainer";
import { ThemeContextProvider } from "./components/ThemeProvider";
import HolidayList from './components/holiday/HolidayList';
import RefExample from './components/RefExample';
import MemoExample from './components/MemoExample';
import Optimisation1, { Dinner, Optimisation3, UpdateName } from './components/Optimisation1';
import { Optimisation2 } from './components/Optimisation1';
import { BatchExample2, BatchExample1, BatchExample3 } from './components/BatchExample';
import { FileUploadExample } from './components/FileUploadExample';
import { HooksExample } from './components/HooksExample';




function App() {
    // const [name,setName] = useState({
    //     firstName: 'kuntal',
    //     lastName:'Banerjee'
    // })
     const [name,setName]= useState(null);

    // useEffect(()=>{setName({firsName: 'John', lastName: 'Doe'})},[])

    const [list,setList] = useState(null);
const items=[
    {
        name: 'bmw',
        price: 20000
    },
    {
        name: 'audi',
        price: 30000
    },
    {
        name: 'merc',
        price: 40000
    }
]
const [carItems,setCarItems]=useState([
    {
        name: 'bmw',
        price: 20000
    },
    {
        name: 'audi',
        price: 30000
    },
    {
        name: 'merc',
        price: 40000
    }
])

// setTimeout( ()=> {
//     setCarItems([
//     {
//         name: 'bmw',
//         price: 20000
//     },
//     {
//         name: 'audi',
//         price: 30000
//     }
// ])},2000)
const [state,setState] = useState('Kuntal');

const [fName,setFName] = useState('bibek');
const [lName,setLName] = useState('sharma');

const getName = function(){
    console.log('getName function called');
    return `${fName} ${lName}`
}

const onClick = useCallback(
    (fName,lName)=>{
        setFName(fName)
        setLName(lName)
    },[fName,lName]
)

const dinnerName = useMemo(getName,[fName,lName])

const [updatedName,setUpdatedName] = useState('kuntal');
const updateNameCallback = useCallback(
    (name)=>setUpdatedName(name),[]
)
console.log('App rendered');

return <>
<div style={{fontWeight: 'bold'}} >Class Component</div>
<div><Car/></div>
<hr/>
<div style={{fontWeight: 'bold'}} >functional Component</div>
<div><Cars items={carItems} /></div>
<hr/>
<div style={{ fontWeight: 'bold'}}>Passing Data as Props</div>
<div ><Props  carItems={items} /> </div>
<hr/>
<div style={{ fontWeight: 'bold'}}>Using State Hook</div>
<div ><State items={carItems}/></div>
<button onClick={()=>{
    setCarItems([
    {
        name: 'bmw',
        price: 20000
    },
    {
        name: 'audi',
        price: 30000
    }
])}
}>Update Status</button>
<hr/>
<div style={{ fontWeight: 'bold'}}>Buttons , children,Compositions, etc</div>
<div><Button style={{color: 'red'}} dir={'ltr'} >hey I am Normal Button</Button></div>
<div><FaceBookButton style={{color: 'blue'}} dir={'ltr'}  >Hey I am FaceBookButton</FaceBookButton></div>
<div><GoogleButton style={{color: 'green'}} dir={'rtl'} >Hey I am Google Button</GoogleButton></div>
<hr/>
<div><Card/></div>
<hr/>
<div><CardWithImage src='https://w0.peakpx.com/wallpaper/518/289/HD-wallpaper-shahrukh-khan-srk-smile-srk-smile.jpg'>Sharukh</CardWithImage></div>
<hr/>
<div><CardWithTitle title='hye i am title'>hye i am shahrukh</CardWithTitle></div>
<hr/>
<div style={{ fontWeight: 'bold'}}>Alert button with Handler</div>
<Click/>
<hr/>
<div style={{ fontWeight: 'bold'}}>Forms and Card</div>
<Form/>
<hr/>
<div style={{ fontWeight: 'bold'}}>LifeCycle method</div>
<LifeCycle/>
<hr/>
<div style={{ fontWeight: 'bold'}}>UseEffectExample</div>
<UseButton/>
<hr/>
<div style={{fontWeight: 'bold'}}>Form FormValidation (concept of Debouncing is also there)</div>
<FormValidation/>
<hr/>
<div style={{fontWeight: 'bold'}}>Conditional Rendering</div>
<ConditionalExample/>
<hr/>
<div style={{fontWeight: 'bold'}}>UncontrolledComponent</div>
<UncontrolledComponent/>
<hr/>
<div style={{fontWeight: 'bold'}}>Fetching Example</div>
<FetchExample/>

<h1>React Part-2</h1>
<Greeting/>
<div><FormValidation/></div>
<div style={{fontWeight: 'bold'}}>React Routing--- also composition in Routes</div>
<div><RouteExample/></div>
<hr/>

<div>
    <h2>Context-API</h2>
    <PersonContext.Provider value={{
        firstName:'kuntal',
        lastName: 'Banerjee'
    }}>
        <Comp1/>
        </PersonContext.Provider>
    </div>

    <div>
        <PersonContext.Provider  value={{
            firstName: 'vishnu',
            lastName: 'reddy'
        }}>
            <AnotherComp/>    {/* If this component is not inside the provider then we can't access the props inside the component*/ }
        </PersonContext.Provider>
    </div>
    <div>
        <PersonContext.Provider value={['kuntal', 'yogesh']}>  {/*Now this time we are passing the arrays  */}
            <h2>passing array</h2>
            <Comp1/>
            <AnotherComp/>
        </PersonContext.Provider>
    </div>
    <div>
        {/*whenever the state or value of the provider changes each and every value will re-render*/}
        <PersonContext.Provider value={{
            name:name,                             
            updateName: (newName)=> setName(newName)
            
        }}>
            <h2>passing state </h2>
            <Comp1/>
            <AnotherComp/>
        </PersonContext.Provider>
        {/* <button  onClick={()=>{
            setName({
                firstName:'prashant',
                lastName: 'shaw'
            })
        }} >Update Name</button> It updates the all the state wherever it is used in any child component */}
    </div>
    
    <div>
        <h2>Self Reliant Component- Context Api with state</h2>
        <PersonContextProvider>
            <Comp1/>
            <AnotherComp/>
        </PersonContextProvider>
    </div>
    <h1>error Example</h1>
    <ErrorExample list={{list,setList}} />
    <hr/>
    <h2>toggle using context api</h2>
    <div> 
        <ThemeContextProvider>
         <AppContainer>
            <TodoListContainer/>
         </AppContainer>
        </ThemeContextProvider>
        
    </div>
    <hr/>
    <div>
        <h2>Assignment 3</h2>
        <HolidayList/>
    </div>
    <hr/>
    <div><RefExample/></div>
    <hr/>
    <div><MemoExample/></div>
    <hr/>
    <div>
        <h2>Optimisation Examples</h2>
        <Optimisation1  name="John"/></div>
    <div>
        <Optimisation2 name="dk"/>
    </div>
     <div>
        <Optimisation3 onClick={onClick}/>
    </div>
    <div>
        <UpdateName onClick={updateNameCallback}/>
    </div>
    <div>
        <Dinner name={dinnerName}/>
    </div>
    <hr/>
    <div>
        <h2>Lecture-10 : Batch Example</h2>
        <BatchExample1/>
        <BatchExample2/>
        <BatchExample3/>
        <div>
            <h4>File Upload Example</h4>
            <FileUploadExample/>
        </div>
        <div>
            <h4>Custom Hook</h4>
            <HooksExample/>
           
        </div>
    </div>

</>
}

export default App;
