import React, { useEffect, useState } from 'react'
import Header from '../compont/Header'
import Footer from '../compont/Footer'



function Home() {

  const [data,setData]=useState()


  useEffect(()=>{

    fetch('https://dummyjson.com/todos/1')
    .then(res => res.json())
    .then(data => setData(data)) 
    .catch(error => console.error("Error fetching data:", error)); 
  },[])
 
  return (
    <div>
<Header/>
this is home page
{data &&<div>
  <p>Task Id:{data?.id}</p>
  <p>Task:{data?.todo}</p>
  <p>Completed:{data?.completed?"Yes":"No"}</p>
  <p>UserID:{data?.userId}</p>
</div>  
}



<Footer/>

    </div>
  )
}

export default Home