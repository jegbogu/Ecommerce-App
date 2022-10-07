import "./App.css";
import{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
   
} from "react-router-dom";

//Screen
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreeen";

//Components
import Navbar from "./component/NavBar";
import BackDrop from "./component/BackDrop";
import SideDrawer from "./component/SideDrawer";
const App = () => {
  const [sideToggle, setSideToggle] = useState(false)
  return ( 
    <BrowserRouter>
  <Navbar click={()=>setSideToggle(true)} />
  <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/> 
  <BackDrop show={sideToggle} click={()=> setSideToggle(false)}/>
 
      <main>
 
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    

      </main>
   
      </BrowserRouter>
   );
}
 
export default App;