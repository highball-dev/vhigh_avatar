type Props = {
  children: string;
};
const ErrorMessage = ({ children }: Props) => {
  return <p className="text-[red] text-center break-words">{children}</p>;
};

export default ErrorMessage;
