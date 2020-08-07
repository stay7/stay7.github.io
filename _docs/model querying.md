# Model Querying

sequelize로 production을 위한 query들을 수행할때는 [Transaction 가이드](https://sequelize.org/master/manual/transactions.html)를 잘 숙지하여야한다.



### INSERT

```javascript
const user = await User.create({
  username: 'alice123',
  isAdmin: true
}, { fields: ['username'] });

// isAdmin 의 default가 false인 경우로 가정
console.log(user.username); // 'alice123'
console.log(user.isAdmin); // false
```

`Model.create()` 에서 특정 field 만 database에 적용하는 것도 가능하다



### SELECT



- 테이블의 모든 것을 read

```javascript
const users = await User.findAll();
```

```sql
SELECT * FROM ...
```



- 특정 column만 가져오기

```javascript
Model.findAll({
  attributes: ['foo', 'bar']
});
```

```sql
SELECT foo, bar FROM ...
```



- 특정 column을 rename

```javascript
Model.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux']
});
```

```sql
SELECT foo, bar AS baz, qux FROM ...
```



- count

```javascript
Model.findAll({
	attributes: [
    'id', 'foo', 'bar', 'hats', //모든 column
    [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
  ]
});

// 모든 column이 다 필요할 경우 간단하게 쓸 수 있다.
// 나중에 column을 추가 제거해도 에러가 발생하지 않기에 더 안전하다
Model.findAll({
  attributes: {
    include: [
      [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
    ]
  }
});
```

```sql
SELECT id, foo, bar, hats, COUNT(hats) AS n_hats FROM ...
```



#### WHERE 적용하기

`where` 는 query를 필터링할 때 주로 사용한다. `Op` 로부터 다양한 연산자들을  `where` 절에서 사용할 수 있다.  



### The basics

- single check

```javascript
Post.findAll({
  where: {
    authorId: 2
  }
});
```

위의 코드는 아래의 Sql문과 같다

```sql
SELECT * FROM post WHERE authorId = 2
```

`Op` 에서 연산자를 가져와서 전달하지 않으면, Sequelize는 `=` (equlity) 로 가정한다.



```javascript
//위와 같은 결과
const { Op } = require("sequelize");
Post.findAll({
  where: {
    authorId: {
      [Op.eq]: 2
    }
  }
})
```





- Multiple check

```js
Post.findAll({
  where: {
    authorId: 12
    status: 'active'
  }
});
```

```sql
SELECT * FROM post WHERE authorId = 12 AND status = 'active';
```



```javascript
const { Op } = require("sequelize");

Post.findAll({
  where: {
    [Op.and]: [
      { authorId: 12 },
      { status: 'active' }
    ]
  }
});
```



[Model Querying -Basics](https://sequelize.org/master/manual/model-querying-basics.html)

