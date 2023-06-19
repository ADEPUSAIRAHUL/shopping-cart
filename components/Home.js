import {useState,useEffect} from 'react';
import Prodcard from './Prodcard';
import axios from 'axios'
import './Home.css'
let Home=()=>{
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/getprod").then(
            (res)=>{
                setData(res.data)

            }
        ).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div className='prod'>
            {
                data.map((item,index)=>{
                    return(<Prodcard data={item} key={index}/>)
                })
            }

        </div>
    )

}
export default Home;