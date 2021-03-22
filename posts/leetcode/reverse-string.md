---
title: reverse-setring
date: 2021-01-31
path: reverse-string
---

### 1
---

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        for i in range(len(s)//2):
            backIndex = len(s) - 1 - i
            front = s[i]
            s[i] = s[backIndex]
            s[backIndex] = front
```

|Runtime|Memory|
---|---
188 ms (91.03%) | 18.8 MB (18.82%)

오랜만에 풀어서 pythonic 하게 풀지 못했다. 

### 2
---

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        for i in range(len(s)//2):
            left, right = i, len(s) - 1 -i
            s[left], s[right] = s[right], s[left]

```

solution을 보고 더 깔끔하게 코드를 바꾸었다. 
위의 코드가 더 빠르다는게 신기하다.

### 3
---

|Runtime|Memory|
---|---
256 ms (10.71%) | 18.8 MB (10.38%)

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        s.reverse()
```

|Runtime|Memory|
---|---
296 ms (6.59%) |18.7 MB (42.29%)

python의 내장함수 reverse를 사용해서 실행해보았다. 메모리는 가장 적게 사용했지만, 속도가 가장 느리다.