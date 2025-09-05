import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from "./components/Test.jsx"
import ProductList from './components/ProductList.jsx'
import { ProductPage } from './components/ProductPage.jsx'
import { VarState } from './components/VarState.jsx'
import { UserInput } from './components/UserInput.jsx'
import { StateAsArray } from './components/StateAsArray.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test/> */}
    {/* <ProductList/> */}
    {/* <ProductPage/> */}
    {/* <VarState/> */}
    {/* <UserInput/> */}
    <StateAsArray/>
  </StrictMode>,
)
