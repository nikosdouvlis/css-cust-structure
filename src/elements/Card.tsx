import { Card as CardBase, createAppearanceKeys } from "../themablePrimitives";

const keys = createAppearanceKeys("card");

type CardRootProps = React.PropsWithChildren<any>;

const Card = (props: CardRootProps): JSX.Element => {
  return <CardBase slotName={keys.root} {...props} />;
};

export { Card };
