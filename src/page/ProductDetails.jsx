import React, { useEffect, useState } from 'react'
import Header from "../compont/Header"
import Footer from '../compont/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function ProductDetails() {
 const {id}=useParams()
 const [productData,setProductData]=useState()
console.log("this is id",id)
useEffect(()=>{
    const fetchdata=async()=>{
        const response=await axios.get(`https://dummyjson.com/products/${id}`,{
          
            
        })
        console.log(response)
        setProductData(response.data)
    }

fetchdata()
},[])
  return (
    <div>
        <Header/>
        {
            productData ? <div>
                {
                 <img src={productData?.images[0]} alt="" height={400} />  
                        
                }


                </div>:
                <div>

                    loading
                    </div>
        }

        <Footer/>

    </div>
  )
}

export default ProductDetails