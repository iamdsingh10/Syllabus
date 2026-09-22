import { useState } from "react"
import { useThemeContext } from "../ThemeProvider";
//import TodoList from "./TodoList";


export default function TodoForm({setTodoList}){
    const [todoText, setTodoText] = useState('');
    const{isDarkModeActive} = useThemeContext();
     return<>
    <div className={isDarkModeActive ? 'text-light' : 'dark-mode'}>
        <form action='#' method="GET" onSubmit={(e)=>{
            e.preventDefault();
setTodoList(list => [...list,todoText]);
            setTodoText('')
        }}>
            <textarea
             value={todoText}
             onChange={(e)=>{
                setTodoText(e.target.value)
             }}
            ></textarea>
            <button>Save</button>
        </form>
        </div>
        </>
}