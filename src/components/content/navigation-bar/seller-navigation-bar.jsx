
import React ,{useState}from "react"
import Navbar from "../../UI/navbar"


const SellerNavigationBar=(props)=>{
    
  const [options, setOptions] = useState([
             ["neworders","new orders"],
             ["completedorders","completed orders"],
             ["myproducts","my products"],
             ["products","products"],
             ["blabla","bla bla"],
         ]);

    return (
    <Navbar  options={options} />
)}


export default SellerNavigationBar