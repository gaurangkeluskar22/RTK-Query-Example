import "./App.css";
import { useGetAllProductsQuery, useGetSingleProductQuery } from "./store/productsApi";
import { useState } from "react";

function App() {
  const { data } = useGetAllProductsQuery();
  const [input,setInput] = useState("");
  const {data:singleProduct} = useGetSingleProductQuery(input);
  
  return (
    <div className="App">
      <input type="text" name="search" placeholder="Search Product" onChange={(e)=>setInput(e.target.value)}/>
      {singleProduct?.products ? (
        singleProduct.products.map((product) => {
          return (
            <div key={product.id} className="card mx-auto w-50 m-2">
              <img src={product.images[0]} width="300px" className="mx-auto p-2"></img><br/>
              <span>{product.brand}</span> <span>{product.price}</span>
              <p>{product.description}</p>
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default App;
