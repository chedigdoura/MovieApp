import "./App.css";
import { StudentList } from "./Components/StudentDataBase";
import StudentCard from "./Components/StudentCard";
import react, { useState } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import { Outlet } from "react-router-dom";

function App() {
  const [StudentState, SetStudentState] = useState(StudentList);
  const [text, SetText] = useState("");
  const [rate, SetRate] = useState(0);
  return (
    <div className="container">
      <div>
        <CustomNavbar Fx={SetText} />
      </div>
      <div className="App">
        {StudentState.filter((elt) =>
          elt.ATT_Nomprenom.toLocaleLowerCase().includes(
            text.toLocaleLowerCase()
          )
        ).map((elt) => (
          <StudentCard key={elt.id} StudentListNow={elt} />
        ))}
      </div>

    </div>
  );
}

export default App;
