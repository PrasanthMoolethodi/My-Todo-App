import React, { useState } from 'react'

function TodoInput(props) {
  const[inputTodo, setInputTodo] = useState("");
  const {handleAddTodoFunc} = props;

  const handletodoInput = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <div className='todo-input-wrapper'>
      <input type="text" value={inputTodo} className='task-input'  placeholder='Add task' 
      onChange={handletodoInput} />
      <button onClick={() =>{ 
        if(!inputTodo) { 
          console.log("Error | No task found!") 
          return
        }
        handleAddTodoFunc(inputTodo)
        setInputTodo("");
        }
        }>Add +</button>
    </div>
  )
}

export default TodoInput