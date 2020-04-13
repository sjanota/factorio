import React, { useRef } from "react";
import { Card, Form, Row, Col, InputGroup } from "react-bootstrap";
import { InputsDemandForRecipe } from "./Inputs";
import { connect } from "react-redux";
import {
  setTargetSupply,
  setCurrentRecipe,
  selectCurrentItem,
  selectTopTargetSupply,
} from "../demandSlice";
import { selectRecipes } from "../../recipes/recipesSlice";

export const DemandCalculator = () => {
  return (
    <Card>
      <Card.Header>Demand calculator</Card.Header>
      <Card.Body>
        <CurrentRecipeForm />
      </Card.Body>
      <ListIngredientsForCurrentItem />
    </Card>
  );
};

const ListIngredients = ({ item, targetSupply }) => {
  return (
    item && <InputsDemandForRecipe item={item} targetSupply={targetSupply} />
  );
};

const ListIngredientsForCurrentItem = connect((state) => ({
  item: selectCurrentItem(state),
  targetSupply: selectTopTargetSupply(state),
}))(ListIngredients);

const RecipeForm = ({
  setTargetSupply,
  setCurrentRecipe,
  item,
  availableRecipes,
  targetSupply,
}) => {
  const targetSupplyInput = useRef();

  function onTargetSupplyChange(event) {
    event.preventDefault();
    const n = Number.parseInt(targetSupplyInput.current.value);
    setTargetSupply(n);
  }

  return (
    <Form onSubmit={onTargetSupplyChange}>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Recipe
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            as="select"
            custom
            defaultValue={item}
            onChange={(e) => setCurrentRecipe(e.target.value)}
          >
            <option value={item}>{item}</option>
            {availableRecipes.sort().map(
              (r) =>
                r !== item && (
                  <option key={r} value={r}>
                    {r}
                  </option>
                )
            )}
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Target supply
        </Form.Label>
        <Col sm={8}>
          <InputGroup>
            <Form.Control
              type="number"
              step="1"
              defaultValue={targetSupply}
              ref={targetSupplyInput}
            />
            <InputGroup.Append>
              <InputGroup.Text>pcs/min</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Form.Group>
    </Form>
  );
};

const CurrentRecipeForm = connect(
  (state) => ({
    item: selectCurrentItem(state),
    targetSupply: selectTopTargetSupply(state),
    availableRecipes: Object.keys(selectRecipes(state)),
  }),
  {
    setTargetSupply,
    setCurrentRecipe,
  }
)(RecipeForm);
