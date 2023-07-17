import React,{useState} from "react";

const Greet =() =>{
   const [greet , setGreet] =useState();
   function greetings(event){
       setGreet(event.target.value);
   }


    return (
        <div>
             <h1>Enter your name</h1>
             <input type="text" onChange={greetings}></input>
             <h2>{greet}</h2>
        </div>
    )
}
export default Greet;