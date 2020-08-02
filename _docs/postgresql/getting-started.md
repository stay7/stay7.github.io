---
title: 'PostgreSQL Getting Started'
date: 2020-07-26 22:21:00 +0900
layout: post
toc: true
tags:
  - postgreSQL
description: Getting started with `PostgreSQL`
---

### [Data types]

PostgreSQL의 data types

|              name (alias)              |                                      description |
| :------------------------------------: | -----------------------------------------------: |
|                 bigint                 |                            signed 8-byte integer |
|             boolean (bool)             |                                  logical Boolean |
|            character (char)            |                        고정된 길이의 char string |
|                  date                  |                                    calendar date |
|       double precision (float8)        |        double precision floating point (8바이트) |
|          integer (int, int4)           |                          signed 4 바이트 integer |
|                  json                  |                              textual JSON 데이터 |
|           numeric (decimal)            |               precision을 지정할 수 있는 numeric |
|             real (float4)              | signle precision floating-point number (4바이트) |
|            smallint (int2)             |                          signed two-byte integer |
|         smallserial (serial2)          |                  autoincrementing 2-byte integer |
|            serial (serial4)            |                     autoincrement 4-byte integer |
|                  text                  |                    다양한 길이의 charater string |
|                  time                  |                     time of day (time zone 없음) |
|      time with time zone (timetz)      |                     time of day (time zone 포함) |
|               timestamp                |                   date and time (time zone 없음) |
| timestamp with time zone (timestamptz) |                   date and time (time zone 포함) |
|                  uuid                  |                    universally unique identifier |

전체 타입은 [여기](https://www.postgresql.org/docs/12/datatype.html)에서 확인하면 된다.

<br>
<hr>
<br>

### [Database 생성]

```shell
# mydb라는 database 생성
$ createdb mydb
```

정상적으로 생성되면 출력이 없다.

#### 자주 나타나는 오류

```shell
# PostgreSQL이 정상적으로 설치 되지 않으면
createdb : command not found

# Postgre server가 설치되지 않았거나 실행되지 않음.
createdb: could not connect to database postgres: could not connect to server: No such file or directory
Is the server running locally and accepting
connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
```

<br>
<hr>
<br>

### [Database 제거]

```shell
# 생성된 mydb 제거
$ dropdb mydb
```

PostgreSQL의 user는 OS의 user와 분리되어있다. DB에 연결할 때 PostgreSQL의 user name을 선택해서 연결할 수 있다. 선택하지 않으면 OS와 같은 name으로 연결된다. `-U` 옵션을 이용해서 PostgreSQL의 user name을 선택할 수 있다.

<br>
<hr>
<br>

### [Database access]

- `psql`이라는 PostgreSQL-cli를 사용
- `pgAdmin`과 같은 GUI tool을 사용

크게 두 가지 방법이 있다.

```shell
# mydb에 접근
$ psql mydb
psql (12.3)
Type "help" for help.

mydb=>
```

- `mydb =>` database의 superuser가 아니라서 access control의 제한이 있는 경우

- `mydb =#` database의 superuser

```shell
# SQL command의 syntax를 볼 수 있음
mydb=> \h

# 접속 종료
mydb=> \q
```

- select database

```shell
postgres=# \c table_name
```

- show tables

```shell
postgres=# \dt
```
