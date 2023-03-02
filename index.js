const names = require("../utilities/utils/index.js");
const city = require("../country/state/city/index.js");
const getPeopleInCity = (city) => {
  return names(city);
};

module.exports = getPeopleInCity;
