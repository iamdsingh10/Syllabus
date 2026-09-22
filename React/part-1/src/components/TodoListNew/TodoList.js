import { useThemeContext } from '../ThemeProvider'
import './Todo.css'
export default function TodoList({todoList}){
    const {isDarkModeActive} = useThemeContext();
    return <div className={isDarkModeActive? 'light-mode' : 'dark-mode'}>
            {todoList.map(todo=>{
                return <>
                <div className='listy'>{todo}</div></>
            })}
        </div>
}