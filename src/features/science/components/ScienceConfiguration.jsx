import React from "react";
import { setMiningLevel, selectScience } from "../scienceSlice";
import { connect } from "react-redux";
import { Form, Row, Col, Card } from "react-bootstrap";
import CollapsibleCard from "../../../components/CollapsibleCard";

const ScienceConfiguration = ({ science, setMiningLevel }) => {
  return (
    <CollapsibleCard
      header="Science"
      className="m-1"
      bg="light"
      initallyCollapsed={true}
    >
      <Card.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Mining
            </Form.Label>
            <Col className="d-flex align-items-center">
              <Form.Control
                type="number"
                step="1"
                min="0"
                value={science.mining}
                onChange={(e) => setMiningLevel(parseInt(e.target.value))}
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
