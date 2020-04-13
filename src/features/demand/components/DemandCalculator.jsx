import React, { useRef } from "react";
import { Card, Form, Col, InputGroup, ListGroup, Row } from "react-bootstrap";
import { RequiredMachinesForItem } from "./Inputs";
import { connect } from "react-redux";
import {
  setTargetSupply,
  setCurrentRecipe,
  selectCurrentItem,
  selectTopTargetSupply,
  selectRequiredMachinesForRecipe,
  selectInputsForRecipe,
  selectAllIngredientsDemandForItem,
} from "../demandSlice";
import { selectRecipes, selectRecipe } from "../../recipes/recipesSlice";

import "./DemandCalculator.css";

export const DemandCalculator = () => {
  return (
    <Card className="m-1 demand-calculator" bg="light">
      <Card.Header>Demand calculator</Card.Header>
      <Card.Body>
        <CurrentRecipeForm />
      </Card.Body>
      <ListIngredientsForCurrentItem />
    </Card>
  );
};

const ListIngredients = ({ item, targetSupply }) => {
  return item && <IngredientsForItem item={item} targetSupply={targetSupply} />;
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
      <Form.Row>
        <Form.Group as={Col} sm={5} className="mb-0">
          <Form.Control
            as="select"
            placeholder="Item"
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
        </Form.Group>
        <Form.Group as={Col} sm={4} className="mb-0">
          <InputGroup>
            <Form.Control
              type="number"
              placeholder="Target Supply"
              step="1"
              defaultValue={targetSupply}
              ref={targetSupplyInput}
            />
            <InputGroup.Append>
              <InputGroup.Text>
                <small>pcs/min</small>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Col className="d-flex align-items-center">
          <RequiredMachinesForItem item={item} targetSupply={targetSupply} />
        </Col>
      </Form.Row>
    </Form>
  );
};

const CurrentRecipeForm = connect(
  (state, props) => ({
    item: selectCurrentItem(state),
    targetSupply: selectTopTargetSupply(state),
    availableRecipes: Object.keys(selectRecipes(state)),
    requiredMachines: selectRequiredMachinesForRecipe(state, props),
    recipe: selectRecipe(state, props),
  }),
  {
    setTargetSupply,
    setCurrentRecipe,
  }
)(RecipeForm);

const Ingredients = ({ ingredients }) => {
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

const mapState = (state, props) => ({
  ingredients: selectAllIngredientsDemandForItem(state, props),
});

const IngredientsForItem = connect(mapState)(Ingredients);

const IngredientsRow = ({ item, targetSupply }) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col sm={5}>{item}</Col>
        <Col sm={4}>
          {targetSupply} <small>pcs/min</small>
        </Col>
        <Col>
          <RequiredMachinesForItem item={item} targetSupply={targetSupply} />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
