const bmiList = require("./data/bmi-list.json");
const bmiTable = require("./data/bmi-table.json");

  const updateBmiListWithDetails = list =>
  list.map(detail => {
    const { HeightCm, WeightKg } = detail;
    const Heightm = HeightCm/100;
    const bmi = WeightKg/Heightm**2;
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

let countOverweight = updatedBMIList.filter(item => item.bmiCategory === "Overweight").length;

console.log(updatedBMIList);
console.log(countOverweight);