// JS의 데이터는 아래의 타입들이 존재
// 원시타입 : number, string, boolean, null, undefined, symbol ...
// 아래는 모두 객체
// 참조타입 : arrays, objects
// 함수타입 :function

// 원시타입 in TS
let age: number;
age = 12;

let userName: string;
userName = 'Choux';

let isInstructor: boolean;
isInstructor = true;


// 참조타입 정의 in TS, 배열의 요소나 객체의 value타입을 지정할 수 있다.
let hobbies: string[];
hobbies = ['sports', 'cooking'];

let person: {name: string, age: number};
person = {
  name: 'Choux',
  age: 26
}
// 아래와 같이 다른 value타입이면 에러
// person = {
//   isEmployee: true
// }

// 다음과 같이 특정 형태의 객체를 포함하는 배열이라고 지정할 수도 있다.
let people: {name: string, age: number}[];
people = [person, person, person]


// 타입 추론, TS는 따로 타입지정을 하지 않아도 할당된 값의 자료형을 그 변수의 타입으로 추론한다.
let course = 'React-TS'; // 문자열로 추론
course = 123 // 에러!


// Union type, 두 개 이상의 타입을 지정할 수 있도록 하는 옵션
let somevalue: string | number;
let somevalue2: string | number | boolean;
let somevalue3: string | string[] | {};


// Type Aliases, 특정 형태의 타입을 가지는 요소가 반복될 때, 직접 Base타입을 정의하고 재활용하는 방법
type Person = {
  name: string;
  age: number;
}
// Person이라는 타입을 정의하고 활용
let person2: Person;
let people2: Person[];


// Functions & Types, 함수의 반환값의 타입을 지정할 수 있다. 지정하지 않을 경우 반환값에서 자동으로 타입을 추론한다.
function add(a: number, b: number): number {
  return a + b;
}
// 반환값이 없는 경우, void로 지정 가능
function consoleprint(value: any): void {
  console.log(value)
}


// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// 함수에서 파라미터에 any타입을 지정한 순간, demoArray의 값이 number인지 혹은 다른 값인지 TS는 알 수 없다.
// 즉 반환된 updateArray에서 타입에 관련된 메서드를 실행하거나 어떤 작업을 하려고 할 때 TS의 도움을 받을 수 없게된다.
// 이러한 문제를 해결하기 위한 것이 Generic이다!

// 다음과 같이 작성할 경우 TS에 array내부의 요소와 value가 같은 타입을 가진다는 정보를 제공할 수 있다.
function insertAtBeginning2<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
