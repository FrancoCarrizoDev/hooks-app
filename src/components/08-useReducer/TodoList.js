import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDeleteTask, handleToggle}) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
                {todos.map((todo, index) => (
                    <TodoListItem todo={todo} index={index} handleDeleteTask={handleDeleteTask} handleToggle={handleToggle}/>
                ))}
            </ul>
        </div>
    )
}
