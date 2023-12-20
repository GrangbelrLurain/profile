import { ReactNode } from "react";

type TEmptyProps = {
  children?: ReactNode;
};

const Empty = ({ children }: TEmptyProps) => {
  return <>{children}</>;
};

export default Empty;
