import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'


// pages
import Home from './Pages/Home'
import SimpleForm from './Pages/SimpleForm'

// layouts
import CollectedRoot from '../Collector/CollectedRoot'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CollectedRoot />}>
      <Route index element={<Home />} />
      <Route path="SimpleForm" element={<SimpleForm />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App