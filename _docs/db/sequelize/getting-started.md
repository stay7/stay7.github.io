---
title: 'Sequelize Getting Started'
date: 2020-07-27 00:46:00 +0900
layout: post
tags:
  - Sequelize
description: Getting started with `Sequelize`
---

```shell
#install
npm install --save sequelize

# One of the following:
$ npm install --save pg pg-hstore # Postgres
```

### Database 연결

DB에 연결하려면 Sequelize instance를 생성해야한다.

- connection parameter들
- connection URI

둘 중 하나를 생성자에 전달해주어야한다.

```javascript
const { Sequelize } = require('sequelize')

// connection URI 전달
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

// connection parameter 전달
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
})
```

더 많은 option들은 [API Reference](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor) 참고

### 연결 확인

`.authenticate()` 함수를 통해서 connection이 정상적으로 연결되었는지 확인할 수 있다.

```javascript
try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
```

### 연결 종료

`sequelize.close()` 를 호출하면 종료할 수 있다. (async 함수라서 Promise를 return한다)

### Logging

sequelize는 모든 SQL 쿼리를 수행할 때마다 콘솔에 log를 출력한다. `options.logging` 옵션을 통해서 logging을 설정할 수 있다.

```javascript
const sequelize = new Sequelize('sqlite::memory:', {
  // Choose one of the logging options
  logging: console.log, // Default, displays the first parameter of the log function call
  logging: (...msg) => console.log(msg), // Displays all log function call parameters
  logging: false, // Disables logging
  logging: (msg) => logger.debug(msg), // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
  logging: logger.debug.bind(logger), // Alternative way to use custom logger, displays all messages
})
```
