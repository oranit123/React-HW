import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FCStudents from "./Functional Comps/FCStudents";
import CCStudent from "./Class Comps/CCStudent";
import EHeader from "./Elements/EHeader";
function App() {
  return (
    <div
    style={{
      fontSize:50
    }}
    >
      {EHeader}
      <div>
        
        <FCStudents id="11" name="avi" grade={90} />
        <br />
        <FCStudents FCStudents id="12" name="benny" grade={95} />
        <br />
        <CCStudent id="13" name="chen" grade={85} />
      </div>
    </div>
  );
}

export default App;
