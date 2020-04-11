import React from "react";
import {
  MachineGrades,
  selectMachineGrades,
  setGrade,
} from "../machineGradesSlice";
import { MachineType } from "../../recipes/recipesSlice";
import { connect } from "react-redux";

const MachineGradesChoser = ({ currentMachineGrades, setGrade }) => {
  return (
    <>
      {Object.keys(MachineType).map((type) => (
        <div key={type}>
          <label>
            {type} grade:
            <select
              value={currentMachineGrades[type]}
              onChange={(e) => setGrade({ type, grade: e.target.value })}
            >
              {MachineGrades[type].map((grade, idx) => (
                <option key={grade.name} value={idx}>
                  {grade.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
    </>
  );
};

const mapState = (state) => ({
  currentMachineGrades: selectMachineGrades(state),
});

const mapDispatch = {
  setGrade,
};

export const CurrentMachineGradesChoser = connect(
  mapState,
  mapDispatch
)(MachineGradesChoser);
