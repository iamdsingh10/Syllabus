// this is going to be the data hook  where i am going to store the data

import {useState} from 'react'

const initialTodos= [
    {
        id:1,
        name: 'buy vegetable',
        status: 'Pending'
    },
    {
        id:2,   
        name: 'Bath without miss',
        status: 'Pending'
    },
    {
        id:3,
        name: 'Have lunch',
        status: 'complete'
    }
]

export function useTodo (){  // this is my custom hook
    const [todoList,setTodoList] = useState(initialTodos)
    return {
        todoList,
        markTodoAsComplete: (id)=>{
            setTodoList(todoList =>{
                const list = [...todoList];
                list.some(todo => {
                    if(todo.id === id){
                        todo.status = 'complete'
                        return true
                    }
                    return false
                })
                return list;
            })
        }
    }
}