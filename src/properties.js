const properties = [
  {
    name: 'depreciationPeriod',
    message: 'Enter Deprecation Period in years',
    required: true,
    validator: /^[\d]+$/,
    warning: 'Deprecation Period must contain only numbers'
  },
  {
    name: 'openingAssetBalance',
    message: 'Enter Opening Asset Balance',
    required: true,
    validator: /^[\d]+$/,
    warning: 'Opening Asset Balance must contain only numbers'
  },
  {
    name: 'assetPurchases',
    message: 'Enter Asset Purchases For Year 1',
    required: true,
    validator: /^[\d]+$/,
    warning: 'Asset Purchases For Year 1 must contain only numbers'
  },
  {
    name: 'purchasedGrowthRate',
    message: 'Enter Purchased Growth Rate in %',
    required: true,
    validator: /^[\d]+$/,
    warning: 'Purchased Growth Rate must contain only numbers'
  },
  {
    name: 'openingDepreciationBalance',
    message: 'Enter Opening Depreciation Balance',
    required: true,
    validator: /^[\d]+$/,
    warning: 'Opening Depreciation Balance must contain only numbers'
  }
];

module.exports = {
  properties
};
