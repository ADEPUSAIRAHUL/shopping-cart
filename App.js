import Home from "./components/Home"
import Login from "./components/Login";
import Nav from "./components/Nav";
import Gs from "./components/Gs"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState} from 'react';
import Addprod from "./components/Addprod";
import Cart from "./components/Cart";
import Listuser from "./components/Listuser";
import Orderslist from "./components/Orderslist";
import Logout from "./components/Logout";
import Reg from "./components/Reg";
let App=()=>{
  let setName=(obj)=>{
    setGdata({...gdata,...obj})
  }
let [gdata,setGdata]=useState({"name":"","token":"",
"isadmin":false,"islogin":false,"_id":"","fun":setName})
 let [c,setC]=useState(0)
 let cartcount=(l)=>{
  setC(l)
 }
  
  return(
    <BrowserRouter>
    <Gs.Provider value={gdata}>
    <Nav c={c}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addprod" element={<Addprod/>}/>
      <Route path="/cart" element={<Cart cartcount={cartcount}/>}/>
      <Route path="/users" element={<Listuser/>}/>
      <Route path="/orders" element={<Orderslist/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/reg" element={<Reg/>}/>
    </Routes>
    </Gs.Provider>
    </BrowserRouter>
  )
}
export default App;