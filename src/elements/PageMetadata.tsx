import React from "react";

type PageMetadataProps = {
  flow: "signIn" | "signUp";
  page: "start" | "emailOtp" | "phoneOtp";
};

type PageMetadataContextValue = PageMetadataProps;
const PageMetadataContext = React.createContext<{ value: PageMetadataContextValue } | undefined>(undefined);
PageMetadataContext.displayName = "Clerk__PageMetadataContext";

const PageMetadata = (props: React.PropsWithChildren<PageMetadataProps>) => {
  const { children, ...metadata } = props;
  const value = React.useMemo(() => ({ value: metadata }), []);
  return (
    <PageMetadataContext.Provider value={value}>
      <div className={Object.values(metadata).join("-")}>{props.children}</div>
    </PageMetadataContext.Provider>
  );
};

const usePageMetadata = (): PageMetadataProps => {
  const ctx = React.useContext(PageMetadataContext);
  if (!ctx) {
    throw new Error("PageMetadataContext not found");
  }
  return ctx.value;
};

export { PageMetadata, usePageMetadata };
export type { PageMetadataProps };
