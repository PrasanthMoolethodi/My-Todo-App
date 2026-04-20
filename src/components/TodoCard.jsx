import React from 'react'

function TodoCard(props) {
    const {todo, handleUpdateTodo, todoIndex, handleDeleteTodo} = props;
    return (
        <div className='todo-card'>
            {todo.input}
            <div>
                <button onClick={() => {handleUpdateTodo(todoIndex)}} disabled={todo.complete}>Done</button>
                <button onClick={() => {handleDeleteTodo(todoIndex)}} >Delete</button>
            </div>
        </div>
    )
}

export default TodoCard