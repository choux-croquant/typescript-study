# TypeScript Decorator
타입스크립트에서 데코레이터 패턴을 구현하는 방식. 클래스와 클래스 멤버인 메서드, 파라미터 등에 데코레이터를 추가하는 것으로 기존 상태에서 요소를 확장할 수 있다(클래스 래핑).
확장을 통해 기본 코드의 수정없이 특정 클래스의 선언이나 메서드의 실행 전후로 정의한 기능을 수행하거나 프로퍼티를 바꿀 수 있다.

참고 문서
+ https://typescript-kr.github.io/pages/decorators.html
+ https://yamoo9.gitbook.io/typescript/decorator/classes

함수의 형태로 데코레이터 함수를 선언하며 확장하고 싶은 요소 바로 위에 @와 함께 선언하는 것으로 데코레이터를 적용할 수 있다.

```typescript
function sealed(target) {
    // 데코레이터 함수의 실행 내용
}
```

데코레이터에 특정한 값을 전달하고 사용하려면 데코레이터 팩토리를 작성할 수 있다.
데코레이터 팩토리는 반환값으로 함수를 가지며 이 함수는 데코레이터가 런타임에 호출할 표현식이다.

```typescript
function color(value: string) { // 데코레이터 팩토리
    return function (target) { // 데코레이터 함수 반환
        // 데코레이터의 'target'에 'value' 변수를 가지고 작업을 수행할 수 있다..
    }
}
```

### 데코레이터의 종류
데코레이터가 어느 요소 앞에 선언되느냐에 따라서 다음과 같이 구분할 수 있다.
+ Class Decorator : 클래스 선언 전에 선언되는 데코레이터, 클래스 constructor에 적용되며 constructor가 유일한 인자. 데코레이터를 통해 클래스의 프로퍼티나 메서드를 재정의 할 수 있으며 이 때 재정의한 프로퍼티와 메서드는 사용자 정의 프로퍼티와 메서드보다 우선 순위가 높다.
+ Method Decorator : 메서드 선언 전에 선언되는 데코레이터, 메서드의 프로퍼티 설명자(Property Descriptor)를 타겟으로 하여 메서드를 재정의, 관찰, 수정할 수 있다. 메서드 데코레이터는 컨스트럭터 또는 프로토타입, 멤버의 이름, 멤버의 프로퍼티 설명자를 인자로 정의할 수 있다.

```typescript
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) { // 3가지 인수 확인
        descriptor.enumerable = value;
    };
}
```

+ Accessor Decorator : 접근자 선언 전에 선언되는 데코레이터, 접근자의 프로퍼티 설명자(Property Descriptor)를 타겟으로 하여 접근자를 정의, 관찰, 수정할 수 있다. 메서드 데코레이터와 동일한 인자들로 정의할 수 있다.
+ Property Decorator : 프로퍼티 선언 전에 선언되는 데코레이터, 컨스트럭터 또는 프로토타입과 멤버 이름 2가지 인자를 가지고 정의할 수 있다. 인스턴스 프로퍼티의 이니셜라이저를 관찰하거나 수정할 수 있는 방법이 현재 없기 때문에 재정의나 수정 등의 작업은 할 수 없고,프로퍼티가 클래스에 선언되었는지 관찰하는 용도로 사용할 수 있다.
+ Parameter Decorator : 매개변수의 선언 전에 선언되는 데코레이터, 컨스트럭터 또는 프로토타입, 멤버의 이름, 해당 매개변수의 색인(ordinal index)를 통해 정의할 수 있다.