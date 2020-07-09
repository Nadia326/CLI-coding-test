const prompt = require('prompt');
const { properties } = require('./src/properties');
const { calculateNetAssetBalance } = require('./src/calculation');
const { showTable } = require('./src/table');

console.log("So, let's calculate your net asset balance. Please, enter needed parameters");
prompt.start();

prompt.get(properties, function (err, result) {
  if (result) {
    const {
      depreciationPeriod,
      openingAssetBalance,
      openingDepreciationBalance,
      assetPurchases,
      purchasedGrowthRate
    } = result;

    console.log('Your input received:');
    console.log(' Depreciation Period: ' + depreciationPeriod);
    console.log(' Opening Asset Balance: ' + openingAssetBalance);
    console.log(' Asset Purchases For Year 1: ' + assetPurchases);
    console.log(' Purchased Growth Rate: ' + purchasedGrowthRate);
    console.log(' Opening Depreciation Balance: ' + openingDepreciationBalance);

    showTable(calculateNetAssetBalance({
      depreciationPeriod: Number(depreciationPeriod),
      openingAssetBalance: Number(openingAssetBalance),
      openingDepreciationBalance: Number(openingDepreciationBalance),
      assetPurchases: Number(assetPurchases),
      purchasedGrowthRate: Number(purchasedGrowthRate)
    }));

  } else if (err) {
    return onError(err);
  }
});

function onError(err) {
  console.log(err);
  return 1;
}
