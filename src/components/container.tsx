import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Empty from "./box/empty";

type TContainerProps = ComponentPropsWithoutRef<"section">;

const Container = ({ className, ...props }: TContainerProps) => {
  return (
    <section className={clsx("max-w-7xl mx-auto", className)} {...props} />
  );
};

export default Container;
