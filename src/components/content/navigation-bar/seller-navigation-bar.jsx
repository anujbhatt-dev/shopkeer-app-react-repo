
import React ,{useState,useMemo}from "react"
import Navbar from "../../UI/navbar"


const SellerNavigationBar=(props)=>{
    
  // const [options, setOptions] = useState([
  //            ["neworders","new orders"],
  //            ["completedorders","completed orders"],
  //            ["myproducts","my products"],
  //            ["products","products"],
  //            ["blabla","bla bla"],
  //        ]);

         let options= [["neworders","new orders"],
                    ["completedorders","completed orders"],
                    ["myproducts","my products"],
                    ["products","products"],
                    ["blabla","bla bla"]];  
                    options.forEach(option=>option[0]=props.sellerCode+"/"+option[0]);
   
                   
    return (

    <Navbar  options={options} />
)}


export default SellerNavigationBar