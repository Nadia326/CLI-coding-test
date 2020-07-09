class Depreciation {
  constructor(params) {
    const {
      purchases,
      depreciation,
      assetBalance,
      depreciationBalance,
      netAssetBalance,
      openingDeprecationBalance,
      openingAssetBalance
    } = params;

    this.openingAssetBalance = openingAssetBalance;
    this.purchases = purchases;
    this.assetBalance = assetBalance;
    this.openingDeprecationBalance = openingDeprecationBalance;
    this.depreciation = depreciation;
    this.depreciationBalance = depreciationBalance;
    this.netAssetBalance = netAssetBalance;
  }
}

module.exports = Depreciation;
