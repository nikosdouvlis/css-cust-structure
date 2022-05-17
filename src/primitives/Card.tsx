import { styled } from "../designSystem";

const Card = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  px: "$8",
  py: "$10",
  minWidth: "$96",
  borderRadius: "$2xl",
  boxShadow: "$boxShadow1",
});

Card.displayName = "CardPrimitive";

export { Card };
