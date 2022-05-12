import React from "react";
import { usePageMetadata } from "../components";

type Themable<T = {}> = { slotName?: string | string[] } & T;
type ThemablePrimitive<T> = React.FunctionComponent<Themable<T>>;

const fakeGenerateSemanticClassName = (props: any) => {
  const { slotName, pageMetadata: any } = props;
  const [first, ...rest] = typeof slotName === "string" ? [slotName] : slotName;
  return `cl-${first}-${rest.map((a: any) => a).join("")}`;
};

function makeThemable<P>(component: React.FunctionComponent<P>): ThemablePrimitive<P> {
  const ThemableComponent = (props: Themable<P>) => {
    const { slotName, ...restProps } = props;
    const pageMetadata = usePageMetadata();
    const appearance = {} as any; // useAppearance();
    if (!slotName) {
      return component(restProps as unknown as P);
    }
    const className = fakeGenerateSemanticClassName({ slotName, pageMetadata, appearance });
    return component({ ...restProps, className } as unknown as P);
  };

  const displayName = component.displayName || component.name || "Component";
  ThemableComponent.displayName = `Themable${displayName}`.replace("_", "");
  return ThemableComponent as any;
}

export { makeThemable };