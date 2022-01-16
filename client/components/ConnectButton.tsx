import { useConnectToWallet } from "ethereal-react";
import Container from "./Container";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";
import Title from "./Title";
import UnderlinedLink from "./UnderlinedLink";

const ConnectButton = () => {
  const [connect, { loading, error }] = useConnectToWallet();

  return (
    <Container>
      <Title />

      <div className="mb-10">
        {error && (
          <ErrorMessage>{`Error connecting to wallet: ${error.message}`}</ErrorMessage>
        )}
      </div>

      <div className="flex justify-center mt-40 mb-40">
        <button
          onClick={connect}
          disabled={loading}
          className="bg-[#FF10A9] text-white disabled:opacity-50 text-xl w-[220px] h-[60px] rounded-2xl"
        >
          WALLET CONNECT
        </button>
      </div>

      <div className="flex flex-col items-center justify-between h-20 mb-10">
        <UnderlinedLink href="FIXME:">Contract</UnderlinedLink>
        <UnderlinedLink href="FIXME:">Twitter</UnderlinedLink>
        <UnderlinedLink href="FIXME:">Discord</UnderlinedLink>
      </div>

      <Footer />
    </Container>
  );
};

export default ConnectButton;
