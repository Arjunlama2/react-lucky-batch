import React, { useEffect, useState } from 'react'
import Header from '../compont/Header'
import Footer from '../compont/Footer'

import "./todo.css"
import TodoList from '../compont/TodoList'

function Home() {

  const [data, setData] = useState()




  useEffect(() => {
    async function fetchdata() {
      const fetchedData = await fetch('https://dummyjson.com/todos')

      let jsonData = await fetchedData.json()
      setData(jsonData.todos)
    }

    fetchdata()
  }, [])




  console.log("this is our data", data)
  return (
    <div>
      <Header />
      this is home page
      <div className='todo_container' >

     
      {data && data.map((el, index) => {
        return <TodoList data={el}/>
      })

      }
 </div>


      <Footer />

    </div>
  )
}

export default Home