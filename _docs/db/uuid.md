---
title: UUID
tags:
  - database
  - sequelize
date: 2020-08-04 01:13:00 +0900
description: UUID1, UUID4의 차이
---

> [UUID1 vs UUID4](https://www.sohamkamani.com/blog/2016/10/05/uuid1-vs-uuid4/) 를 참고하여 작성하였습니다.

sequelize를 통해서 PostgreSQL의 id를 정하려고 타입을 찾던 중 UUID를 알게되었다. sequelize에는 UUID 타입에 defaultValue로 UUID1, UUID4를 선택할 수 있었다. 차이가 궁금해서 찾아보고 정리하게 되었다.

## UUID

**UUID** : **U**niversally **U**nique **Id**entifier
128 비트, 32개의 16진수로 구성되어있다. 32개의 문자 사이에 4개의 '-' 을 섞어서 표현한다.

> ex) 550e8400-e29b-41d4-a716-446655440000

- 버전 1 (MAC 주소)
- 버전 2 (DCE 보안)
- 버전 3 (MD5 해시)
- 버전 4 (랜덤)
- 버전 5 (SHA-1 해시)

### UUID1

- MAC 주소
- 현재 datetime
- 랜덤 bits

를 결합해서 생성된다. UUID1으로 생성된 UUID가 같으려면 같은 컴퓨터가 같은 시간에 만들고, 동시에 랜덤 비트까지 같아야 완전한 중복된 UUID가 생성될 수 있다. (확률적으로 불가능하다)

하지만 UUID1는 익명성에서 단점이 있다. UUID1으로 UUID를 생성해보면 아래와 같이 처음부분만 다르고 나머지는 같은것을 볼 수 있다. 같은 컴퓨터에서 짧은 시간에 여러번 생성한 것이다보니 상당히 비슷하다.

1. 6b187f80-d5a1-11ea-850c-8d31df36955c
2. 73c2f930-d5a1-11ea-850c-8d31df36955c
3. 76b49ae0-d5a1-11ea-850c-8d31df36955c

UUID1은 MAC 주소를 사용하여 구성하다보니, 같은 컴퓨터에서 여러번 생성시 상당 부분이 중복되는 것을 찾을 수 있다. 누군가가 생성시간, 생성 장소(MAC 주소)를 식별할 수 있다는 단점이 있다.

### UUID4

UUID4는 랜덤으로 생성된다. UUID는 128개의 비트로 구성되어있으니 중복될 확률은 2^128 이다. (십진수로는 약 3.4\* 10^38) 세계 모든 어플리케이션이 매 초마다 조 단위의 UUID를 생성하는것을 몇 년동안해도 중복되기 힘들다. 확률적으로 가능성이 없다.

UUID4로 UUID를 생성해보았다.

1. 97e22939-09de-4880-a7ef-b5c94d6ebcfe
2. 81a9c767-253a-427b-bbec-0b0b1ce536ef
3. 3f8a5588-d5d8-409f-b705-0d0af41943d3

UUID1으로 생성된 UUID와는 다르게 UUID4로 생성된 UUID는 전혀 공통점을 찾을 수 없다.
