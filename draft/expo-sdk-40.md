---
title: Expo SDK 40의 주요 변경사항
date: 2020-12-10
path: expo-40
subtitle: Expo SDK 40이 출시되었습니다. 주요 변경사항을 정리하였습니다.
---

Expo SDK 40이 출시되었습니다. [(Expo blog)](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33) 주요 변경사항을 정리하였습니다.

✅ ` @expo/vector-icons` 가 최신 `react-native-vector-icons@7.1.0` 을 반영하도록 업데이트 되었습니다.

    타입스크립트 type도 업데이트 되어 autocompletion과 validation이 지원됩니다.

✅ react-native-reanimated v2의 rc 버전을 SDK 40에서 사용할 수 있게 되었습니다

✅ 안드로이드에서 Background location이 opt-in permission이 되었습니다.

    안드로이드에서 백그라운드 위치가 필요하다면, `ACCESS_BACKGROUND_LOCATION` 을 `android.permissions` 에 추가하세요.

✅ SDK 40부터는 `@expo/dev-server` 가 사용됩니다.

    기존의 Expo CLI는 @react-native-community/cli를 통해서 Metro dev server를 동작하였습니다. 이제부터 JavaScript API를 사용하여 직접 Metro server를 실행할 수 있습니다.

- Publishing이 더 빨라졌습니다.
- Gitlab CI에서 expo publish를 할 때, 발생하던 ENOSPC 에러가 수정되었습니다.
- File extensions (`sourceExts`) 을 이제 `metro.config.js` 에서 customize 할 수 있습니다.
- expo publish를 development 서버가 동작중에 실행시켜도 development 서버를 종료시키지 않습니다.

- ✅ Expo client 와 standalone app이 Xcode 12로 빌드됩니다.

SDK 40에서 Expo 클라이언트 앱도 Xcode 12로 빌드되었습니다. Expo client와 standalone 앱에서 DateTimePicker UI가 달랐던 혼란도 이제 해결되었습니다.

- ✅ Bare workflow 앱에서도 Constants.manifest를 사용할 수 있습니다.

- ✅ standalone app에서 iOS의 entitlements를 제어할 수 있습니다.

앱의 entitlements를 `ios.entitlements` 를 사용하여 customize할 수 있습니다.

- ✅ expo-notification이 향상되었습니다.

- 이번 release에서 오랫동안 지속되어온 버그 두 가지가 수정되었습니다. 디바이스를 복원시켰을 때 push token이 그대로 남아있지 않습니다. 또한 notification response를 기다리는 것이 `useLastNotificationResponse` hook을 사용하는 방법으로 더욱 일관성있게 변경되었습니다.

## Apple 앱 스토어 privacy가 변경되었습니다.

2020년 12월 8일부터 앱 제출과 업데이트시를 위해서는 앱의 개인 정보 보호에 대한 정보 제공이 필요합니다.

애플의 질문에 Yes, we collect data from this app 를 선택하고 다음으로 이동합니다.

Device ID를 선택하세요

`expo-notifications` 를 사용한다면 Device ID를 선택하세요.

`expo-facebook` 을 사용한다면 Other Usage Data 를 선택하세요.

`expo-updates` 를 사용한다면 Crash Data 를 선택하세요.

Facebook Ads 나 Google AdMob SDK를 사용한다면 Advertising Data 를 선택하세요.

[Expo App privacy question](https://docs.expo.io/distribution/app-stores/#app-privacy-questions)

## Expo CLI

- Expo CLI가 더 가볍고 빨라졌습니다.
- Simulator, Emulator, unauthorized Android device에 대한 지원이 향상되었습니다.

## 패키지 변경사항

- `expo-auth-session`에서 `expo-random` 이 필요합니다.
- `AppLoading` 이 expo 패키지에서 사라졌습니다.
- `@react-native-community/picker` 는 `@react-native-picker/picker` 로 변경되었습니다.
- react-native에서는 `CheckBox`, `Clipboard` 가 deprecated 되었지만, `expo-clipboard` 와 `expo-checkbox` 를 Expo SDK에서 계속 사용할 수 있습니다.
- 예전부터 expo 패키지를 통해서 제공하던 Global API가 이제 deprecated 됩니다.

## 👋 iOS 10의 지원이 곧 종료됩니다

## SDK 36이 사라졌고, 37이 다음 릴리즈에 사라집니다.
