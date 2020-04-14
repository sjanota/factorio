import React from "react";
import CollapsibleCard from "../../../components/CollapsibleCard";
import { Form, Row, Card, Col } from "react-bootstrap";

export const LabsCalculator = () => {
  return (
    <CollapsibleCard
      header="Labs calculator"
      className="m-1"
      bg="light"
      initallyCollapsed={false}
    >
      <Card.Body>
        <LabsConfiguration />
      </Card.Body>
    </CollapsibleCard>
  );
};

const LabsConfiguration = () => {
  return (
    <Form>
      <Form.Row>
        <Col sm={4}>
          <Form.Group as={Row}>
            <Form.Label column sm={4}>
              # of labs
            </Form.Label>
            <Col>
              <Form.Control type="number" />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group as={Row}>
            <Form.Label column sm={4}>
              Speed bonus
            </Form.Label>
            <Col>
              <Form.Control type="number" />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group as={Row}>
            <Form.Label column sm={4}>
              Cycle time
            </Form.Label>
            <Col>
              <Form.Control type="number" />
            </Col>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  );
};
