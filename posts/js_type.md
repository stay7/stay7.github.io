---
title: 자바스크립트 Type과 연산자
date: 2020-11-30
path: js-type
---

자바스크립트 데이터 타입 :

- 기본 타입 - Number - String - Boolean - undefined - null
- 참조 타입
  - Object - Array - Function - Regex

### 기본타입

### Number

```javascript
var num = 5 / 2;
console.log(num); // 2.5
```

### String

자바스크립트에서 한 번 생성된 문자열은 읽기만 가능하지 수정은 불가능하다.

```javascript
let str = "test";
console.log(str[0], str[1], str[2], str[3]);

str[0] = "T";
console.log(str); // test
```

### null, undefined

두 값 모두 '비어있음' 을 나타낸다.

- undefined : 값이 할당되지 않은 변수는 **undefined 타입이면 값도 undefined.**

- null : 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용.

**null의 타입은 object**

```js
let nullVar = null;

console.log(typeof nullVar === null); //false
console.log(nullVar === null); // true
console.log(typeof nullVar); // object
```

### Object

`Number`, `String`, `Boolean`, `null`, `undefined` 를 제외한 모든 값은 객체

객체의 property를 `delete` 연산자를 이용해 즉시 삭제할 수 있다. 하지만 **객체 자체를 삭제하지는 못한다.**

호출방식

기본 타입인 경우에는 call by value.

참조 타입인 경우 call by reference.

### 프로토타입

자바스크립트의 모든 객체는 **자신의 부모 역할을 하는 객체(프로토타입 객체)와 연결**되어 있다.

```js
let obj = {
  name: "foo",
  age: 26,
};

obj.toString();
console.dir(obj);
```

`obj` 에는 `toString()` 이 없지만, 정상적으로 실행된다. -> `obj` 객체의 프로토타입에 toString() 메서드가 이미 정의 되어있기 때문이다.

객체의 프로토타입은 자바스크립트 룰에 따라 객체를 생성할 때 결정된다. -> (프로토타입 체이닝)

리터럴 방식으로 생성된 객체는 -> `Object.prototype` 객체가 프로토타입 객체가 된다.

생성할 때 결정된 프로토타입 객체를 다른 객체로 변경하는 것도 가능하다. -> (상속)

### 배열

자바스크립트 배열의 경우 값을 순차적으로 넣을 필요 없이 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.

배열의 요소는 자바스크립트 모든 데이터 타입의 값을 포함할 수 있다.

```javascript
let emptyArr = [];
console.log(emptyArr[0]); // undefined

emptyArr[3] = 100;
console.log(emptyArr); // [ <3 empty items>, 100 ]

emptyArr[7] = true;
console.log(emptyArr); // [ <3 empty items>, 100, <3 empty items>, true ]

console.log(emptyArr.length); // 8
```

**배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다.**

모든 배열은 length property를 가지고 있다.

배열의 length 프로퍼티는 명시적으로 값을 변경할 수 있다.

```javascript
let arr = [0, 1, 2];

arr.length = 5;
console.log(arr); // [ 0, 1, 2, <2 empty items> ]

arr.length = 2;
console.log(arr); // [0, 1]
console.log(arr[2]); // undefined
```

length 프로퍼티를 벗어나는 실제 값은 삭제된다.

배열 `push()` 프로퍼티의 동작이 인덱스 `length` 에 값을 추가하고, `length` 를 증가시키는 동작.

### 배열과 객체

배열은 객체다. 하지만 prototype이 다르기에 비슷하게 동작하지만 가지고 있는 프로퍼티가 다르다.

리터럴 객체의 prototype은 `Object.prototype` 이다. 반면 배열은 `Array.prototype` 이다. 따라서 배열에는 `push()` , `pop()` 과 같은 메소드를 가지고 있다. **`Array.prototype` 객체의 prototype은 `Object.prototype` 객체가 된다.**

배열에도 프로퍼티를 생성할 수 있다.

```javascript
let arr = ["zero", "one", "two"];
console.log(arr.length); // 3

arr.color = "blue";
arr.name = "number_array";
console.log(arr.length); // 3

arr[3] = "red";
console.log(arr.length); // 4
```

length는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.

하지만 for in 문으로 열거한다면 불필요한 프로퍼티가 출력될 수 있다.

delete로 배열 프로퍼티 삭제.

```javascript
let arr = ["zero", "one", "two", "three"];
delete arr[2];
console.log(arr); // undefined
console.log(arr.length); // 4
```

delete로 삭제하면 undefined로 설정할 뿐 배열의 element는 삭제되지 않는다.

배열은 splice() 를 메서드를 사용해서 삭제하면 배열의 element를 완전히 없앤다.

### 기본 타입과 표준 메서드

객체가 아닌 기본 타입의 경우에도 표준 메서드를 사용할 수 있다. 자바스크립트는 기본 타입의 값들에 대해서 객체 형태로 메서드를 호출할 경우, 메서드 처리를 위해 객체로 변환된 다음 메서드를 호출하고, 호출이 끝나면 다시 기본값으로 복귀시킨다.

### 연산자

**+** : 모두 숫자인 경우에 숫자. 나머지는 문자열 연결 연산

**typeof** : 타입을 문자열 형태로 출력. 함수는 `function`.

**==** : 비교하는 두 값의 타입이 다르면 변환 후 비교.

**===** : 비교하는 두 값의 타입이 다르면 타입을 변경하지 않고 비교.

**!!** : boolean 값으로 변환하는 것.
