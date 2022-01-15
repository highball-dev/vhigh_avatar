import { expect } from "chai";

export const shouldBehaveLikeAfterBatchMint = () => {
  it("should behave like after batch mint", async function () {
    expect(await this.nft.totalSupply()).to.equal(11);
    expect(
      await this.nft.balanceOf("0xF7Ebc23243bCB28ac70d6516AeC8785Ea74Fb9Cd")
    ).to.equal(11);
    expect(await this.nft.owner()).to.equal(this.signers.admin.address);
  });
};
