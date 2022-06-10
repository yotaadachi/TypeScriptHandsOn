export {};

let numbers: number[] = [1, 2, 3];

// こういうアノテーションの書き方もできる。(非推奨)
let numbers2: Array<number> = [1, 2, 3];

// Arrayインターフェースの型をジェネリクスで具現化している。
let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

let hairetu: (string | number | boolean)[] = [1, false, 'Japan'];