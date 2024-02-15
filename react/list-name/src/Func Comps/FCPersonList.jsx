import React from 'react'
export default function FCPersonList(props){
    console.log('hh')
    let personStr=props.persons.map((per)=>
    <div
     key={per.id}>{per.id} ---n{per.name}    <br/>
    </div>
   
    )
    return(
        
        <div>FCPersonsList 
         {personStr}
        </div>
    )
}