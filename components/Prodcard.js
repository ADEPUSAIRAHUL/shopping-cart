import './Prodcard.css'
import Gs from './Gs'
import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
let Prodcard=(props)=>{
    let navigate=useNavigate()
    let data=props.data
    let gobj=useContext(Gs)
    let addcart=(data)=>{
let cartdata={"pid":data._id,"pname":data.pname,"price":data.price,
"img":data.img,"qty":1,"userid":gobj._id}
        if(gobj.islogin)
        {
       
    axios.post("http://localhost:5000/addcart",
    cartdata,{headers:{"authorization":gobj.token}}).then(()=>{
        navigate("/cart")

        })
    }
    else{
        navigate('/login')
    }
    }
    return(
        <div className="con">
             <div><img src={`http://localhost:5000/imgs/${data.img}`}/></div>
            <div>Pname:{data.pname}</div>
            <div>Pcat:{data.cat}</div>
            <div>Price:{data.price}</div>
            <div>Desc:{data.desc}</div>
           <div> <button onClick={()=>addcart(data)}>Addcart</button></div>

        </div>
    )
}
export default Prodcard;