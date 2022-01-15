import type { NextPage } from "next";
import { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const [nextTokenId, setNextTokenId] = useState(-1);

  const connect = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
  };

  const handleReload = async () => {};

  const handleMint = async () => {};

  return (
    <div>
      <h1>Vhigh! Avatar Gen 0.0</h1>
      <h2>{nextTokenId === -1 ? "?" : nextTokenId}/1000</h2>
      <button onClick={handleReload}>Reload</button>
      <button onClick={handleMint}>Mint NFT</button>
      {nextTokenId !== -1 && <p>The next tokenId is probably {nextTokenId}.</p>}
    </div>
  );
};

export default Home;
