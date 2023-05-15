import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,  
} from 'react-router-dom'


// pages
import Home from './Pages/Home';
import SimpleForm from './Pages/SimpleForm';
import Products from './Pages/Products/Products';
import Details from './Pages/Products/Details';
import Category from './Pages/Products/Category';
import BasicComponents from './components/Basicscript/BasicComponents'

// layouts
import CollectedRoot from './Collector/CollectedRoot'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<CollectedRoot />}>
        <Route index element={<Home />} />
        <Route path= "/BasicComponents" element={<BasicComponents />} />

        <Route path="/Products" element={<Products items={apiData}/>} />
        <Route path="/SimpleForm" element={<SimpleForm />} />
        <Route path=":Category" element={<Category />} />
        <Route path=":id" element={<Details />} />

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;