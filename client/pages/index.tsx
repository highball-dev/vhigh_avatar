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
      <div>
        <Title />
        <h2>Minted already !!!</h2>
      </div>
    );
  }

  if (data) {
    return (
      <Suspense fallback={<Minting />}>
        <div>
          <Title />
          <Minted contract={contract} tokenId={tokenId} transaction={data} />
        </div>
      </Suspense>
    );
  }

  return (
    <div>
      <Title />
      <h2>{tokenId}/1000</h2>
      <Avatar tokenId={tokenId} />
      <button onClick={handleReload} disabled={loading}>
        Reload
      </button>
      <button onClick={handleMint} disabled={loading}>
        Mint NFT #{tokenId}
      </button>
    </div>
  );
};

export default Home;
