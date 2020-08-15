---
title: 'OAuth 2.0'
date: 2020-08-15 00:00:00 +0900
layout: post
toc: true
tags:
  - OAuth2.0
---

OAuth 2.0

OAuth 2.0의 인증방식

1. Authroization Code
2. Implicit
3. Resource Owner Password Credentials
4. Client Credentials

모두 access token을 받는 작업
1번과 2번의 차이는 응답이 code가 오냐 token이 오는가이다.

```json
Object {
  "error": null,
  "errorCode": null,
  "params": Object {
    "authuser": "0",
    "code": "4/3AHZn5FZ0dasE4yXBJdfEVtQbxTYhPc7ZyEzQEAlGTt5C_LuaRqvW-28-JdK-JYz5pfgbu4PpHvE7Xm9_fRe0FY",
    "prompt": "none",
    "scope": "email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    "state": "3ERPGi5237",
  },
  "type": "success",
  "url": "exp://172.30.1.8:19000/--/expo-auth-session?state=3ERPGi5237&code=4%2F3AHZn5FZ0dasE4yXBJdfEVtQbxTYhPc7ZyEzQEAlGTt5C_LuaRqvW-28-JdK-JYz5pfgbu4PpHvE7Xm9_fRe0FY&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=none",
}
```

```json
Object {
  "error": null,
  "errorCode": null,
  "params": Object {
    "access_token": "ya29.a0AfH6SMDaNM-NpS0afa4QJQbgThtuWNOSJWOr2T8JGNdedJMeDHF88wXkNTEP-L-KhNmqd194LQdAYDwM-WlNP5xBsUgA_Gp3dzrsIGM-XOFQwCEouAz1vxTeIAj6N91HKSR7kBPh21GqRywT30YXv2TUSvoKjp9f7C0",
    "authuser": "0",
    "exp://172.30.1.8:19000/--/expo-auth-session": "",
    "expires_in": "3599",
    "prompt": "none",
    "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
    "state": "uy81vAzPCv",
    "token_type": "Bearer",
  },
  "type": "success",
  "url": "exp://172.30.1.8:19000/--/expo-auth-session#state=uy81vAzPCv&access_token=ya29.a0AfH6SMDaNM-NpS0afa4QJQbgThtuWNOSJWOr2T8JGNdedJMeDHF88wXkNTEP-L-KhNmqd194LQdAYDwM-WlNP5xBsUgA_Gp3dzrsIGM-XOFQwCEouAz1vxTeIAj6N91HKSR7kBPh21GqRywT30YXv2TUSvoKjp9f7C0&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20openid%20https://www.googleapis.com/auth/userinfo.email&authuser=0&prompt=none",
}
```

## Authroization Code

code를 받아서 resource의 access token을 받는다.

## Implicit Grant

code의 교환없이 바로 access token을 받는다.

## Resource Owner Password Credentials

암호를 사용하여 access token을 받는다.

## Client Credentials

컨텍스트 외부에서 access token을 받는다.
