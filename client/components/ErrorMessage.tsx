type Props = {
  children: string;
};
const ErrorMessage = ({ children }: Props) => {
  return <p style={{ color: "red" }}>{children}</p>;
};

export default ErrorMessage;
