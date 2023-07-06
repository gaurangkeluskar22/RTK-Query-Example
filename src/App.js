import "./App.css";
import { useGetAllProductsQuery } from "./store/productsApi";

function App() {
  const { data } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className="App">
      {data?.products ? (
        data.products.map((product) => {
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
