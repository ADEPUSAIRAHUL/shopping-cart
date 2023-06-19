import axios from "axios";
import { useContext, useState } from "react";
import Gs from './Gs'
import { useNavigate } from "react-router-dom";

let Addprod=()=>{
    let [data,setData]=useState({})
    let [fdata,setFdata]=useState()
    let navigate=useNavigate()
    let gobj=useContext(Gs)
    let upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let fupd=(e)=>{
        setFdata(e.target.files[0])
    }
    let add=()=>{
        let fo=new FormData()
        fo.append("profimg",fdata)
        for(let k in data)
        {
            fo.append(k,data[k])
        }
 axios.post("http://localhost:5000/save",fo,
 {headers:{authorization:gobj.token,_id:gobj._id,
      'Content-Type':'multipart/form-data'}}).then(()=>{
            navigate("/")
        })
    }

    return(<div>
       <input type="text" name="pname" onChange={upd}/>
       <input type="text" name="cat"  onChange={upd}/>
       <input type="text" name="price"  onChange={upd}/>
       <input type="text" name="desc"  onChange={upd}/>
       <input type="file" name="profimg"  onChange={fupd}/>
       <button onClick={add}>addprod</button>
    </div>)
}
export default Addprod;