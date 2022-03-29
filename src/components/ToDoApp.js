import React, { useState } from 'react'
import "./ToDoApp.css"
import ToDoItem from './ToDoItem'


function ToDoApp() {

    let todos = [
        {
            id: 1,
            title: "clean your room",
    
        },
        {
            id: 2,
            title: "test2",
    
        },
        {
            id: 3,
            title: "test3",
    
        }       
    ]
    

    let [todoinput,setToDoInput] = useState("")

    function update_text_field(event){
        setToDoInput(event.target.value)
    }

    function inser_new(event){
      
    }
  return (
    <div className='to-do-app'>
        <h1>My Todos</h1>

        <form>
            <input value={todoinput} placeholder="enter your todo" onChange={update_text_field}></input>
            <button onClick={inser_new}>Add new</button>
        </form>
        {
            todos.map((todo)=><ToDoItem title={todo.title} key={todo.id}/>)
        }

    </div>
  )
}

export default ToDoApp