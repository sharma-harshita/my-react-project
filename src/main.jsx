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
import { StateAsObj } from './components/StateAsObj.jsx'
import { StateAsObjUserInput } from './components/StateAsObjUserInput.jsx'
import { StateAsPrevState } from './components/StateAsPrevState.jsx'
import { ReactFamousError } from './components/ReactFamousError.jsx'
import Styling from './components/Styling.jsx'
import { ConStyling } from './components/ConStyling.jsx'
import { Login } from './components/external/Login.jsx'
import Initial from './components/sideEffects/Initial.jsx'
import Scenario1 from './components/sideEffects/Scenario1.jsx'
import Scenario2 from './components/sideEffects/Scenario2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Test/> */}
    {/* <ProductList/> */}
    {/* <ProductPage/> */}
    {/* <VarState/> */}
    {/* <UserInput/> */}
    {/* <StateAsArray/> */}
    {/* <StateAsObj/> */}
    {/* <StateAsObjUserInput/> */}
    {/* <StateAsPrevState/> */}
    {/* <ReactFamousError/> */}
    {/* <Styling/> */}
    {/* <ConStyling/> */}
    {/* <Login/> */}
    {/* <Initial/> */}
    {/* <Scenario1/> */}
    <Scenario2/>
  </StrictMode>,
)
