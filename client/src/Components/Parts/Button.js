import React from "react";

export const Button = ({ props, children }) => (
  <button type="button" className="btn btn-dark" {...props}>
    {children}
  </button>
);
