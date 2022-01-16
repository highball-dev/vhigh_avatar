import { useConnectToWallet } from "ethereal-react";
import ErrorMessage from "./ErrorMessage";
import Title from "./Title";

const ConnectButton = () => {
  const [connect, { loading, error }] = useConnectToWallet();

  return (
    <div>
      <Title />

      {error && (
        <ErrorMessage>{`Error connecting to wallet: ${error.message}`}</ErrorMessage>
      )}

      <button onClick={connect} disabled={loading}>
        Connect to Wallet
      </button>
    </div>
  );
};

export default ConnectButton;
