---
title: 'OAuth 2.0'
date: 2020-08-15 00:00:00 +0900
layout: post
toc: true
tags:
  - OAuth2.0
---

사이드 프로젝트로 모바일과 웹이 연동되는 서비스를 만드는 중에 유저의 회원가입과 인증이 필요하였습니다.

클라이언트로 모바일과 웹 어플리케이션. 유저의 resource를 저장하고있는 API 서버하나가 있습니다.

OAuth2를 활용하여 유저의 세션을 만드려다가 OAuth2 flow를 몰라서 코드 한 줄 적지 못하고 고생하여 정리하게 되었습니다.

## OAuth 2

어플리케이션이 HTTP 서비스에 제한된 권한만을 얻을 수 있게하는 권한인증 프레임워크.

OAuth 2를 통해서 **access token**을 발급받는 것이 목적입니다. access token을 가지고 있는 유저에게만 원하는 리소스를 제공하도록 합니다. 이제 **어떻게 access token을 발급해줄까?** 에 따라서 OAuth 2의 인증 방식이 나뉩니다. 그 중 **Authorization Code** 를 많이 사용합니다.

1. **Authorization Code**
2. Implicit
3. Resource Owner Password Credentials
4. Client Credentials

그래서 저는 **Authorization Code**를 사용하려고 합니다.

OAuth에 등장하는 역할들을 짚고 넘어가야합니다.

1. Resource Owner
2. Clinet
3. Resource Server
4. Authorization Server

이렇게 4가지의 주체가 나옵니다.

### Resource Owner

클라이언트들 사용하려고하는 유저입니다.

### Client

어플리케이션입니다. 저의 경우에는 모바일 어플리케이션, 웹 어플리케이션이죠.

### Resource Server

저의 API 서버입니다. 유저의 데이터를 여기에서 가지고있고, 클라이언트가 요청시 데이터를 전달하는 역할을 하는 서버이죠.

### Authorization Server

토큰을 발행해주는 서버입니다. 저는 구글에서 OAuth를 사용할 계획이라 구글의 Authorization 서버입니다.

## Authorization Code

Authorization Code는 이름에 Code가 있듯이 access token을 받기위해 Code가 필요한 인증방식입니다. 서버 사이드 어플리케이션에 최적화 되어있어서 가장 일반적으로 사용합니다.

https://stackoverflow.com/questions/33436767/why-i-shouldnt-keep-client-secret-in-mobile-app-in-oauth-2-0-authorization-cod

https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
