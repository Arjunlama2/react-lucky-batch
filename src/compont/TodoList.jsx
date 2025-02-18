import React from 'react'

function TodoList(props) {
  
    // console.log("data",data)
  return (
    <div className='todoList' >
        <p>{props.data.todo}</p>
        <p>{props.competed?"Competed":"Not Completed"}</p>
    </div>
  ) 
}

export default TodoList