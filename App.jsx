import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

import React,{useState} from "react";

function App() {
  const [data, setData] = useState(true)
  return (
    <div className="App">
      <button 
      className="togglebtn"
        onClick={() => {
        setData(!data)}
      }>
        {data ? "Show Students" : "Add Student"}

      </button>

      {data ? <ShowStudents /> : <AddStudent />}

      <br/>

      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}


    </div>
  );
}

export default App;
