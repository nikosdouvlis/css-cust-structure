import React from "react";
import { PrimitiveProps } from "./types";

export const TextPrimitive = (props: PrimitiveProps<"p">): JSX.Element => {
  return <p {...props} style={{ border: "1px solid yellow" }} />;
};
