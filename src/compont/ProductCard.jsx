import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProductCard(props) {
  const navigate=useNavigate()
  return (
    <div className='card'
    // onClick={()=>navigate("/proudctDetails")}
    >
      <Link to={`/productDetails/${props.data.id}`}>
      <img src={props.data.images[0]} alt="product image" height={200} />

      <div className='info'>
        <p>Title:{props.data.title}</p>
        <p>price:{props.data.price}</p>
        <p>Rating:{props.data.rating}</p>
        <p>In stock{props.data.stock}</p>
      </div>
      <div style={{display:"flex",padding:"2px", margin:"2px", justifyContent:"center"}}>
        <button style={{padding:"5px", color:"blue"}}
        onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            

        }}
        >Add To Cart</button>
       
      </div>
      </Link>
    </div>
  )
}

export default ProductCard