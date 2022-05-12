import { makeThemable } from "./makeThemable";
import { BoxPrimitive, HeadingPrimitive, TextPrimitive } from "../primitives";

export { makeSlots } from "./makeSlots";

export const Box = makeThemable(BoxPrimitive);
export const Text = makeThemable(TextPrimitive);
export const Heading = makeThemable(HeadingPrimitive);
