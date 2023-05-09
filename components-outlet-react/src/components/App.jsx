import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,  
} from 'react-router-dom'


// pages
import Home from './Pages/Home'
import SimpleForm from './Pages/SimpleForm'
import Products from './Pages/Products'
import useFatch  from '../Hooks/fetch'

// layouts
import CollectedRoot from '../Collector/CollectedRoot'


function App() {
  const url = 'https://fakestoreapi.com/products'
  const { apiData, loading, error } = useFatch (url, Products);
  console.log(apiData); 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<CollectedRoot />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products items={apiData}/>} />
        <Route path="SimpleForm" element={<SimpleForm />} />
      </Route>
    )
  )

  if (loading){
    return <div>Loading...</div>
  }

  if (error){
    return <div>Erorr: {error.message}</div>
  }
  return (
    <RouterProvider router={router} />
  );
}

export default App;