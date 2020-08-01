# Model Basics

Model은 DB의 table을 추상적으로 표한현 것이다. Model은 Sequelize에 없어서는 안되는 존재다. Model은 DB의 테이블과 이름이 같으면 안된다. 보통 Model에서는 단수형 (User)으로 쓰고, 테이블의 이름은 복수(Users)로 사용한다.

### Model 정의

Model을 생성하는 방법은 크게 두 가지다.

- `sequelize.define(modelName, attributes, options)`
- `Model` 을 상속받고 `init(attributes, options)` 를 호출하는 것이다.

모델이 정의되면, `sequelize.models` 에서 모델 이름으로 사용가능하다

`sequelize.define` 은 내부적으로 `Model.init` 을 호출하기때문에 동일한 방법이다.

### 복수형 (pluralization)

Sequelize는 table 이름이 없다면 model 이름의 복수형을 테이블 이름으로 사용한다. 복수형으로의 변환은 `infection` 이라는 라이브러리로부터 변환되기에 불규칙적인 복수형(person -> people) 도 정확하게 변환된다.

Sequelize가 복수형으로 바꾸는 것을 끄고 싶다면 옵션에서 `freezeTableName: true` 를 추가하면 된다. Sequelize는 model 이름과 같은 이름으로 table을 찾는다. sequelize를 생성할 때 정의하면 global로 적용할 수 있다.

```javascript
// global로 설정
const sequelize = new Sequelize('sqlite::memory:', {
  define: {
    freezeTableName: true,
  },
})
```

### Model synchronization

Sequelize가 모델을 생성할 때, 실제로는 table이 없거나, table은 있지만 column이 다르다면 어떻게 할 것인가? Model synchronization이 나오게된 이유이다. Model은 `model.sync(options)` 를 호출하여 동기화 할 수 있다. `model.sync()` 이 호출되면 Sequelize는 SQL 쿼리를 실행하여 database의 table을 변경한다.

- `User.sync()` : 테이블이 존재하지 않으면, 테이블을 생성한다 (존재하면 아무것도 수행하지 않음)
- `User.sync({ force: true })` : 이미 테이블이 존재하면 drop하고 새로운 테이블을 생성한다.
- `User.sync({ alter: true })` : 현재 테이블의 column과 data type 등을 확인하고, 모델과 매칭하기위해 필요한 변화만 변경한다.

모든 Model을 synchronizing 하고 싶다면, sequelize에 sync를 호출하면된다. `sequelize.sync()`

### Dropping table

- `User.drop()` : model에 연관된 테이블을 drop
- `sequelize.drop()` : 모든 테이블을 drop

### Database safety check

`sync` 와 `drop` 은 파괴적인 작업이라 sequelize는 match 옵션을 통해서 추가적인 safety check를 할 수 있게 해준다.

```javascript
// DB 이름이 _test로 끝나는 경우에만 .sync()가 실행된다.
sequelize.sync({ force: true, match: /_test$/ })
```

### Timestamps

Sequelize는 모든 모델에 `DataTypes.DATE` 타입의 `createdAt` , `updatedAt` 필드를 추가한다. 이 필드들은 자동으로 sequelize에 의해서 추가, 업데이트가 된다. `createdAt` 은 생성 순간의 timestamp, `updatedAt` 은 최근 업데이트의 timestamp를 가진다.

이 작업은 Sequelize level에서 완료되기에 sequelize를 통하지 않은 SQL 쿼리는 `createdAt` , `updatedAt` 을 반영하지 않는다.

`timestamps: false` 옵션을 통해서 timestamps 를 하지 않을 수 있고, `createdAt` , `updatedAt` 둘 중 하나만 할 수도 있다.

### Column 선언

Column에 data type만 명시한다면 syntax를 간단하게 줄일 수 있다.

```javascript
sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
})

// 간단
sequelize.defind('User', { name: DataTypes.STRING })
```

### Default 값

sequelize에서 default값을 명시하지 않으면, column의 default 값은 `NULL` 이다.

```javascript
// default 값 명시
sequelize.defind('Foo', {
  bar: {
    type: DataTypes.STRING,
    defaultValue: 'John Doe',
  },
})
```

### Data Types

Model의 모든 column에는 data type이 있어야한다. sequelize built-in 데이터 타입을 사용하려면 `DataTypes` module의 import가 필요하다

```javascript
const { DataTypes } = require('sequelize')
```

특정 Database에서만 사용 가능한 타입들도 있으니, sequelize의 데이터타입은 [document](https://sequelize.org/master/manual/model-basics.html#data-types)에서 확인

### Column Options

column을 선언할 때, `type` 외에도 `primaryKey`, `unique`, `autoIncrement`, `allowNull` 등 [많은 option](https://sequelize.org/master/manual/model-basics.html#column-options)들이 있다.

### Model 클래스

Sequelize의 모델은 ES6 클래스로 되어있어서, 쉽게 custom instance나 method를 추가할 수 있다.

출처 : [Sequelize Documentation : Model-basics](https://sequelize.org/master/manual/model-basics.html)
