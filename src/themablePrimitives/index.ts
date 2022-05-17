import { makeThemable } from "./makeThemable";
import {
  Box as BoxPrimitive,
  Button as ButtonPrimitive,
  Card as CardPrimitive,
  Flex as FlexPrimitive,
  HeadingPrimitive,
  TextPrimitive,
} from "../primitives";

export * from "./createAppearanceKeys";

export const Box = makeThemable(BoxPrimitive);
export const Text = makeThemable(TextPrimitive);
export const Heading = makeThemable(HeadingPrimitive);
export const Flex = makeThemable(FlexPrimitive);
export const Card = makeThemable(CardPrimitive);
export const Button = makeThemable(ButtonPrimitive);
