# Advance type & Generics에 대한 추가적인 내용

### Utility Types
공식문서 : https://www.typescriptlang.org/docs/handbook/utility-types.html

타입스크립트에서 기본으로 제공하는 전역타입, 타입 변환을 쉽게 할 수 있도록 지원한다. ex)
+ Partial<T> : T에 속하는 프로퍼티들을 선택적으로 만든다(T의 subsets). 이를 활용하여 특정 속성한 업데이트 하는 등의 활용을 할 수 있다.
+ ReadOnly<T> : T의 모든 프로퍼티를 읽기 전용으로 설정한 새로운 타입을 구성한다. > 재할당 불가
...
