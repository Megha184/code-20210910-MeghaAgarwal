const bmiList = require("./data/bmi-list.json");
const bmiTable = require("./data/bmi-table.json");
const {
  parseCmToM,
  getBMI,
  getNoOfMembersInBMICategory,
} = require("./utils/helper.js");
const updateBmiListWithDetails = list =>
  list.map(detail => {
    const { HeightCm, WeightKg } = detail;
    const Heightm = parseCmToM(HeightCm);
    const bmi = getBMI(WeightKg, Heightm);
    const bmiTableItem = bmiTable.find(({ min, max }) => {
      if (min) {
        if (max) return min <= bmi && max >= bmi;
        else return min <= bmi;
      } else return max >= bmi;
    });
    const { bmiCategory, healthRisk } = bmiTableItem || {};
    return {
      ...detail,
      bmi,
      bmiCategory,
      healthRisk,
    };
  });
const updatedBMIList = updateBmiListWithDetails(bmiList);

let countOverweight = getNoOfMembersInBMICategory(updatedBMIList,"Overweight");

console.log(updatedBMIList);
console.log(countOverweight);
