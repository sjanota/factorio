import React from "react";
import { CurrentRecipeDemand } from "../features/demand/components/CurrentRecipeDemand";
import { CurrentMachineGradesChoser } from "../features/machineGrades/components/MachineGradesChoser";

function App() {
  return (
    <div className="App">
      <CurrentMachineGradesChoser />
      <CurrentRecipeDemand />
    </div>
  );
}

export default App;
