import React, { useEffect, useState } from 'react'
import Header from '../compont/Header'
import Footer from '../compont/Footer'
import ProductCard from '../compont/ProductCard'
import axios from 'axios'

// import "./todo.css"
// import TodoList from '../compont/TodoList'

function Home(props) {


  const [data, setData] = useState('')




  // useEffect(() => {
  //   async function fetchdata() {
  //     const fetchedData = await fetch('https://dummyjson.com/todos')

  //     let jsonData = await fetchedData.json()
  //     setData(jsonData.todos)
  //   }

  //   fetchdata()
  // }, [])

useEffect(()=>{
const fetchdata=async()=>{
const response=await axios.get("https://dummyjson.com/products")
console.log("this is response",response)
setData(response.data.products)
}
fetchdata()
},[])


  return (
    <div>
      <Header />
      this is home page
      {/* <div className='todo_container' >
        {data && data.map((el, index) => {

          return <TodoList data={el} add="ok" />
        })

        }
      </div> */}


<div className='cardContainer'>
  {
    data && data?.map(( el) =>{
      return <ProductCard data={el} key={el.id} />
    })
    
    
   
  }
 
</div>




      <Footer />

    </div>
  )
}

export default Home