import React from 'react'
export default function FCInpuuts(props) {
  console.log('FCINPUTS')
    let name;
    let id;
    const btn2pernt =()=>{
     let person={id:id,name:name}
     props.sentPerson(person);

    }
    
    return(
        <div>
         id:<input type="text" placeholder="enter your id" onChange={(e)=>{id=e.target.value}}/>
        name:<input type="text" placeholder="enter your name "onChange={(e)=>{name=e.target.value}}/>
         <button onClick={btn2pernt} >Add</button>
       </div> 
    )
}