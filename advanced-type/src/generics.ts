// Generic type extends - extends키워드를 통해 추상화된 타입 T, U등에 추가적인 타입 정보를 추가할 수 있다.
// 아래의 경우 객체를 병합하는 메서드를 표한것으로 T, U가 최소한 객체여야 함을 보장하고 있다.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

// 기본타입 이외에도 유니언타입, type alias, interface등을 추가할 수 있다.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));


// keyof키워드를 통해 확장하는 것으로 특정 Generic이 다른 타입의 key임을 명시할 수 있다.
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}
// { name: 'Max' }가 T타입으로 정의되고 U는 'name'이라는 문자열에 해당하는 T의 key값을 가진다.
extractAndConvert({ name: 'Max' }, 'name');


// Generic타입을 활용하여 클래스를 생성할 수도 있다.
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}
// T를 string타입으로 고정
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
// T를 number타입으로 고정
const numberStorage = new DataStorage<number>();
