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
            <div key={product.id} className="card">
              <img src={product.images[0]} width="300px"></img>
              <p>{product.brand}</p>
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
