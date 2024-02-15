export default function FCStudnt(props) {

  if(props.grade<70)
  return (
    <div
    style={{
      color: 'white',
      fontSize:20,
      border:'2px solid yellow',
      margin:20,
      padding:10,
      borderRadius:15 
    }

    }
    
    >
      <p> Studnt</p>
      name={props.name} <br/>
       id={props.id} <br/>
        grade={props.grade}<br/>
        
    </div>
  );
  else{
    return(
      <div
      style={{
        color: 'yellow',
        fontSize: 20,
        border:'2px solid white',
        margin:20,
        padding:10,
        borderRadius:15 
      }
  
      }
      
      >
        <p> Studnt</p>
        name={props.name} <br/>
         id={props.id} <br/>
          grade={props.grade}<br/> 
      </div>



    )
  }
}
