---

title: 'iOS Flutter 앱 출시 요약본'
excerpt: '개발자라면, 누구나 자신만의 앱을 Google PlayStore 또는 AppStore에 론칭하는 꿈을 꿔본 적이 있을 것이다.
내가 만든 앱을 사람들이 효율적으로 사용하는 그런 기쁨..
앱을 만드는 것 까지는 좋은데, 그 이후에 어떻게 론칭하는지 어려움을 겪는 사람들이 많다. 나도 그랬었다….(감정 공유)
그래서 앱을 출시하기 위한 그 복잡한 설정 과정들을 하나씩 풀어 나가보도록 하겠다.'
coverImage: '/cover/gameconsole_bktz60.jpg'
date: '2023-09-08T00:01:07.322Z'
author:
  name: Victor Yang (THE CODING PAPA)
  picture: '/thecodingpapa_logo.png'
ogImage:
  url: '/thecodingpapa_logo.png'

---

# Script

> 개발자라면, 누구나 자신만의 앱을 Google PlayStore 또는 AppStore에 론칭하는 꿈을 꿔본 적이 있을 것이다.
내가 만든 앱을 사람들이 사용했을 때 느끼는 뿌듯함..
앱을 만드는 것 까지는 좋은데, 그 이후에 어떻게 론칭하는지 어려움을 겪는 사람들이 많다. 
나 또한 그랬었다….
그래서 앱을 출시하기 위한 그 복잡한 설정 과정들을 하나씩 같이 풀어 나가보도록 하겠다.

가장 먼저, iOS 앱을 출시하려면 어떤 게 필요할까? 

바로 macOS 와 Xcode가 반드시 필요하다.

그리고 [Apple Developer Program](https://developer.apple.com/programs/)을 반드시 가입해야 한다.
> 

![https://res.cloudinary.com/dqrkrqm9y/image/upload//c_thumb,w_700/v1694739261/apple_developer_program_vn7dcr.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/apple_developer_program_vn7dcr.png)

iOS 앱 출시를 진행하기 앞서 Apple의 ['App Review Guidelines'](https://developer.apple.com/app-store/review/)을 완벽하게 이해하고 시작할 필요가 없다. (재미없는 조크)

왜냐하면, 우리가 앱과 관련한 정보들을 제출하면 애플 측에서 정보들을 확인하고 개발자에게 고치라고 알려주기 때문이다ㅋㅋ

그러니까 가이드라인 보면서 어렵다고 머리 쥐어뜯지 말고 하나씩 같이 해결해 나가보자.

## Review Project settings

1. Xcod 열기. (iOS 폴더 클릭(마우스 오른쪽) 후, “**Open in Xcode**” 클릭.)

![review project setting_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/review_project_setting_1.png)

1. 왼쪽 폴더 아이콘 클릭 후, **‘Runner’**클릭하면 메인에 세팅 화면이 보인다.
메인 화면에 왼쪽 탭에서 **TARGETS** 안에 **Runner** 선택.

![review project setting_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/review_project_setting_1%201.png)

1. **General** 탭 선택, **Identity** 섹션에서 다음 정보들을 확인한다.
- Display Name - 유저에게 보이는 앱 이름
- Bundle Identifier(Bundle ID) - 유니크한 앱 ID (ex. **`com.thecodingpapa.releaseDemo`**)
Bundle ID 변경은 아래처럼 둘 중 하나(Signing & Capabilities 또는 Bundle Identifier 옆에 작은 화살표) 클릭 후 변경 가능하다.

![https://res.cloudinary.com/dqrkrqm9y/image/upload/v1695090207/vhxzgxxccvem4nyfrbad.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/vhxzgxxccvem4nyfrbad.png)

1. **Signing & Capabilities** 탭에서 다음 정보들 확인.
- Automatically manage signing - 일반적으로 Xcode에게 자동으로 하라고 넘기자.
- Team - 애플 개발자 계정과 연계된 Team 선택.

![review project setting_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/review_project_setting_3.png)

1. **Build Settings** 탭 선택 후, **Deployment**섹션에서 다음 정보들을 확인한다.
- iOS Deployment Target - 설정된 iOS 버전 위로는 다 지원. Flutter는 iOS 11부터 지원.

![review project setting_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/review_project_setting_4.png)

![review project setting_5.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/review_project_setting_5.png)

## App Developer Site에 Bundle ID 등록

Bundle ID 등록하기 [남들은 모르는 Xcode에서 등록하는 법]

1. Team 선택(애플 개발자 계정이 연결되어 있어야 함.) 후 ‘**Automatically manage signing**’ 체크 확인.

![app developer site에 bundle ID 등록_5.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_developer_site%25E1%2584%258B%25E1%2585%25A6_bundle_ID_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8_5.png)

1. **‘+ Capabilities’** 클릭.

![app developer site에 bundle ID 등록_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_developer_site%25E1%2584%258B%25E1%2585%25A6_bundle_ID_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8_4.png)

1. **‘In App Purchase’** 선택 (사실 아무거나 선택해도 됨.)

![app developer site에 bundle ID 등록_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_developer_site%25E1%2584%258B%25E1%2585%25A6_bundle_ID_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8_3.png)

1. 다시 **‘In App Purchase’** 지우기.

![app developer site에 bundle ID 등록_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_developer_site%25E1%2584%258B%25E1%2585%25A6_bundle_ID_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8_2.png)

1. ‘[애플 개발자 사이트](https://developer.apple.com/account/resources/identifiers/list)’ 들어가서 XC로 시작하는 Bundle Identifiers가 등록된 것을 확인한다.
(XC는 Xcode의 약자로(예상) XC + bundle ID로 identifier의 NAME이 자동으로 생성되는 것 같다.)

    
    ![app developer site에 bundle ID 등록_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_developer_site%25E1%2584%258B%25E1%2585%25A6_bundle_ID_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8_1.png)
    

## App Store Connect에 Application 생성

1. [App Store Connect](https://appstoreconnect.apple.com/apps) 사이트에 접속한다.

2. ‘Add Apps’ 클릭 후 앱 생성 프로세스 시작.

    
    ![app store connect에 application 생성_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6_application_%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_2.png)
    

1. 빈칸을 다 채워준다.
Name - 사용자가 앱스토어에서 보는 앱 이름.
SKU - 앱 스토어 외 다른 곳에서 쓰이는 아이디. (개인적으로 bundle ID + `.ios`로 생성.)

![app store connect에 application 생성.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6_application_%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC.png)

1. 다 작성하고 Create 버튼을 누르면 New App 생성 완료!

![app store connect에 application 생성_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6_application_%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_1.png)

## Adding a launcher icon

### 사용할 이미지 준비

1. 앱 아이콘으로 사용할 이미지 준비. ([적어도 192 X 192 사이즈 준비](https://m2.material.io/design/iconography/product-icons.html#grid-and-keyline-shapes). 배경 없는 png 파일 추천)

    
    ![adding a launcher icon_10.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_10.png)
    

1. 프로젝트 root folder에 `assets` 폴더 생성. 

    
    ![adding a launcher icon_9.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_9.png)
    

1. 그리고 `assets` 폴더 안에 `icons` 폴더 생성. 

    
    ![adding a launcher icon_8.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_8.png)
    

1. `icons` 폴더 안에 이미지 저장하기.  
- 내가 설정한 이미지 경로. `[project]/assets/icons/logo.png`
(여러분이 원하는 경로로 설정해도 상관없음. 코드 입력 시 경로만 잘 입력하면 됨.)
    
    ![adding a launcher icon_7.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_7.png)
    
    ![adding a launcher icon_6.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_6.png)
    

1. 이미지는 준비가 됐으니, [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons)을 사용해서 앱 아이콘을 세팅해보자.
프로젝트 폴더에 `pubspec.yaml` 파일 오픈 후 아래처럼 코드 입력.

```yaml
dev_dependencies:

	...

  flutter_launcher_icons: "^0.13.1". #이 줄 dev_dependencies 아래 추가.

#아래 코드 전부 추가. 추가시 "image_path" 여러분 이미지 경로 확인.
flutter_launcher_icons:
  android: "launcher_icon" #이미지 생성시 사용되는 파일명. 그리고 그데로 아이콘으로 사용 됨.
  ios: true
  image_path: "assets/icons/logo.png"
  min_sdk_android: 21 # android min sdk min:16, default 21
  web:
    generate: true
    image_path: "assets/icons/logo.png"
    background_color: "#hexcode"
    theme_color: "#hexcode"
  windows:
    generate: true
    image_path: "assets/icons/logo.png"
    icon_size: 48 # min:48, max:256, default: 48
  macos:
    generate: true
    image_path: "assets/icons/logo.png"
```

![adding a launcher icon_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_4.png)

1. 터미널에 `pub get` 실행

```yaml
flutter pub get
```

![adding a launcher icon_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_3.png)

1. [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons)를 사용한 아이콘 자동 생성 명령어 실행.

```yaml
flutter pub run flutter_launcher_icons
```

![adding a launcher icon_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_2.png)

1. 아이콘들이 잘 생성되었는지 확인해 보자. 
Runner - Runner - Assets - Appicon 경로를 클릭하면 앱 아이콘이 잘 생성된 걸 볼 수 있다.

    
    ![adding a launcher icon_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launcher_icon_1.png)
    

## Adding a launch screen

1. 프로젝트를 Xcode에서 오픈 후, 다음 경로로 가자. `Runner > Runner > LaunchScreen(.storyboard)`

    
    ![adding a launch screen_7.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_7.png)
    

1. 아무것도 없는 흰 바탕만 보인다. 앱이 구동되는 동안 유저에게 좋은 이미지를 심어줄 이미지를 넣어주자.

    
    ![adding a launch screen_6.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_6.png)
    

1. `Runner > Runner > Assets` 클릭.

    
    ![adding a launch screen_5.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_5.png)
    

1. 원하는 이미지를 x1, x2, x3로 넣어준다.

    
    ![adding a launch screen_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_4.png)
    

1. 다시 `Runner > Runner > LaunchScreen(.storyboard)`이 경로로 가면, 곧 여러분의 이미지가 가운데 보이는 것을 볼 수 있다.

    
    ![adding a launch screen_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_3.png)
    

1. Background color는 View를 클릭 후 오른쪽 View 탭에서 변경 가능하다.

![adding a launch screen_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_2.png)

1. 위와 같이 설정하면, 앱 실행 시 launch screen이 잘 보이는 것을 확인할 수 있다.

    
    ![adding a launch screen_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/adding_a_launch_screen_1.png)
    

## Version check

두 가지 버전을 확인해 보자.

![version check_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/version_check_3.png)

1. Bundle version(Version Number) - 앱을 업데이트 또는 스토어에 재 업로드할 때마다 기존 Bundle version보다 큰 숫자로 지정. 
(예를 들어, 애플 앱 스토어에 있는 내 기존 앱 Version Code가 13이면 앱 업데이트로 업로드할 땐 14 이상의 숫자로 Version Code를 설정 후 업로드 가능. 유저에게 안 보임.)

    
    ![version check_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/version_check_2.png)
    

1. Bundle version string(Version Name) - 기록을 위한 Version name. 보통 세 개의 부분으로 이루어진다. 1.0.0처럼. 
Number 데이터가 아닌 String 데이터로, 유저에게 보여줄 수 있다.
Flutter 프로젝트에 `pubspec.yaml` 파일에서 수정 가능.
`1.0.0+1`에서 `+` 이전은 Version Name 이후는 Version Number이다.
수정 후 저장해서 iOS 빌드 하면 적용된다.

![version check_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/version_check_1.png)

## API 및 아카이브 파일 빌드하기

1. iOS 앱을 빌드 해보자. 터미널 안에서 프로젝트 로케이션으로 가서 `flutter build ipa` 입력 후 실행하면 끝.

    
    ![API 및 아카이브 파일 빌드하기_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/API_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25B3_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2587%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3.png)
    

1. build 파일을 확인해 보자. 
확인 경로 - `build - ios - archive/Runner.xcarchive`

    
    ![API 및 아카이브 파일 빌드하기_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/API_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25B3_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2587%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)
    

1. 두 번째 파일은 ipa 폴더 안에 ‘.ipa’로 끝나는 파일.

    
    ![API 및 아카이브 파일 빌드하기_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/API_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25B3_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2587%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)
    

1. 총 두 가지가 확인되면 build가 잘 된 것이다. 

    
    ![API 및 아카이브 파일 빌드하기_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/API_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25B3_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2587%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_4.png)
    

## 앱 유효성 검사 및 업로드하기

1. archive/Runner.xcarchive 파일을 Finder에서 열어준다.

    
    ![앱 유효성 검사 및 업로드하기_9.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_9.png)
    

1. Xcode를 통해 해당 파일 열기.

    
    ![앱 유효성 검사 및 업로드하기_8.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_8.png)
    

1. 아래와 같은 화면이 뜨면, Validate App 클릭. (App Build가 잘 됐는지 확인하는 절차이다.)

    
    ![앱 유효성 검사 및 업로드하기_7.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_7.png)
    

1. 아래와 같은 화면이 뜨면 Validate 클릭.

    
    ![앱 유효성 검사 및 업로드하기_6.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_6.png)
    

1. Validate이 성공적으로 끝났으면 Done 클릭.

    
    ![앱 유효성 검사 및 업로드하기_5.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_5.png)
    

1. Validate에 성공한 파일을 선택 후, Distribute App 클릭. (Validate 할 때와 비슷한 절차로 진행한다.)

    
    ![앱 유효성 검사 및 업로드하기_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_4.png)
    

1. 업로드를 확인해 보자. `App Store Connect - my apps - 해당 앱 클릭.`

    
    ![앱 유효성 검사 및 업로드하기_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3.png)
    

![앱 유효성 검사 및 업로드하기_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)

1. Build 섹션 타이틀 옆에 + 사인이 보이지 않는다면 여러분들의 앱이 아직 준비가 안된 것이다. 약 30분 후에 다시 한번 확인해 보자.

    
    ![앱 유효성 검사 및 업로드하기_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258B%25E1%2585%25B2%25E1%2584%2592%25E1%2585%25AD%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A1_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25A5%25E1%2586%25B8%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2583%25E1%2585%25B3%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)
    

## **App Store Connect에서 앱 정보 작성하기**

1. App Information에서 앱에 관련한 정보들을 입력해 준다. (입력 후, Save 하는 것을 잊지 말기ㅎㅎ)

    
    ![app store connect에서 앱 정보 작성하기_8.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_8.png)
    

1. App Privacy를 입력해 보자. 
대부분이 앱에서 어떤 정보를 어떻게 사용하는지 물어보는 질문이기 때문에 여러분들 앱에 맞는 정보 정책을 골라 입력하면 된다.

![app store connect에서 앱 정보 작성하기_7.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_7.png)

1. 앱을 개발한 개발자 또는 개발팀의 정보를 넣어준다. 입력이 끝났으면 Publish 버튼을 눌러 저장해 준다.
(이 화면에서 정보 보호 정책 링크를 걸어주어야 하는데 일단은 무시하고 진행해 보도록 한다.) 

    
    ![app store connect에서 앱 정보 작성하기_6.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_6.png)
    

1. 우리가 제출할 앱의 정보를 조금 더 입력해 보자. 앱스토어에서 유저들에게 보여줄 이미지들을 업로드해 준다. 각각 이미지의 사이즈는 보기처럼 링크를 따라가면 이미지 사이즈를 확인할 수 있다. (이미지 사이즈는 [이 링크](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)에서 확인.)

    
    ![app store connect에서 앱 정보 작성하기_5.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_5.png)
    

![app store connect에서 앱 정보 작성하기.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5.png)

1. 이 밖에 앱에 관련한 정보들을 입력해 준다. 중요한 것은, 여기에 있는 모든 정보들을 다 입력하지 않아도 된다. 여러분들이 필요한 부분들만 입력한 후에 앱을 출시하고 업데이트해줘도 상관없다. 

    
    ![app store connect에서 앱 정보 작성하기_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_4.png)
    

1. 우리가 업로드한 App Bundle이 준비가 돼서 build 옆에 + 사인이 보인다. 

    
    ![app store connect에서 앱 정보 작성하기_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3.png)
    

1. 우리가 업로드한 build를 선택하고, Done 버튼을 눌러준다. 

![app store connect에서 앱 정보 작성하기_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)

1. iOS는 사람이 직접 리뷰하기 때문에 앱 로그인이 필요하면, 로그인 아이디, 비밀번호 등 앱을 사용하는데 필요한 정보들을 따로 적어둔다. 정보 입력이 끝났으면 Save 버튼을 눌러준다. 

    
    ![app store connect에서 앱 정보 작성하기_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/app_store_connect%25E1%2584%258B%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25A5_%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)
    

## 앱을 테스트 용으로 사용 가능하게 설정하기

앱을 제출하기 전에 먼저 업로드한 앱을 직접 테스트해 보자.

1. TestFlight 탭으로 가서 경고 사인이 있는 Missing Compliance Manage를 클릭하면, 여러분들의 앱이 정보를 어떻게 주고받는지에 대해서 물어보는 것이다.

    
    ![앱을 테스트 용으로 사용 가능하게 설정하기_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8%25E1%2584%258B%25E1%2585%25B3%25E1%2586%25AF_%25E1%2584%2590%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25B3_%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC%25E1%2584%258B%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9_%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A6_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_4.png)
    

1. 테스터를 설정해 주자. 원하는 테스팅 그룹 이름을 입력. 

    
    ![앱을 테스트 용으로 사용 가능하게 설정하기_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8%25E1%2584%258B%25E1%2585%25B3%25E1%2586%25AF_%25E1%2584%2590%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25B3_%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC%25E1%2584%258B%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9_%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A6_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3.png)
    

1. 테스터 옆에 + 사인 클릭. 원하는 테스터 선택 후 Add 클릭.

    
    ![앱을 테스트 용으로 사용 가능하게 설정하기_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8%25E1%2584%258B%25E1%2585%25B3%25E1%2586%25AF_%25E1%2584%2590%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25B3_%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC%25E1%2584%258B%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9_%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A6_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)
    
    ![앱을 테스트 용으로 사용 가능하게 설정하기_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8%25E1%2584%258B%25E1%2585%25B3%25E1%2586%25AF_%25E1%2584%2590%25E1%2585%25A6%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25B3_%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC%25E1%2584%258B%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9_%25E1%2584%2589%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A6_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)
    

## 가격 및 이용 가능성 설정하기

앱의 가격과 어느 나라에 출시할 것인지에 대해 세팅해 주자.

1. 앱 가격 설정

1) 왼쪽 패널에서 Pricing and Availability - Add Pricing 클릭.

![가격 및 이용 가능성 설정하기_5.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25A8_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_5.png)

2) 원하는 Base Country와 가격 선택.

![가격 및 이용 가능성 설정하기_4.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25A8_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_4.png)

3) 각 나라마다 앱 가격 설정하기.

![가격 및 이용 가능성 설정하기_3 (1).png](20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25A8_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3_(1).png)

1. 어느 나라에 앱을 출시할 것인지에 대한 Set Up Availability 설정하기.

![가격 및 이용 가능성 설정하기_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25A8_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)

1) 여러분들의 비즈니스 계획에 맞게 선택하기

![가격 및 이용 가능성 설정하기_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25A8_%25E1%2584%2586%25E1%2585%25B5%25E1%2586%25BE_%25E1%2584%258B%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25AD%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2582%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)

## 검토 대기열에 추가하기

앱을 제출해 보자.

1. 앱을 제출할 모든 준비가 끝났다면 오른쪽 위에 Add for Review를 클릭한다. 

    
    ![검토 대기열에 추가하기_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2590%25E1%2585%25A9_%25E1%2584%2583%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_%25E1%2584%258E%25E1%2585%25AE%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3.png)
    

1. 이전에 모든 정보를 다 입력하지 않아 오류가 떴다. 어떻게 해결해야 할까?

![검토 대기열에 추가하기_2.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2590%25E1%2585%25A9_%25E1%2584%2583%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_%25E1%2584%258E%25E1%2585%25AE%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)

1. 많은 에러들이 있지만, 그중에서 개인 정보 보호 방침에 관한 에러를 해결해 보자. 정부가 운영하는 사이트를 통해 개인 정보 처리 방침을 쉽게 만들 수 있다. 정부가 쉽게 만들 수 있도록 프로그램을 만들어줬다. 이 프로그램을 통해서 각각 개인에 따른 개인 정보 처리 방침을 쉽게 만들 수 있다. 

> 📌 업데이트된 내용
영상 제작 시엔 정부 사이트를 통해 개인 정보 처리 방침을 쉽게 만들 수 있었는데 현재(2023년 10월 31일 기준) 프로그램이 사라진 것으로 보인다. 그래서 해당 부분은 ['개인 정보 보호 지침 가이드라인'](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=7909) 링크를 통해서 직접 설정해 줘야 한다.
> 

![Screenshot 2023-10-27 at 6.27.26 PM.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/Screenshot_2023-10-27_at_6.27.26_PM.png)

![검토 대기열에 추가하기_개인정보.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2590%25E1%2585%25A9_%25E1%2584%2583%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_%25E1%2584%258E%25E1%2585%25AE%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_%25E1%2584%2580%25E1%2585%25A2%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9.png)

1. 정부 사이트에서 만든 개인 정보 처리 방침 URL 넣어주기. 

![검토 대기열에 추가하기_1.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2590%25E1%2585%25A9_%25E1%2584%2583%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_%25E1%2584%258E%25E1%2585%25AE%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)

1. 이 밖에도 에러 해결에 필요한 정보들을 하나씩 입력 후 Add for Review를 클릭하여 저장해 준다. 

![검토 대기열에 추가하기_3.png](https://show.thecodingpapa.com/blog-images/20230915_build_and_release_ios%20ef0cf2fdd7a24eabab656e7ce653fad1/%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2590%25E1%2585%25A9_%25E1%2584%2583%25E1%2585%25A2%25E1%2584%2580%25E1%2585%25B5%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_%25E1%2584%258E%25E1%2585%25AE%25E1%2584%2580%25E1%2585%25A1%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3%201.png)

그다음엔 좋은 리뷰어가 선택되기를 간절히 바라며 기도를 한다ㅋㅋ

리뷰어가 여러분들의 앱을 통과시키면, 자동으로 앱스토어에 업로드가 된다.

앱  출시 후, 유튜브 댓글에 링크랑 설명 넣자~!
