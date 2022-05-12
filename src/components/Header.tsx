import { Box, Heading, makeSlots, Text } from "../themablePrimitives";

const headerSlots = makeSlots("header", ["title", "subtitle"] as const);

const HeaderRoot = (props: React.PropsWithChildren<any>): JSX.Element => {
  return <Box {...props} slotName={headerSlots.root} />;
};

const HeaderTitle = (props: React.PropsWithChildren<any>): JSX.Element => {
  return <Heading {...props} slotName={headerSlots.title} />;
};

const HeaderSubtitle = (props: React.PropsWithChildren<any>): JSX.Element => {
  return <Text {...props} slotName={headerSlots.subtitle} />;
};

export const Header = { Root: HeaderRoot, Title: HeaderTitle, Subtitle: HeaderSubtitle };
