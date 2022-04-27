# Class & Interface
Typescript에서 사용할 수 있는 class와 interface키워드에 대한 내용을 정리합니다.

### 기본적인 클래스
classes.ts에 예시와 함께 작성

### 추상 클래스
abstract키워드를 class앞에 선언하는 것으로 추상 클래스를 정의할 수 있다. 추상 클래스는 구체적인 body가 하나 이상 구현되지 않은(abstract키워드를 포함한 요소가 하나 이상 있는), 클래스의 특징들을 표현하는 추상적인 클래스로 인스턴스를 생성하지 않으며 반드시 추상 클래스를 상속받은 하위 클래스에서 body를 구현해 주어야한다.
```typescript
// 추상 클래스
abstract class Project {

  public project_name:string|null = null;
  private budget:number = 2000000000; // 예산

  // 추상 메서드 정의
  public abstract changeProjectName(name:string): void;

  // 실제 메서드 정의
  public calcBudget(): number {
    return this.budget * 2;
  }

}

// 추상 클래스의 상속
class WebProject extends Project {

  // 추상 클래스에 정의된 추상 메서드 구현
  changeProjectName(name:string): void {
    this.project_name = name;
  }

}
```


### 싱글턴
constructor앞에 private접근자를 선언하는 것으로 인스턴스를 한 번만 생성하도록 하는 싱글턴 패턴을 구현할 수 있다. 인스턴스를 new키워드로 생성하는 대신 클래스 내부에 정적 메서드로 getInstance()를 정의하고 이 메서드를 호출하는 것으로 인스턴스를 생성할 수 있다. 패턴의 구현은 getInstance내부에서 처리.
```typescript
class OnlyOne {

  private static instance: OnlyOne;

  public name:string;

  // new 클래스 구문 사용 제한을 목적으로
  // constructor() 함수 앞에 private 접근 제어자 추가
  private constructor(name:string) {
    this.name = name;
  }

  // 오직 getInstance() 스태틱 메서드를 통해서만
  // 단 하나의 객체를 생성할 수 있습니다.
  public static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('싱글턴 객체');
    }
    return OnlyOne.instance;
  }

}

// 인스턴스 생성하기
let bad_case = new OnlyOne('오류 발생');
let good_case = OnlyOne.getInstance();
