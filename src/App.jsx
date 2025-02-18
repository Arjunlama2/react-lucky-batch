
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import ProductDetails from "./page/ProductDetails"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/productDetails/:id" element={<ProductDetails/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  )
}



export default App