import type { NextPage } from "next";
import { Suspense } from "react";
import { NEXT_PUBLIC_VHIGH_AVATAR_GEN_0_CONTRACT_ADDRESS } from "../const";
import {
  ERC721_ABI,
  useContract,
  useTokenBalance,
  useWriteContract,
} from "ethereal-react";
import { useTokenId } from "../hooks/useTokenId";
import Minting from "../components/Minting";
import Minted from "../components/Minted";
import Title from "../components/Title";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Button from "../components/Button";
import UnderlinedLink from "../components/UnderlinedLink";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const contract = useContract(
    NEXT_PUBLIC_VHIGH_AVATAR_GEN_0_CONTRACT_ADDRESS,
    [...ERC721_ABI, "function mint()"]
  );
  const tokenId = useTokenId(contract);
  const balance = useTokenBalance(contract);
  const [mint, { loading, data }] = useWriteContract(contract, "mint");

  const handleReload = () => window.location.reload();

  const handleMint = () => mint();

  if (balance.toNumber() !== 0) {
    return (
      <Container>
        <Title />

        <p className="text-center font-bold text-4xl mb-10">
          Minted already !!!
        </p>

        <div className="text-center mb-10">
          <UnderlinedLink href="FIXME:">See the list of NFTs</UnderlinedLink>
        </div>

        <Footer />
      </Container>
    );
  }

  if (data) {
    return (
      <Suspense fallback={<Minting />}>
        <Container>
          <h1 className="text-4xl font-bold text-center mb-10">
            Mint Completed!
          </h1>
          <Minted contract={contract} tokenId={tokenId} transaction={data} />

          <Footer />
        </Container>
      </Suspense>
    );
  }

  return (
    <Container>
      <Title />

      <p className="text-center font-bold mb-4">
        Displayed image may not always be minted.
        <br />
        Please reload and update to the latest image.
      </p>

      <div className="mb-8">
        <Avatar tokenId={tokenId} />
        <p className="text-center text-gray-700 text-xl">{`${tokenId}/1000`}</p>
      </div>

      <div className="flex flex-col items-center mb-10 sm:flex-row justify-center">
        <div className="mb-2 sm:mb-0 sm:mr-4">
          <Button onClick={handleReload} disabled={loading} color="blue">
            RELOAD
          </Button>
        </div>
        <Button onClick={handleMint} disabled={loading} color="pink">
          MINT
        </Button>
      </div>

      <div className="text-center mb-10">
        <UnderlinedLink href="FIXME:">See the list of NFTs</UnderlinedLink>
      </div>

      <Footer />
    </Container>
  );
};

export default Home;
