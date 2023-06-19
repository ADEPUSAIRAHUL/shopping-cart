import { Link } from "react-router-dom"
import { useContext } from "react"
import Gs from "./Gs"
import './Nav.css'
let Nav=(props)=>{
    let data=useContext(Gs)
    console.log(data)
    return(
        <div className="nav">
            <Link to="/">Home</Link>
          {!data.islogin&&  <Link to="/login">Login</Link>}
          { !data.islogin&&<Link to="/reg">Register</Link>}
           {data.islogin&&data.isadmin&& <Link to="/addprod">Addprod</Link>}
            {data.islogin&&data.isadmin&&<Link to="/users">Listusers</Link>}
           {data.islogin&& <Link to="/cart">Cart<button>{props.c}</button></Link>}
           {data.islogin&&data.isadmin&& <Link to="/orders">Orderslist</Link>}
           {data.islogin&& <Link to="/logout">Logout</Link>}

            <div>{data.name}</div>
        </div>
    )

}
export default Nav