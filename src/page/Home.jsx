import React, { useState } from 'react'
import Header from '../compont/Header'
import Footer from '../compont/Footer'



function Home() {
const [click,setClick]=useState(0)

const hanldeClick=()=>{
    setClick(click+1)
}

  return (
    <div>
<Header/>
this is home page

<p>
{
    click
}
</p>

<button onClick={()=>hanldeClick()}>

    Click me
</button>
<Footer/>

    </div>
  )
}

export default Home