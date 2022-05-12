import React from "react";
import { PrimitiveProps } from "./types";

export const HeadingPrimitive = (props: PrimitiveProps<"heading">): JSX.Element => {
  return <h1 {...props} style={{ border: "1px solid blue" }} />;
};
