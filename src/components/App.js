import React from "react";
import { DemandCalculator } from "../features/demand/components/DemandCalculator";
import { CurrentMachineGradesChoser } from "../features/machineGrades/components/MachineGradesChoser";

import "bootstrap/dist/css/bootstrap.min.css";
import { CurrentScienceConfiguration } from "../features/science/components/ScienceConfiguration";

function App() {
  return (
    <div className="App">
      <CurrentScienceConfiguration />
      <CurrentMachineGradesChoser />
      <DemandCalculator />
    </div>
  );
}

export default App;
