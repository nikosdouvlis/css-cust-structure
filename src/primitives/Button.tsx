import { styled } from "../designSystem";

export const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  borderRadius: "$md",
  py: "$2-5",
  px: "$5",

  // custom
  variants: {
    variant: {
      solid: {
        backgroundColor: "$primary500",
        color: "white",
        "&:hover": {
          backgroundColor: "$primary400",
        },
      },
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});
