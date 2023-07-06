import './App.css';
import { useGetAllProductsQuery } from './store/productsApi';

function App() {
  const {data} = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
