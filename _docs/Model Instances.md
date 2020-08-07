# Model Instance

model은 ES6 클래스로 되어있다. model 객체는 DB 테이블의 하나의 row로 매핑된다. 

아래의 예시들은 User model을 이렇게 정의해두고 시작한다고 가정한다.

```javascript
const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

const User = sequelize.define("user",{
  name: DataTypes.Text,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DatTypes.INTEGER,
});

(async () => {
  await sequelize.sync({ force: true });
  //Code here
})();

```



### Creating an instance

모델이 클래스이지만, `new` 연산자를 이용하여 직접 객체를 만들 수도 있다. 대신 `new` 로 생성하면 `build` method를 사용해야한다.

```javascript
const jane = User.build({ name : "Jane" });
```

이렇게 생성한 객체는 DB와 전혀 통신하지 않는다. `bulid` method는 DB에 mapping 될 수 있는 객체를 만드는게 전부이다. DB에 실제로 저장하기 위해서는 `save` method 호출해야한다.

``` javascript
await jane.save();
```

`save()` 처럼 Sequelize의 대부분의 method는 asynchronous method이다.  `build()` 는 정말 몇 없는 asynchronous가 아닌 예외이다.



#### useful shortcut

Sequelize는 `build` 와 `save` 를 결합한 `create` method를 제공한다.

```javascript
const jane = await User.create({ name: "Jane" });
```



### Default value

`build` 로 생성된 객체는 default value를 갖도록 되어있다.

``` javascript
const jane = User.build({ name: "Jane" });
console.log(jane.favoriteColor); //"green"
```



### Updating an instance

instance의 field를 바꾸고 싶다면, 변경 후 `save` 를 호출하면 된다.

```javascript
const jane = await User.create({ name: 'Jane' });
jane.name = "Ada";
await jane.save();
```



### Deleting an instance

`destroy` 를  호호출해서 instance를 삭제할 수 있다.

``` javascript
await jane.destroy();
```



### Reloading an instance

`reload` 를 호출하면 instance를 DB에서 reload 할 수 있다.

```javascript
const jane = await User.create({ name: "Jane" });
jane.name = "Ada";
//여기서 save를 하지 않고 reload
await jane.reload();
```



### Saving only some fields

`save` 할 때 column의 이름을 전달해서, 특정 field만 저장할 수 있다.

```javascript
const jane = await User.create({ name: "Jane" });
// local object 변경
jane.name = "Jane II";
jane.favoriteColor = "blue";

// name의 변경만 저장
await jane.save({ fields: ['name'] });
```



### Change-awareness of save

`save` method는 실제로 변경된 field만 update하는데 최적화가 되어있다. 그래서 변경 없이 `save` 를 호출하면, Sequelize는 변경이 없다는 사실을 알고 아무것도 하지 않는다. (Promise를 return 하긴 하지만, 즉시 resolve 한다) 

성능의 향상을 위해서 변경된 field에만 `UPDATE` 를 보낸다.



### Incrementing and decrementing integer values

concurrency issue 없이 instance의 value를 증감하기 위해서, Sequelize는 `increment` 와 `decrement` method를 제공한다.

```javascript
const jane = await User.create({ name: "Jane", age: 100 });
// 2 증가, 1을 증가시킬 경우에는 by 생략 가능
const incrementResult = await jane.increment('age', {by: 2 });
```

- PostgreSQL에서는 `incrementResult` 에 update된 user가 return된다. `{returning: false}` 를 설정하면 `undefined` 가 return됨.

- 그 외의 DB에서는 `incrementResult`  는 `undefined` . updated instance가 필요하다면 `user.reload()` 를 호출해야한다

```javascript
const jane = await User.create({ name: "Jane", age: 100, cash: 5000});
await jane.increment({
  'age': 2,
  'cash': 100
})

// 같은 양을 증가시키려면 이렇게도 쓸 수 있다.
await jane.increment(['age', 'cash'], { by: 2 });
```



Decrementing도 같은 방법으로 가능하다

[sequelize document : model-instance](https://sequelize.org/master/manual/model-instances.html)

