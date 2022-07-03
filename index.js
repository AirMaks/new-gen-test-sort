// Список курсов
let courses = [
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in China", prices: [50, 1000] },
  { name: "Courses in Germany", prices: [502, null] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Japan", prices: [null, 502] },
  { name: "Courses in Russia", prices: [30, 400] },
  { name: "Courses in Poland", prices: [100, 1000] },
  { name: "Courses in France", prices: [null, null] },
  { name: "Courses in Kazakhstan", prices: [100, 324] }
];

function quickSort(courses) {
  if (courses.length <= 1) {
    return courses;
  }

  let pivotIndex = Math.floor(courses.length / 2);
  let pivot = courses[pivotIndex].prices[0];
  let pivot2 = courses[pivotIndex].prices[1];
  let less = [];
  let greater = [];
  let nulled = [];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].prices[0] === pivot && courses[i].prices[1] === pivot2)
      continue;

    if (courses[i].prices[0] === null && courses[i].prices[1] === null) {
      nulled.push(courses[i]);
      continue;
    }
    let priceFrom =
      courses[i].prices[0] !== null && courses[i].prices[1] === null;
    let priceTo =
      courses[i].prices[0] === null && courses[i].prices[1] !== null;
    let pivotIsNull = pivot === null;
    let pivot2IsNull = pivot2 === null;

    if (
      (priceFrom &&
        pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[0] < pivot2) || // 400 null < null 400
      (priceFrom &&
        !pivotIsNull &&
        pivot2IsNull &&
        courses[i].prices[0] < pivot) || // 400 null < 400 null
      (priceTo &&
        pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[1] < pivot2) || // null 400 < null 400
      (priceTo &&
        !pivotIsNull &&
        pivot2IsNull &&
        courses[i].prices[1] < pivot) || // null 400 < 400 null
      (priceFrom &&
        !pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[0] < pivot) || // 400 null < 20 500
      (priceTo &&
        !pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[1] < pivot) || // null 400 < 20 500
      (!priceFrom &&
        !priceTo &&
        pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[0] < pivot2) || // 20 50 < null 500
      (!priceFrom &&
        !priceTo &&
        !pivotIsNull &&
        pivot2IsNull &&
        courses[i].prices[0] < pivot) || // 20 50 < 500 null
      (!priceTo &&
        !priceFrom &&
        !pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[0] <= pivot &&
        courses[i].prices[1] < pivot2) || // 100 1000 < 100 300 if pivot and course "price from" are equal
      (!priceTo &&
        !priceFrom &&
        !pivotIsNull &&
        !pivot2IsNull &&
        courses[i].prices[0] < pivot) // 50 200 < 100 300
    ) {
      less.push(courses[i]);
    } else {
      greater.push(courses[i]);
    }
  }

  return [
    ...quickSort(less),
    courses[pivotIndex],
    ...quickSort(greater),
    ...nulled
  ];
}

console.log(quickSort(courses));
