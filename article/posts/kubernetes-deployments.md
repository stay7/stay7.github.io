---
title: 쿠버네티스 배포 전략
date: 2022-10-09
path: 쿠버네티스-배포-전략
tags: ["kubernetes"]
---

# 쿠버네티스 배포 전략

### `maxSurge`,  `maxUnavailble`

`.spec.strategy.rollingUpdate.maxSurge`

한 번에 업데이트할 최대 레플리카의 수를 제한한다

- default 값은 25% (퍼센트에서 올림해서 파드 수를 계산한다)



`spec.strategy.rollingUpdate.maxUnavailable`

최대 사용 불가능한 레플리카의 수를 제한한다

- default 값은 25% (퍼센트에서 내림해서 파드 수를 계산한다)

maxSurge가 0이면 maxUnavailable은 0이 될 수 없고, maxUnavailable이 0이면 maxSurge도 0이 될 수 없다

## Rolling 배포

쿠버네티스의 기본 배포 전략. 업데이트 프로세스 중 down time이 없음을 보장



`maxSurge` 를 30%로 설정했다면

-> 롤링 업데이트에 레플리카 셋은 전체 파드의 수는 130%를 넘지 않는다.

`maxUnavailable` 30%으로 설정했다면

-> 롤링 업데이트 시작하면 레플리카 셋의 70%의 pod가 scaled down될 수 있다.



### 주의사항

롤링 배포를 하면 두 가지 문제가 있을 수 있다.

1. 클라이언트와 연결이 끊어질 수 있다

   -> readiness probe, preStop 훅으로 해결 가능하다

   readiness probe로 파드의 준비 여부를 확인하고, preStop 훅으로 NGINX를 gracefully하게 종료

2. 두 가지 버전이 동시에 존재한다

   -> DB 스키마가 두 가지 버전을 동시에 지원해야한다.

## Recreate

롤링 업데이트는 downtime이 없다는 점에서 유용하지만, 업데이트 중 두 가지 버전이 함께 존재한다는 문제가 있다.

서비스 consumer의 하위 호환성을 유지해주지 못하는 경우에 문제가 발생할 수 있다.



`maxUnavailable`을 선언된 replica 수로 설정하면 실행 중인 모든 컨테이너를 내린다. 현재 버전의 컨테이너가 모두 내려가면, 새로운 컨테이너를 동시에 띄운다. (이 사이에 요청을 받을 수 있는 컨테이너가 없기에 downtime이 존재한다)

**서비스가 하나의 버전만 제공하는걸 보장한다**

## Blue-green 배포

downtime과 리스크를 최소화 하는 배포 전략이다.

최신버전의 컨테이너들을 생성하는 동안, 현재 버전이 request를 처리하고 있는다. 

새로운 버전의 pod들이 request를 처리할 준비가 되면 트래픽을 새로운 버전의 replica로 이전한다. 

-> 쿠버네티스의 서비스 셀렉터를 새로운 컨테이너들로 변경한다



- 요청은 하나의 버전만 처리한다
- blue, green 컨테이너가 모두 실행되야하므로 **두 배의 리소스가 필요하다**
- rollback에 유리하다

## Canary

적은 수의 인스턴스들을 새로운 버전으로 교체하는 방법으로 배포하는 전략

적은 수의 consumer들만 새로운 버전에 요청할 수 있도록 하여 리스크를 줄인다. 새로운 버전에 만족스러운 결과를 얻었다면, 전체를 새로운 버전으로 교체한다. 



새로운 레플리카 셋이 잘 동작한다면, 새로운 레플리카 셋을 올리고, 기존의 레플리카 셋을 down 시킨다

(쿠버네티스에서 두 가지 레플리카 셋을 두고, label을 사용하여 트래픽을 조정한다)

[Managing Resources | Kubernetes](https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments)

## 요약

| 배포 전략  | downtime | 버전 |                    |
| ---------- | -------- | ---- | ------------------ |
| Rolling    | X        | 2    |                    |
| Recreate   | O        | 1    |                    |
| Blue green | X        | 2    | near zero-downtime |
| Canary     | X        | 2    |                    |

## 출처

https://kubernetes.io/docs/concepts/workloads/controllers/deployment/

Kubernetes Patterns

쿠버네티스 모범사례
