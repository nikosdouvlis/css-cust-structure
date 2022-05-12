import React from "react";
import { PrimitiveProps } from "./types";

export const BoxPrimitive = (props: PrimitiveProps<"div">): JSX.Element => {
  return <div {...props} style={{ border: "1px solid blue" }} />;
};
