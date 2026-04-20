import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const todosData = [
  {
    input: "Hello! Add your first todo!",
    complete: true
  },
  {
    input: "Get the groceries!",
    complete: false
  },
  {
    input: "Learn how to web design",
    complete: false
  },
  {
    input: "Learn React js and get hired with top salary",
    complete: false
  },
  {
    input: "Say hi to gran gran",
    complete: true
  }
]

function App() {
  const [todos, setTodos] = useState([
    {
      input: "Hello! Add your first todo!",
      complete: true
    }
  ]);
  const [tabSelected, setTabSelected] = useState("All");

  // add new todo 
  const handleAddTodoFunc = (newTodo) => {
    const newTodoList = [...todos, {input:newTodo, complete: false}];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  // update todo 
  const handleUpdateTodo = function(index) {
    let newTodosList = [...todos];
    let updatedTodoObject = {...newTodosList[index], complete : true};
    newTodosList[index] = updatedTodoObject;
    setTodos(newTodosList);
    handleSaveData(newTodosList);
  }

  // delete todo 
  const handleDeleteTodo = function(index) {
     let newTodoList = todos.filter((_, valIndex) => {
       return (index !== valIndex)
     })
     setTodos(newTodoList);
     handleSaveData(newTodoList);
     
  }
  
  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({todos : currentTodos }))
  }

  useEffect(()=>{
    if(!localStorage || localStorage.getItem("todo-app")){return}
    let db = [];
    db = JSON.parse(localStorage.getItem("todo-app"));
      setTodos(db);
  }, []);

  return (
    <>
      <Header todos={todos.length}/>
      <Tabs todos={todos} tabSelected={tabSelected} setTabSelected={setTabSelected}/>
      <TodoInput handleAddTodoFunc={handleAddTodoFunc}/>
      <TodoList todos={todos} tabSelected={tabSelected} handleUpdateTodo= {handleUpdateTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
