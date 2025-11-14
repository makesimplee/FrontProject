import "../App.css";
 import {useState} from "react";


export const Contact = ()=>{
const [fName,setFName] =useState("");
const [lName,setLName]=useState("");
const [email,setEmail]=useState("");
const[phone,setPhone]=useState("");
const[message,setMessage]=useState("");

const handleValueChange=(e)=>{

    const {name,value}=e.target;
    switch(name){
    case "fname":
        setFName(value);
        break;

          case "lname":
        setLName(value);
        break;

          case "email":
        setEmail(value);
        break;

          case "phone":
        setPhone(value);
        break;

          case "message":
        setMessage(value);
        break;
}
}

const handleFormSubmit=(e)=>{
    e.preventDefault();
    const formData={fName,lName,email,phone,message};
   console.log(formData);
   // setEmail("");
}

    return(
        <>

        {/*Header  */}
        <header className = "header_part">

       
   <nav>
        <ul className="navbar">
                <li ><a href="#about">About</a></li>
                 <li ><a href="#about">Contact</a></li>
                  <li ><a href="#about">Services </a></li>
                   <li ><a href="#about">More</a></li>
            </ul>
        </nav>
        </header>

      {/*contact form */}
      <section className="hero_part">
       <div className="Form_value">

      <form className="Form" onSubmit={handleFormSubmit}>
       
       <label>First Name:</label>
            <input 
            type="text" 
            name="fname"
             placeholder="Enter Your First Name" 
             required
             value={fName}
             onChange={handleValueChange}
             />


        <label>Last Name:</label>
            <input 
            type="text" 
            name="lname"
             placeholder="Enter Your Last Name" 
             required
             value={lName}
             onChange={handleValueChange} />

        <label>Email:</label>
            <input 
            type="email"
            name="email"
             placeholder="Enter Your Email"
             required
             value={email} 
            onChange={handleValueChange}
             />

        <label>Phone Number:</label>
            <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
                value={phone}
                onChange={handleValueChange}
            />
        
      <label>Enter any message</label>
       
          
                <textarea 
        className="form-control"
        row="10"
        cols="14"
        placeholder="Enter Your Message"
        name="message"
        required
        autoComplete="false"
         ></textarea>

    
        <button className="btn" type="submit">Submit</button>
        </form>
        </div>
      
</section>



{/*Footer part */}
<footer className="footer_part">
 <p>© 2025 VartikaD . All rights reserved.</p>
</footer>
    </>

);

};






















