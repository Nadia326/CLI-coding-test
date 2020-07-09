const showTable = (data) => {
  const view = {};
  Object.entries(data).forEach(datum => {
    view[`YEAR ${datum[0]}`] = datum[1];
  });
  console.table(view);
};

module.exports = {
  showTable
};
