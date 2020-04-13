import React from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CollapseButton = ({ collapsed, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={collapsed ? faChevronDown : faChevronUp}
      onClick={onClick}
    />
  );
};

const CollapsibleCard = ({
  header,
  children,
  initallyCollapsed = false,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(initallyCollapsed);
  return (
    <Card {...props}>
      <Card.Header className="d-flex justify-content-between">
        <div>{header}</div>
        <div>
          <CollapseButton
            collapsed={collapsed}
            onClick={() => setCollapsed((s) => !s)}
          />
        </div>
      </Card.Header>
      {!!collapsed || children}
    </Card>
  );
};

export default CollapsibleCard;
