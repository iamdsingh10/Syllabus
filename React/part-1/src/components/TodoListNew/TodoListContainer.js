import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todo.css';


export default function TodoListContainer(){
   // const [todoText, setTodoText] = useState('');
const [todoList, setTodoList] = useState([]);

    return<>
    <div  className='text-light'>
        <TodoForm  setTodoList={setTodoList}/>
        <TodoList todoList={todoList}/>
    </div>
    </>
}

//React Context Api:--