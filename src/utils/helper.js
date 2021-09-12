const parseCmToM = length => {
  return length / 100;
};
const getBMI = (weightKg, heightM) => {
  return parseFloat((weightKg / heightM ** 2).toFixed(1));
};

const getNoOfMembersInBMICategory = (list, bmiCategory) => {
  return list.filter(item => item.bmiCategory === bmiCategory).length;
};
module.exports = { parseCmToM, getBMI, getNoOfMembersInBMICategory };
