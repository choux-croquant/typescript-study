// 기초 interface생성, interface에는 구체적인 값을 할당할 수 없다.
// 객체의 type-check를 위해 주로 사용되며 객체를 다루는 경우 type보다 interface를 자주 사용한다.
interface Person {
  name: string
  age: number

  greet(phrase: string): void;
}

let user1: Person

user1 = {
  name: 'choux',
  age: 26,
  greet(phrase: string) {
    console.log(phrase + this.name)
  }
}


// readonly속성을 통해 객체의 요소가 단 한번만 설정되어야 하며 읽기 전용으로 사용되어야 함을 선언할 수 있다.
interface Greetable {
  readonly name: string
  greet(phrase: string): void
}


// interface와 typa Alias의 차이는? interface는 중복 선언하여 인터페이스를 병합할 수 있다.
// 또한 implements키워드를 통해 class구현 시 여러 interface를 한 번에 정의할 수 있다.
interface testPerson {
  name: string
}

interface testPerson {
  age: number
}

let testUser: testPerson
// testPerson interface가 병합되어 name만 설정할 경우 에러발생
// testUser = {
//   name: 'choux'
// }

interface Named {
  readonly name: string
}

// 동시에 여러 개의 interface를 구현하고 있는지 체크하는 예시
class Person implements Greetable, Named {
  name: string;
  age = 26

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string): void {
    console.log(phrase + this.name)
  }
}


// interface도 extends키워드를 통해 상속을 통한 확장을 할 수 있다. class로 구현 시 상속받은 interface의 속성들까지 필수로 구현해주어야 한다.
// interface는 class와 달리 상속을 여러 개 받을 수 있다.
interface Item {
  itemName: string
  itemPrice: number
}

interface Rated {
  rate: number
}

interface RatedItem extends Item, Rated {
  recommended: boolean
}
