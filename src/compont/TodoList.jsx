import React from 'react'

function TodoList(data) {
    console.log("data",data)
  return (
    <div >
        <p>{data.data.todo}</p>
        <p>{data.competed?"Competed":"Not Completed"}</p>
    </div>
  )
}

export default TodoList