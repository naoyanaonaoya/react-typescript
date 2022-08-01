import React from "react";
import "./App.css";
import TestComponent from "./TestComponent";
import Data from "./data.json";

// console.log(Data);

type USERS = typeof Data;

const name = "hello";
let name2 = "hello";

let username: string = "naoya";

let bool: boolean = true;
let array1 = [true, true, false];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  // ?をつけるとなくてもよくなる
  last?: string | null;
}

let nameOb: NAME = { first: "yamada", last: "tato" };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// literal type start
// xは数字ならなんでも代入できる
let x: number;
x = 1;
// yは1しか代入できない
let y: 1;
y = 1;
// y = 100;
// literal type end

// Intersection Types start
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "naoya",
  password: "1234",
};
// Intersection Types end

// Union Types start
// 「いずれかの型」を表現するもの
let value: boolean | number;
value = true;
value = 10;
// value = "hello";

let arrayUni: (string | number)[];
arrayUni = [0, 1, 2, "hello"];
// Union Types end

// literal + union start
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";
// company = "Apple"
// literal + union end

// typeof start
let msg1: string = "Hi";
let msg2: typeof msg1;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "bic cat" };
// typeof end

// keyof start
type KEYS = {
  primary: string;
  secondary: string;
};
// primaryとsecondaryしか受け付けなくなる
let key: keyof KEYS;
key = "primary";
// key = "test";
// keyof end

// typeof + keyof start
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";
// keySports = "test";
// typeof + keyof end

// enum start
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};
// enum end

// 型の互換性 start
// comp1よりcomp2のほうが抽象度が高い
const comp1 = "test";
let comp2: string = comp1;
// comp4よりcomp3のほうが抽象度が高い
const comp3: string = "test";
// let comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};
// funcComp1 = funcComp2
// funcComp2 = funcComp1;
// 型の互換性 end

// Generics ジェネリックス start
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" };
const gen2: GEN<number> = { item: 12 };
// Generics ジェネリックス end
interface GEN1<T = string> {
  item: T;
}
const gen1: GEN1 = { item: "hello" };
interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };
const gen5: GEN2<number> = { item: 12 };
// const gen6: GEN2<boolean> = { item: true };
function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);
function funcGen1<T extends string | null>(props: T) {
  return { item: props };
}
const gen8 = funcGen1("hello");
// const gen9 = funcGen1(12);

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen9 = funcGen3({ price: 12 });
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

// FC = functional component
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
};

export default App;
