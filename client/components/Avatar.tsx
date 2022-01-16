import { NEXT_PUBLIC_IPFS_CID } from "../const";

type Props = {
  tokenId: number;
};
const Avatar = ({ tokenId }: Props) => {
  const name = `#${tokenId}`;
  return (
    <>
      <div className="flex justify-center">
        <img
          src={`https://gateway.pinata.cloud/ipfs/${NEXT_PUBLIC_IPFS_CID}/${tokenId}`}
          className="max-w-lg"
        />
      </div>
      <p className="text-center text-gray-700 text-xl mt-2">{name}</p>
    </>
  );
};

export default Avatar;
