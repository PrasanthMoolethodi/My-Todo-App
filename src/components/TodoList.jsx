import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {

  const {todos, tabSelected, handleUpdateTodo,handleDeleteTodo} = props;
  const tab = tabSelected;

  const filteredTodos = tab === "All" ? 
    todos : 
    tab === "Done" ? todos.filter(val => val.complete) : 
    todos.filter(val => !val.complete);

  return (
    <div>
        {filteredTodos?.map((todo, todoIndex) => {
            return (<TodoCard key={todoIndex} todo={todo} handleUpdateTodo={handleUpdateTodo} 
              todoIndex={todos.findIndex(val => val.input === todo.input)}
               handleDeleteTodo={handleDeleteTodo} />)
        })}
        
    </div>
  )
}

export default TodoList