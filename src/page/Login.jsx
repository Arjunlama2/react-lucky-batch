import React, { useState } from 'react'

function Login() {
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()



const userName=(e)=>{
    
    let usernam=e.target.value
    setUsername(usernam)
}
const getPassword=(e)=>{
    let password=e.target.value
    setPassword(password)
}

 console.log("username",username)
 console.log("password",password)
    return (
        <div className='flex  justify-center items-center h-[100vh] '>

            <div className='bg-blue-600 h-[400px] aspect-square  rounded-3xl flex flex-col justify-center items-center gap-10'>

                <div className='flex flex-col gap-2 text-white font-serif'>
                    <label htmlFor="">User name</label>
                    <input type="text" className='border-[2px] border-black rounded-[10px] ' 
                    onChange={(e)=>userName(e)
                    }/>
                    <label htmlFor="">Password</label>
                    <input type="password" className='border-[2px] border-black rounded-[10px] '
                    
                    onChange={(e)=>getPassword(e)}/>

                </div>
                <div>
                    <button type='submit' className='bg-white p-2 px-6 rounded-2xl text-blue-500 text-[18px] cursor-pointer
                     hover:bg-blue-500 hover:text-white transition-all duration-1000  
                     
                     '
                     >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login