// import Navbar from "./components/navbar/navbar";
// import Bg from "./components/bgimage/bg";
import Products from "./components/products/Product";
import {useState, useEffect} from "react";
import prods from "./ProductList";

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    setProducts(prods);
  },[])

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Bg /> */}
      <div class="product-container">
        {
          products.map(product =>
          {
            return <Products img={product.image} price={product.product_price} info = {product.brand_name}/>
          }
          )
        }
      </div>
    </div>
    
  );
}

export default App;