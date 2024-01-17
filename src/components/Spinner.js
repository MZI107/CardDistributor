/** @format */

import React from "react";
import { Spinner as RBSpinner } from "react-bootstrap";
import { CenterWrapper } from "./Wrapper";

export function Spinner() {
  return (
    <CenterWrapper className="m-12">
      <RBSpinner animation="border" variant="primary" />
    </CenterWrapper>
  );
}

export function ButtonSpinner({ loading }) {
  return loading && <span className="ml-3 mr-4 spinner spinner-white"></span>;
}
