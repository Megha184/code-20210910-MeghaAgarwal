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
    const BMI = getBMI(WeightKg, Heightm);
    const bmiTableItem = bmiTable.find(({ min, max }) => {
      if (min) {
        if (max) return min <= BMI && max >= BMI;
        else return min <= BMI;
      } else return max >= BMI;
    });
    const { BMICategory, HealthRisk } = bmiTableItem || {};
    return {
      ...detail,
      BMI,
      BMICategory,
      HealthRisk,
    };
  });
const updatedBMIList = updateBmiListWithDetails(bmiList);

let countOverweight = getNoOfMembersInBMICategory(updatedBMIList,"Overweight");
// Prints in object structure
console.log(updatedBMIList);
console.log(countOverweight);
//Prints in tabular form
console.table(updatedBMIList);
