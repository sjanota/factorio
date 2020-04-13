import React from "react";
import { Card } from "react-bootstrap";

import { IngredientsListForCurrentItem } from "./IngredientsListForCurrentItem";
import { CurrentItemAndSupplyForm } from "./CurrentItemAndSupplyForm";

export const DemandCalculator = () => {
  return (
    <Card className="m-1 demand-calculator" bg="light">
      <Card.Header>Demand calculator</Card.Header>
      <Card.Body>
        <CurrentItemAndSupplyForm />
      </Card.Body>
      <IngredientsListForCurrentItem />
    </Card>
  );
};
