
import React from 'react';
import './Navbar.css';
export default function TexthtmlForm() {
    let hello = ()=>{
     
      let name = document.querySelector("#name").value;
      let number = document.querySelector("#number").value;
      let gmail = document.querySelector("#Gmail").value;
      let massege = document.querySelector("#massege").value;

      console.log(` *************************************************
      Order from ${name}..., 
          ${number}    ,
          ${gmail},
          ${massege}, Info.
           102 viman Nagar.
           Pune 
=======================================
   Product Name    Product Price
   bacadi            Rs. 50.95 /-
   old_mong           Rs. 598.99 /-
   kingfisher         Rs. 156.89 /-
=======================================
                   Total
                   Rs. 806.83 /-
=======================================

   Thanks for shopping with us today!

*************************************************`)
    }
  return (
   <>
    <div className="im">
          <img src="https://zeevector.com/wp-content/uploads/Mahindra-Rise-Logo-PNG-768x279.png" alt="img loading"/>
      </div>
    
    <nav>
    <div  id="contact">
             <div> <h1>Regitration Form</h1></div>
             <div><label htmlFor="name">Name</label><br/>
                 <input type="text" name="name" id="name" className="inp" placeholder="enter your name"/></div>
     
             <div><label htmlFor="number" > Mobile Number</label><br/>
                 <input type="mobile number" name="number" id="number" className="inp" placeholder="mobile number"/></div>
     
             <div><label htmlFor="Gmail" >Gmail </label><br/>
                 <input type="email" name="Gmail" id="Gmail" className="inp" placeholder="email address "/></div>
                 <div >
                     <label htmlFor="massege" >Massege</label> <br/>
                     <textarea name="massege" id="massege"  placeholder="write your massege"></textarea>
                 </div>
                 
                 <div><button type="submit" onClick={hello} id="btn">Submit</button></div>
             
             
     </div>
         
     </nav>
   </>
  );
}
