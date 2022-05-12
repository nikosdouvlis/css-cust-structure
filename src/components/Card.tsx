import { Box, makeSlots } from "../themablePrimitives";

const slots = makeSlots("card");

type CardRootProps = React.PropsWithChildren<any>;
const Card = (props: CardRootProps): JSX.Element => {
  const { ...rest } = props;
  return <Box {...rest} slotName={slots.root} />;
};

export { Card };
