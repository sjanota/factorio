import { BeltTypes } from "../requiredBelt";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const messages = {
  [BeltTypes.Normal]: "Regular transport belts",
  [BeltTypes.Fast]: "Fast transport belts",
  [BeltTypes.Express]: "Express transport belts",
  [BeltTypes.Overloaded]:
    "The belt is overloaded, you need to use more then one parallel belt or split the process",
};

export const BeltTypeHint = ({ beltType }) => {
  return (
    <OverlayTrigger
      placement="left"
      overlay={(props) => (
        <Tooltip id="button-tooltip" {...props}>
          {messages[beltType]}
        </Tooltip>
      )}
    >
      <span className={`belt-type-${beltType.toLowerCase()}`}>
        <FontAwesomeIcon icon={faAngleDoubleUp} size="lg" />
      </span>
    </OverlayTrigger>
  );
};
