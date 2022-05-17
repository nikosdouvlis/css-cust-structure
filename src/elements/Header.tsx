import { Box, createAppearanceKeys, Heading, Text } from "../themablePrimitives";
import React from "react";

const keys = createAppearanceKeys("header", ["title", "subtitle"] as const);

const HeaderRoot = (props: React.PropsWithChildren<{}>): JSX.Element => {
  return (
    <Box
      slotName={keys.root}
      css={{
        color: "",
      }}
      {...props}
    />
  );
};

const HeaderTitle = (props: React.PropsWithChildren<any>): JSX.Element => {
  return <Heading {...props} slotName={keys.title} />;
};

const HeaderSubtitle = (props: React.PropsWithChildren<any>): JSX.Element => {
  return <Text {...props} slotName={keys.subtitle} />;
};

export const Header = { Root: HeaderRoot, Title: HeaderTitle, Subtitle: HeaderSubtitle };
