import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "ethereal-react";
import ConnectButton from "../components/ConnectButton";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { Suspense } from "react";

// TODO: provider, network

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider fallback={<ConnectButton />} cacheProvider>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loading />}>
          <Component {...pageProps} />
        </Suspense>
      </ErrorBoundary>
    </WalletProvider>
  );
}

export default MyApp;
