export default function FCStudents(props) {
  
    let num=6;
  
    function btnAdd() {
        console.log(num);
        num++;
        console.log(num);
    }
  function chgNum(e){
    num = e.target.value
  }
  console.log('before' ,num)
  return (
    <div
      style={{
        borderRadius: 15,
        border: "solid yellow 2px",
        margin: 20,
        padding: 15,
        fontSize: 35,
      }}
    >
        <h3>Functional Comps</h3>
      id={props.id} <br />
      name={props.name}
      <br />
      grade={props.grade}
      <br />
      num={num}<br/>
      <input type="text"   placeholder="enter a num"  onChange={chgNum}/> <br/>
      <button
        onClick={btnAdd}
        style={{
          background: "yellow",
          color: "black",
        }}
      >
        Add
      </button><br/>
     
    </div>
  );
}
