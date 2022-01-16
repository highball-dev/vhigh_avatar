import type { FallbackProps } from "react-error-boundary";
import Button from "./Button";
import Container from "./Container";
import ErrorMessage from "./ErrorMessage";
import Title from "./Title";

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Container>
      <Title />

      <div className="mb-10">
        <ErrorMessage>{`Error: ${error.message}`}</ErrorMessage>
      </div>

      <div className="flex justify-center">
        <Button onClick={resetErrorBoundary} disabled={false} color="gray">
          TRY AGAIN
        </Button>
      </div>
    </Container>
  );
};

export default Error;
