import type { FallbackProps } from "react-error-boundary";
import ErrorMessage from "./ErrorMessage";
import Title from "./Title";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <Title />
      <ErrorMessage>{`Error: ${error.message}`}</ErrorMessage>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
};

export default Error;
