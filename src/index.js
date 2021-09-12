const bmiList = [
    { "Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
    {
      "Gender": "Male",
      "HeightCm": 161,
      "WeightKg": 85
    },
    { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
    {
      "Gender": "Female",
      "HeightCm": 166,
      "WeightKg": 62
    },
    { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 },
    { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }
  ]
const bmiTable = [
    {
      "max": 18.4,
      "healthRisk": "Malnutrition Risk",
      "bmiCategory": "Underweight"
    },
    {
      "min": 18.5,
      "max": 24.9,
      "healthRisk": "Low Risk",
      "bmiCategory": "Normal weight"
    },
    {
      "min": 25,
      "max": 29.9,
      "healthRisk": "Enhanced risk",
      "bmiCategory": "Overweight"
    },
    {
      "min": 30,
      "max": 34.9,
      "healthRisk": "Medium risk",
      "bmiCategory": "Moderately Obese"
    },
    {
      "min": 35,
      "max": 39.9,
      "healthRisk": "High risk",
      "bmiCategory": "Severely obese"
    },
    {
      "min": 40,
      "healthRisk": "Very high risk",
      "bmiCategory": "Very severely obese"
    }
  ]

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