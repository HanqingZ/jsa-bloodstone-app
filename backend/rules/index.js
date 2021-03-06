const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const buildingsRuleInput = fs.readFileSync(`${__dirname}/buildingsRules.csv`);
const buildingsRule = parse(buildingsRuleInput, {
  columns: true,
  cast: true,
});
const townhallRule = buildingsRule.filter((building) => building.buildingName === 'townhall')[0];
const farmRule = buildingsRule.filter((building) => building.buildingName === 'farm')[0];
const mineRule = buildingsRule.filter((building) => building.buildingName === 'mine')[0];
const academyRule = buildingsRule.filter((building) => building.buildingName === 'academy')[0];

const troopsRuleInput = fs.readFileSync(`${__dirname}/troopsRules.csv`);
const troopsRule = parse(troopsRuleInput, {
  columns: true,
  cast: true,
});
const foxRule = troopsRule.filter((troop) => troop.troopName === 'fox')[0];

const unitTypes = {
  // building types
  FARM: 'Farm',
  MINE: 'Mine',
  ACADEMY: 'Academy',
  TOWNHALL: 'Townhall',
  // troop types
  FOX: 'Fox',
};

const progressCategories = {
  BUILDING: 'Building',
  TROOP: 'Troop',
};

module.exports = {
  townhallRule,
  farmRule,
  mineRule,
  academyRule,
  foxRule,
  unitTypes,
  progressCategories,
};
