import React from "react";
import { Card, Header, PageMetadata } from "../elements";
import { Box, Button, Flex } from "../themablePrimitives";

export function SetPassword() {
  // Mock error and loading states
  const [count, setCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [errorCode, setErrorCode] = React.useState("");

  const onChange = (e: any) => {
    if (e.target.value === "invalid") {
      setErrorCode("invalidPassword");
    }
    setPassword(e.target.value);
  };

  const onClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <PageMetadata flow="signIn" page="phoneOtp">
        <Card>
          <Header.Root>
            <Header.Title>Title</Header.Title>
            <Header.Subtitle>Subtitle</Header.Subtitle>
          </Header.Root>
          <Colors />
          <Button slotName={["form", "submitButton"]}>Continue</Button>
        </Card>
      </PageMetadata>
    </div>
  );
}

const Colors = () => {
  return (
    <Flex gap={"2"} css={{ my: "$8" }} direction={"column"} slotName={["colorContainer"]}>
      {["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].map((scale, i) => (
        <Box
          slotName={["colorContainer", "box"]}
          key={scale}
          css={{ backgroundColor: `\$primary${scale}`, py: "$3", borderRadius: "$2xl" }}
        >
          primary{scale}
        </Box>
      ))}
    </Flex>
  );
};
