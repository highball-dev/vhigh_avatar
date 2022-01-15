import { expect } from "chai";

export const shouldBehaveLikeNFT = () => {
  it("should behave like nft", async function () {
    expect(await this.nft.name()).to.equal("Vhigh! Avatar Gen 0.0");
    expect(await this.nft.symbol()).to.equal("VAG0");
    expect(await this.nft.saleIsActive()).to.equal(false);
    expect(await this.nft.balanceOf(this.signers.admin.address)).to.equal(0);
  });
};
