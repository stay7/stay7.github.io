---
title: NestJS + TypeORM에 snake case 적용
date: 2021-05-27
path: typeorm-snake-case
subtitle: TypeORM에 snake case 적용하기
tags: ["NestJS", "TypeORM"]
---

NestJS가 `TypeORM`을 추천하기도하고, 이제 `Sequelize`와 `TypeORM` github star가 비슷할 정도로 `TypeORM`이 인기가 많아진 것 같아서 사용해보았다.

![image](https://user-images.githubusercontent.com/62214433/119697769-85d51d00-be8b-11eb-83e7-245119d537b7.png)

![image](https://user-images.githubusercontent.com/62214433/119697748-7eae0f00-be8b-11eb-9d0b-a74eaf673701.png)

## 문제 

NestJS 어플리케이션과 Database의 naming convention이 서로 다르다.

- 타입스크립트 naming convention은 camel case.

- Database의 naming conevention은 snake case.


`Sequelize`에서는 `{underscored: true}` 옵션으로 해결할 수 있었지만, `TypeORM`은 공식적으로 지원하는 것은 없었다.

```typescript
@Entity()
export class Group {

  @PrimaryGeneratedColumn()
  groupId: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
```
`createdAt`과 같은 camel case를 database에는 snake case로 저장하고 싶다.


## 해결 방법

[typeorm-naming-strategies](https://github.com/tonivj5/typeorm-naming-strategies#readme)를 사용하면 해결할 수 있다.


프로젝트 루트에 `ormconfig.js`를 생성하고 기존의 database config를 모두 옮긴다.

```javascript
//ormconfig.js
const SnakeNamingStrategy =
  require('typeorm-naming-strategies').SnakeNamingStrategy;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: ['./dist/**/*.entity{.ts,.js}'], 
  namingStrategy: new SnakeNamingStrategy(),
};
```

```typescript
//app.module.ts
@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

