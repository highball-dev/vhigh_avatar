import { expect } from "chai";

export const shouldBehaveLikeAfterTransfer = () => {
  it("should behave like after contract transfer", async function () {
    expect(await this.nft.owner()).to.equal(
      "0xF7Ebc23243bCB28ac70d6516AeC8785Ea74Fb9Cd"
    );
  });
};
