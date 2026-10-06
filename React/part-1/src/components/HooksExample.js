//custom hook:  It doesn't render the UI. but it will contain the reusable logic
import { CardWithTitle } from './Card'
import {useTodo} from './Hooks'

export function HooksExample(){
    const {todoList, markTodoAsComplete} = useTodo()  // this is my custom hook
    console.log(todoList , 'this is the todoList')
    return <div>
    
       {
        todoList.map((todo,index)=>{
            return <CardWithTitle  title={todo.name} key={index}>
                status: {todo.status}
                <div>
                    <button   onClick={()=>{
                        markTodoAsComplete(todo.id)
                    }}>Mark Complete</button>
                </div>
            </CardWithTitle>
        })
       }
    
    </div>
}