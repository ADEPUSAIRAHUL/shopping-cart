import axios from 'axios'
import { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Gs from './Gs'
let Login=()=>{
    let [ldata,setLdata]=useState({})
    let [errdata,setErr]=useState("")
    let navigate=useNavigate()
    let gc=useContext(Gs)
    let upd=(e)=>{
        setLdata({...ldata,[e.target.name]:e.target.value})

    }
    let fun=(name)=>{
        gc.fun(name)
    }
    let login=()=>{
        axios.post("http://localhost:5000/login",ldata).then(
            (res)=>{
                if(res.status==200)
                {
                    setErr("")
let obj={"token":res.data.token,"name":res.data.name,"_id":res.data._id,
"islogin":true}
                    if(res.data.role==101)
                    {
                        obj={...obj,"isadmin":true}
                    }
                    fun(obj)

                    navigate("/")
                }
                else{
                        setErr(res.data)
                }
            }
        )
    }
    return(
        <div>
            <div style={{"color":"red"}}>{errdata}</div>
            <input type="text" onChange={upd} name="_id"/>
            <input type="password" onChange={upd} name="password"/>
            <button onClick={login}>Login</button>


        </div>
    )
}
export default Login;