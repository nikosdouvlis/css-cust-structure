import React from "react";
import { Card, Header, PageMetadata } from "../elements";
import { Box } from "../themablePrimitives";

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
    <PageMetadata flow="signIn" page="phoneOtp">
      <Card>
        <Header.Root>
          <Header.Title>this is the title</Header.Title>
          <Header.Subtitle>This is the title</Header.Subtitle>
        </Header.Root>
        <Box>
          <Box slotName={["petros", "nikos"]} />
        </Box>
      </Card>
    </PageMetadata>
  );
}
