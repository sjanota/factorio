import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { requiredBelt } from "../requiredBelt";
import { RequiredMachinesForItem } from "./RequiredMachines";
import "./IngredientsList.css";
import { PcsPerMin } from "../../../components/PcsPerMin";
import { BeltTypeHint } from "./BeltTypeHint";

export const IngredientsList = ({ ingredients }) => {
  return (
    <ListGroup className="list-group-flush">
      {Object.entries(ingredients).map(([ingredient, targetSupply]) => (
        <IngredientsRow
          key={ingredient}
          item={ingredient}
          targetSupply={targetSupply}
        />
      ))}
    </ListGroup>
  );
};

const IngredientsRow = ({ item, targetSupply }) => {
  const beltType = requiredBelt(targetSupply);
  return (
    <ListGroup.Item
      className={`ingredients-row belt-${beltType.toLowerCase()}`}
    >
      <Row>
        <Col sm={5}>{item}</Col>
        <Col sm={3}>
          {targetSupply} <PcsPerMin />
        </Col>
        <Col sm={3}>
          <RequiredMachinesForItem item={item} targetSupply={targetSupply} />
        </Col>
        <Col>
          <BeltTypeHint beltType={beltType} />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
