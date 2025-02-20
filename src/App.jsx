
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import ProductDetails from "./page/ProductDetails"
import Login from "./page/Login"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/productDetails/:id" element={<ProductDetails/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  )
}



export default App