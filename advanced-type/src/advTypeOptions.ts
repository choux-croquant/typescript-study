type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection type - type alias로 정의한 타입들을 결합할 수 있다.
// union타입 교차 시 공통된 타입 추출
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number | boolean;
type Numeric = number | boolean | Admin;

type Universal = Combinable & Numeric;

let value: Universal = 123
// let value2: Universal = '123'  >  Error


// Discriminated Union - Union interface에서 타입가드를 보장하기 위한 장치
interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  // interface는 생성자로 활용할 수 없기 때문에 아래와 같이 instanceof등으로 확인할 수 없다.
  // if (animal instanceof Bird) {
  //   ...
  // }

  // interface에 리터럴로 된 type을 추가하는 것을 통해 아래와 같이 사용할 수 있다.
  let speed
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }
  console.log('AnimalSpeed: ' + speed)
}

// moveAnimal({type: 'bird', runningSpeed: 10}) > Error