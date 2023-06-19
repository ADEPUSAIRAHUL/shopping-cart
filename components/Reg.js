import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Reg=()=>{
    let [data,setData]=useState({})
    let [msg,setMsg]=useState("")
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let reg=()=>{
        axios.post("http://localhost:5000/add",data).then((res)=>{
            if(res.status==203)
            {
                setMsg(res.data)
            }
            else{
        navigate("/login")
            }
        })
    }

    return(<div>
        <div>{msg}</div>
        <input type="email" name="_id" onChange={fun}/>
        <input type="text" name="name" onChange={fun}/>
        <input type="password" name="password" onChange={fun}/>
        <input type="text" name="phno" onChange={fun}/>
        <button onClick={reg}>register</button>
    </div>)
}
export default Reg;