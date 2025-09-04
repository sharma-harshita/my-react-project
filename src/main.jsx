import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from "./components/Test.jsx"
import ProductList from './components/ProductList.jsx'
import { ProductPage } from './components/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test/> */}
    {/* <ProductList/> */}
    <ProductPage/>
  </StrictMode>,
)
