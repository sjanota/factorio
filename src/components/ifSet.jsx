import React from "react";

export const ifSet = (propName) => (Component) => (props) =>
  !!props[propName] && <Component {...props} />;
