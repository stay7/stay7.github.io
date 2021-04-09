---
title: 처음으로 오픈소스 컨트리뷰터가 된 후기
date: 2021-01-26
path: 처음으로-오픈소스-컨트리뷰터가-된-후기
subtitle: 세상에 약간 도움이 되었다
tags: ["daily"]
---

인생의 마지막 순간, "세상을 위해 단 하나라도 의미있는 일을 했는가?" 라고 고민을 했을 때 어쩌면 "네"라고 답할 수 있을 것 같다.


### 발단
최근 `nextjs` + `styled-components`로 반응형 웹을 만들었다. `styled-component`와 `react`는 잘 어울린다고 생각이 들었다. 개인 프로젝트에서 `react-native`에 `styled-components`를 도입해보았다.


사실 `react-native`에는 [`StyleSheet`](https://reactnative.dev/docs/stylesheet)라는 컴포넌트가 있다. `react-native`로 1년 정도 개발을 해오며 불편한 부분이 크게 없었다.  그래서 `styled-components`와 같은 `css` 라이브러리의 필요성을 느끼지 못했다. 하지만 `styled-components`를 잘 활용하면 중복되는 스타일 코드를 줄일 수 있을 것 같아서 도입해보았다.


### 전개

`react-native`에서는 터치가능한 View를 만들때 `TouchableOpacity`를 자주 사용한다. 개인적으로 `TouchableOpacity` 컴포넌트를 선호하지는 않는다. 그래서 `react-native`가 2020년 7월 0.63 버전에서 출시된 `Pressable` 컴포넌트를 사용해 터치가능한 View를 만들어 볼 계획이었다. 

### 위기

`styled-components/native`에 `Pressable`을 찾을 수 없다는 warning이 나타났다. warning을 무시하니 `Pressable`은 정상 작동 하는 것 같아서 `@types/styled-components-react-native`를 확인하니 `Pressable`을 찾을 수 없었다.

### 절정
한 줄의 코드를 넣었다. 
![한 줄의 코드](https://user-images.githubusercontent.com/62214433/105856701-dc8d3000-602c-11eb-9553-27b74cb5b645.png)


### 결말

내가 불편해서 수정한 단 한 줄의 코드이지만, 처음으로 나의 코드가 모르는 누군가에게 닿을 수 있다는 사실에 좋았다. 정말 우연히 특별한 노력 없이 추가할 수 있었지만, 아직 실력이 많이 부족하다. 그래도 처음 contribution을 시도해 본 경험이 좋은거 아닐까싶다. 

![image](https://user-images.githubusercontent.com/62214433/106006706-dc5a6680-60f8-11eb-9baf-c8f0ce34dbcc.png)

더 갖고싶다...


[나의 PR](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/50791)