import React from 'react'

function ToDoItem(props) {

  return (
    <div>
        <h6>{props.title}</h6>
        <button>done</button>
    </div>
  )
}

export default ToDoItem