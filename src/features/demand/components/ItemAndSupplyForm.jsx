import React, { useRef } from "react";
import { Form, Col, InputGroup } from "react-bootstrap";
import { RequiredMachinesForItem } from "./RequiredMachines";
import { PcsPerMin } from "../../../components/PcsPerMin";

export const ItemAndSupplyForm = ({
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
        <Form.Group as={Col} sm={3} className="mb-0">
          <InputGroup>
            <Form.Control
              type="number"
              placeholder="Target Supply"
              step="1"
              defaultValue={targetSupply}
              ref={targetSupplyInput}
              onBlur={onTargetSupplyChange}
            />
            <InputGroup.Append>
              <InputGroup.Text>
                <PcsPerMin />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Col className="d-flex align-items-center pl-3">
          <RequiredMachinesForItem item={item} targetSupply={targetSupply} />
        </Col>
      </Form.Row>
    </Form>
  );
};
