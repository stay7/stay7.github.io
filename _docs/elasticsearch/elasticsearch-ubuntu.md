---
title: "Ubuntu에 elasticsearch 배포"
date: 2020-07-29 23:29:00 +0900
layout: post
toc: true
tags:
  - Elasticsearch
---

### 설정 환경

| Ubuntu | vCPU | Memory |
| :----: | :--: | :----: |
| 18.04  |  2   |  4 GB  |

<br><br>

### Elasticsearch 실행

```shell
# run elasticsearch
$ $ES_HOME/bin/elasticsearch

# run as a daemon
$ $ES_HOME/bin/elasticsearch -d
```

default로 실행하면 `localhost`에서는 정상 작동하지만, remote client에서 response를 받을 수 없었다.

default configure로 실행하면 dev 환경으로 실행된다.
<br><br>

### Error

> max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144] > `$ sysctl -w vm.max_map_count=262144` 으로 에러 해결 가능

<br><br>

### Configure

```yml
# $ES_HOME/config/elasticsearch.yml
# 좀 더 자세한 configure 공부 필요

network.host: 0.0.0.0
http.port: 9200

discovery.seed_hosts: []
discovery.zen.minimum_master_nodes: 1
cluster.initial_master_nodes: ["ip-172-31-3-121"]
```

<br><br>

### Shutdown elasticsearch

```shell
# pid를 찾는다.
$ ps -ef | grep elasticsearch

# kill process
$ kill -2 <pid>

# delete log files
$ rm $ES_HOME/logs/*
```
