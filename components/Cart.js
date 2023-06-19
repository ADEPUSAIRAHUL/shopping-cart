import Gs from './Gs'
import axios from 'axios'
import './Cart.css'
import { useEffect,useContext,useState } from 'react'
let Cart=(props)=>{
    let gobj=useContext(Gs)
    let [cdata,setCart]=useState([])
    let config={headers:{"authorization":gobj.token}}
    let fun=(l)=>{
props.cartcount(l)
    }
   let [gt,setGt]=useState(0)
    useEffect(()=>{
        axios.get(`http://localhost:5000/getcart/${gobj._id}`,config)
        .then((res)=>{ 
        fun(res.data.cart.length)
        setCart(res.data.cart)
        setGt(res.data.total)
        })
    },[gobj._id])

    let del=(id)=>{
        axios.delete(`http://localhost:5000/delcart/${id}`,config).then(
            ()=>{
 axios.get(`http://localhost:5000/getcart/${gobj._id}`,config).then((res)=>{
                    fun(res.data.cart.length)    
                setCart(res.data.cart)
                setGt(res.data.total)
                    })

            }
        )
    }
    let inc=(id,qty,price)=>{
        if(qty<5)
        {
            qty=qty+1
axios.put("http://localhost:5000/incqty",{"_id":id,"qty":qty,"price":price},config).
then(()=>{
      axios.get(`http://localhost:5000/getcart/${gobj._id}`,config).
      then((res)=>{
                    setCart(res.data.cart)
                    setGt(res.data.total)
                    })
            })
        }

    }
let dec=(id,qty,price)=>
{
    if(qty>1)
    {
        qty=qty-1
    axios.put("http://localhost:5000/incqty",{"_id":id,"qty":qty,"price":price},config).
    then(()=>{
            axios.get(`http://localhost:5000/getcart/${gobj._id}`,config).
            then((res)=>{
                setCart(res.data.cart)
                setGt(res.data.total)
                })
        })
    }

}
    return(<div>
        <table>
            <tr><th>pimg</th><th>name</th><th>price</th><th>qty</th><th>itemtotal</th></tr>

            {cdata.map((item)=>{
            return(
                <tr>
        
         <td><img src={`http://localhost:5000/imgs/${item.img}`}/></td>
                    <td>{item.pname}</td>
                    <td>{item.price}</td>
                    <td>
<button onClick={()=>dec(item._id,item.qty,item.price)}>-</button>
{item.qty}<button onClick={()=>inc(item._id,item.qty,item.price)}>+</button></td>
                <td>{item.total}</td>
                <td><button onClick={()=>del(item._id)}>del</button></td>
                </tr>
            )
})}
        </table>
        <div>Total:{gt}</div>
       
    </div>)
}
export default Cart;