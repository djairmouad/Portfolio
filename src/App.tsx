
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FirstPage from './Components/FirstPage'
import ContextProvider from './store/ColorContext'
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<ContextProvider><FirstPage/></ContextProvider> }
  ])
  return (
    
    <RouterProvider router={router}>
  </RouterProvider>
  )
}

export default App
