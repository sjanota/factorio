import React from "react";
import { DemandCalculator } from "../features/demand/components/DemandCalculator";
import { CurrentMachineGradesChoser } from "../features/machineGrades/components/MachineGradesChoser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <CurrentMachineGradesChoser />
      <DemandCalculator />
    </div>
  );
}

export default App;
