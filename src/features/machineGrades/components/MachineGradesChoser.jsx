import React from "react";
import {
  MachineGrades,
  selectMachineGrades,
  setGrade,
} from "../machineGradesSlice";
import { MachineType } from "../../recipes/recipesSlice";
import { connect } from "react-redux";
import { Form, Row, Col, Card } from "react-bootstrap";

const MachineGradesChoser = ({ currentMachineGrades, setGrade }) => {
  return (
    <Card className="m-1" bg="light">
      <Card.Header>Machine grades</Card.Header>
      <Card.Body>
        <Form>
          {Object.keys(MachineType).map((type) => (
            <Form.Group key={type} as={Row}>
              <Form.Label column sm={2}>
                {type}
              </Form.Label>
              <Col className="d-flex align-items-center">
                <Form.Control
                  as="select"
                  custom
                  value={currentMachineGrades[type]}
                  onChange={(e) => setGrade({ type, grade: e.target.value })}
                >
                  {MachineGrades[type].map((grade, idx) => (
                    <option key={grade.name} value={idx}>
                      {grade.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
          ))}
        </Form>
      </Card.Body>
    </Card>
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
