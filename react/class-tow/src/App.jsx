import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FCStudent from "./Funvtional Comps/FCStudent";
import { CCStudent } from "./Class Comps/CCStudent";
function App() {
  return (
    <div>
      <FCStudent id="12" name="avi" grade={95} />
      <FCStudent id="13" name="ben" grade={90} />
      <CCStudent id="14" name="chen" grade={80} />
    </div>
  );
}

export default App;
