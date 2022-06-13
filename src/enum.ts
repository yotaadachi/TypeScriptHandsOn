export {};

// 数値のenum型
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthJs = {
//   January: 0,
//   February: 1
// };
// console.log(MonthJs.January);
// console.log(MonthJs.February);

// 文字列のenum型
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW;


