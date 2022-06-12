export {};

type ObjectType = {
  name: string;
  age: number;
};

// エイリアスと同様の動作を行うことができる。
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};