import React from "react";
import { Card } from "react-bootstrap";

import { IngredientsListForCurrentItem } from "./IngredientsListForCurrentItem";
import { CurrentItemAndSupplyForm } from "./CurrentItemAndSupplyForm";
import CollapsibleCard from "../../../components/CollapsibleCard";

export const DemandCalculator = () => {
  return (
    <CollapsibleCard
      header="Demand calculator"
      className="m-1 demand-calculator"
      bg="light"
    >
      <Card.Body>
        <CurrentItemAndSupplyForm />
      </Card.Body>
      <IngredientsListForCurrentItem />
    </CollapsibleCard>
  );
};
