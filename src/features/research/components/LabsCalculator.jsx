import React from "react";
import CollapsibleCard from "../../../components/CollapsibleCard";
import { Form, Card, Col, InputGroup, Button } from "react-bootstrap";
import { useRef } from "react";
import { connect } from "react-redux";
import {
  selectLabsCount,
  selectSpeedBonus,
  setSpeedBonus,
  setLabsCount,
  selectProbesDemand,
} from "../researchSlice";

export const LabsCalculator = () => {
  return (
    <CollapsibleCard
      header="Labs calculator"
      className="m-1"
      bg="light"
      initallyCollapsed={false}
    >
      <Card.Body>
        <WiredLabsConfiguration />
        <ProbesDemand />
      </Card.Body>
    </CollapsibleCard>
  );
};

const ProbesDemand = connect((state) => ({
  demands: selectProbesDemand(state),
}))(({ demands }) => (
  <div>
    {demands.map((it) => (
      <p key={it.cycleTime}>
        Cycle time <b>{it.cycleTime}s</b>:{" "}
        <b>{Math.round(it.demand * 100) / 100}</b> <sup>probes</sup>/
        <sub>min</sub>
      </p>
    ))}
  </div>
));

const LabsConfiguration = ({
  labsCount,
  setLabsCount,
  speedBonus,
  setSpeedBonus,
}) => {
  const labsCountRef = useRef();
  const speedBonusRef = useRef();

  function onSubmit(event) {
    console.log(event);
    event.preventDefault();

    console.log(labsCountRef.current.value, labsCount);
    const newLabsCount = parseInt(labsCountRef.current.value);
    if (newLabsCount !== labsCount) {
      setLabsCount(newLabsCount);
    }

    const newSpeedBonus = parseInt(speedBonusRef.current.value);
    if (newSpeedBonus !== speedBonus) {
      setSpeedBonus(newSpeedBonus);
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label># of labs</Form.Label>
          <Form.Control
            ref={labsCountRef}
            type="number"
            defaultValue={labsCount}
            min="0"
            step="1"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Speed bonus</Form.Label>
          <InputGroup>
            <Form.Control
              ref={speedBonusRef}
              type="number"
              defaultValue={speedBonus}
            />
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Button type="submit" style={{ display: "none" }} />
    </Form>
  );
};

const mapState = (state) => ({
  labsCount: selectLabsCount(state),
  speedBonus: selectSpeedBonus(state),
});

const mapDispatch = {
  setLabsCount,
  setSpeedBonus,
};

const WiredLabsConfiguration = connect(
  mapState,
  mapDispatch
)(LabsConfiguration);
