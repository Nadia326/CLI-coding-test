const Deprecation = require('./models/Depreciation');
const yearsToCalculateNumber = 20;

const calculateNetAssetBalance = (params) => {
  const data = {};
  const {
    depreciationPeriod,
    openingAssetBalance,
    assetPurchases,
    purchasedGrowthRate,
    openingDepreciationBalance
  } = params;

  let assetBalance = openingAssetBalance;
  let depreciationBalance = openingDepreciationBalance;
  let netAssetBalance;

  for (let i = 1; i <= yearsToCalculateNumber; i++) {
    const purchases = assetPurchases * Math.pow(1 + purchasedGrowthRate / 100, i - 1);
    const depreciation = (i <= depreciationPeriod) ?
      (openingAssetBalance + purchases) / depreciationPeriod : purchases / depreciationPeriod;

    const openingYearDeprecationBalance = depreciationBalance;
    const openingYearAssetBalance = assetBalance;

    assetBalance += purchases;
    depreciationBalance += depreciation;
    netAssetBalance = assetBalance - depreciationBalance;

    data[i] = new Deprecation({
      purchases: Math.round(purchases),
      depreciation: Math.round(depreciation),
      assetBalance: Math.round(assetBalance),
      depreciationBalance: Math.round(depreciationBalance),
      openingDeprecationBalance: Math.round(openingYearDeprecationBalance),
      openingAssetBalance: Math.round(openingYearAssetBalance),
      netAssetBalance: Math.round(netAssetBalance)
    });
  }

  return data;
};

module.exports = {
  calculateNetAssetBalance
};
