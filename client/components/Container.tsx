import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="py-16 px-8">{children}</div>;
};

export default Container;
