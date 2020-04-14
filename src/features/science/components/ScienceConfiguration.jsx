import React, { useRef } from "react";
import { setMiningLevel, selectScience } from "../scienceSlice";
import { connect } from "react-redux";
import { Form, Row, Col, Card } from "react-bootstrap";
import CollapsibleCard from "../../../components/CollapsibleCard";

const ScienceConfiguration = ({ science, setMiningLevel }) => {
  const miningLevel = useRef();

  function onSubmit(e) {
    e.preventDefault();
    setMiningLevel(parseInt(miningLevel.current.value));
  }

  return (
    <CollapsibleCard
      header="Science"
      className="m-1"
      bg="light"
      initallyCollapsed={true}
    >
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Mining
            </Form.Label>
            <Col className="d-flex align-items-center">
              <Form.Control
                type="number"
                step="1"
                min="0"
                defaultValue={science.mining}
                ref={miningLevel}
              />
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </CollapsibleCard>
  );
};

const mapState = (state) => ({
  science: selectScience(state),
});

const mapDispatch = {
  setMiningLevel,
};

export const CurrentScienceConfiguration = connect(
  mapState,
  mapDispatch
)(ScienceConfiguration);
