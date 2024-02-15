export default function FCStudent(props) {
  if(props.grade>=95)
  {
    return( 
        <div style={{
          borderRadius: 15,
          border: 'solid yellow 2px', margin: 20,
          padding: 15
        }}>
          
        id{props.id}<br/>
        name={props.name}<br/>
        grade={props.grade}<br/>
        <input type="text" placeholder="Please enter a number" /> <br/>
        
        <button>Add</button>
        </div>)
      }else{
        return( 
            <div style={{
              borderRadius: 15,
              border: 'solid black 2px', margin: 20,
              padding: 15
            }}>
              
            id{props.id}<br/>
            name={props.name}<br/>
            grade={props.grade}<br/>
            <input type="text" placeholder="Please enter a number" /> <br />
            <button>Add</button>
            </div>)
      }
      
  }
  
