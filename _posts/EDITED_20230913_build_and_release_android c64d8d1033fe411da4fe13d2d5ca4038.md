

# Intro

### Atmosphere of the Video

- happy? exciting? moody? funny?

### **What is the first sentence? So Audience feel “Oh~Yes! I am in the right video!!”**

> 
> 

### **Some very interesting facts about the topic.(8~15 seconds)**

- 

### Say one sentence that like “there are even more later that they must know”

> 
> 

---

# Script

이 영상은 [Official 링크](https://docs.flutter.dev/deployment/android)를 베이스로 좀 더 유익하고 간결하게 만듦.

Google Play Store에 앱 출시를 목적으로 만들어 짐.

## 다음 순서대로 진행

- Join Google Play Console
- [Adding a launcher icon](https://docs.flutter.dev/deployment/android#adding-a-launcher-icon)
- [Signing the app](https://docs.flutter.dev/deployment/android#signing-the-app)
- [Shrinking your code with R8](https://docs.flutter.dev/deployment/android#shrinking-your-code-with-r8)
- [Enabling multidex support](https://docs.flutter.dev/deployment/android#enabling-multidex-support)
- [Reviewing the app manifest](https://docs.flutter.dev/deployment/android#reviewing-the-app-manifest)
- [Reviewing the build configuration](https://docs.flutter.dev/deployment/android#reviewing-the-gradle-build-configuration)
- [Building the app for release](https://docs.flutter.dev/deployment/android#building-the-app-for-release)
- [Publishing to the Google Play Store](https://docs.flutter.dev/deployment/android#publishing-to-the-google-play-store)
- [Updating the app’s version number](https://docs.flutter.dev/deployment/android#updating-the-apps-version-number)
- [Android release FAQ](https://docs.flutter.dev/deployment/android#android-release-faq)

---

## Adding a launcher icon

### 사용할 이미지 준비

1. 앱 아이콘으로 사용할 이미지 준비 ([적어도 192 X 192 사이즈 준비](https://m2.material.io/design/iconography/product-icons.html#grid-and-keyline-shapes). 배경 없는 png 파일 추천)

![adding a launcher icon_10.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_10.png)

1. 프로젝트 root folder에 assets 폴더 생성. 

![adding a launcher icon_9.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_9.png)

3. 그리고 assets 폴더 안에 icons 폴더 생성. 

![adding a launcher icon_8.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_8.png)

4. icons 폴더 안에 이미지 저장.

![adding a launcher icon_7.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_7.png)

5. 내가 설정한 이미지 경로. `[project]/assets/icons/logo.png`

(여러분이 원하는 경로로 설정해도 상관없음. 코드 입력시 경로만 잘 입력하면 됨.)

![adding a launcher icon_6.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_6.png)

1. 이미지는 준비가 됐으니, [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons)을 사용해서 앱 아이콘을 세팅해 보자.
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

![adding a launcher icon_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_4.png)

1. 터미널에 `pub get` 실행

```yaml
flutter pub get
```

![adding a launcher icon_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_3.png)

1. [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons)을 사용한 아이콘 자동 생성 명령어 실행.

```yaml
flutter pub run flutter_launcher_icons
```

![adding a launcher icon_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/adding_a_launcher_icon_2.png)

## Signing the app

앱을 유저에게 공개하기 위해서는 내가 해당 앱의 주인이라는 디지털 시그니처를 앱에 넣어줘야 한다. 

Android에 두 개 타입의 signing key가 존재한다. **Deployment & Upload**.

![Signing the app_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Signing_the_app_3.png)

**Deployment key**: 유저가 apk 파일을 다운받을 때 apk파일에 Deployment key가 존재.

![Signing the app_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Signing_the_app_2.png)

**Upload key**(추천): 유저가 Google Play Store에서 다운로드 받는 앱들은 Upload key를 통해 Play Store에서 결합된다.

우린 Google Play Store에만 올리는 Upload key를 사용.

![Signing the app_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Signing_the_app_1.png)

## Create an upload keystore

> 기존에 keystore를 생성한 것이 있다면 다음으로 넘어가자.
> 

- On MacOS or Linux
    - 터미널을 열고 아래와 같은 코드를 입력해 주자
    
    ```bash
    keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
    ```
    
    ![create an upload keystore_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/create_an_upload_keystore_4.png)
    

- On Windows
    - 터미널을 열고 아래와 같은 코드를 입력해 주자
    
    ```powershell
    keytool -genkey -v -keystore upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
    ```
    
    ![create an upload keystore_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/create_an_upload_keystore_2.png)
    

‘upload-keystore.jks’ 파일을 찾아 아주 소중히 나만 아는 곳에 잘 저장해두자. 

> 이 파일은 굉장히 중요!
나중에 앱 업그레이드할 때 이 파일 없으면 업그레이드 못함. (사실 Google Play Store에 저장 가능 ㅎㅎㅎ)
> 

![create an upload keystore_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/create_an_upload_keystore_3.png)

![create an upload keystore_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/create_an_upload_keystore_1.png)

## 앱에 keystore 정보 파일 생성

1. Android 프로젝트 최상단 폴더에 [key.properties](http://key.properties) 파일 생성.

![앱에 keystore 정보 파일 생성_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8%25E1%2584%258B%25E1%2585%25A6_keystore_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_2.png)

1. 아래 보이는 코드를 복사해 우리가 생성한 key.properties에 넣고 여러분의 설정값에 맞게 변경해주자.
keyAlias는 upload로 두고 나머지 세 개의 값은 여러분들의 3개의 keystore를 생성할 때 설정한 값 그대로 사용하면 된다. 
key.properties는 여러분이 Google Play Store에 앱을 업로드할 수 있는 문을 여는 비밀번호라고 보면 된다.
(이 비번을 남들에게 공유하면, 누군가 Store에 있는 여러분의 앱을 자신들 마음대로 바꿔버릴 수 있으니 반드시! 여러분만 아는 곳에 보관하기.)

```groovy
storePassword=qwe123
keyPassword=qwe123
keyAlias=upload
storeFile=/Users/wonjunyang/upload-keystore.jks
```

![앱에 keystore 정보 파일 생성_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/%25E1%2584%258B%25E1%2585%25A2%25E1%2586%25B8%25E1%2584%258B%25E1%2585%25A6_keystore_%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25BC_1.png)

## gradle파일에 signing 설정하기

`[project]프로젝트/android/app/build.gradle` 경로를 통해 keyProperty file를 gradle를 통해 연결해 주자.

1. 파일 안에서 안드로이드 키워드 이전에 우리가 키 스토어를 연결해 주는 코드를 넣어주자. 이제 이 프로젝트가 빌드가 될 때 해당 키 스토어를 사용하려는 코드 블록을 넣어준다. 

```groovy
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
   keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
     ...
}
```

![gradle 파일에 signing 설정하기_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_signing_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_4.png)

![gradle 파일에 signing 설정하기_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_signing_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_3.png)

1. android 코드 블록 안에 buildTypes를 찾자.

```groovy
buildTypes {
   release {
       // TODO: Add your own signing config for the release build.
       // Signing with the debug keys for now,
       // so `flutter run --release` works.
       signingConfig signingConfigs.debug
   }
}
```

![gradle 파일에 signing 설정하기_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_signing_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_1.png)

1. 그리고 다음처럼 바꿔주자. 이 설정 후 release로 빌드 하면 된다.

```groovy
signingConfigs {
   release {
       keyAlias keystoreProperties['keyAlias']
       keyPassword keystoreProperties['keyPassword']
       storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
       storePassword keystoreProperties['storePassword']
   }
}
buildTypes {
   release {
       signingConfig signingConfigs.release //이 부분을 release signingConfigs로 변경해주자.
   }
}
```

![gradle 파일에 signing 설정하기.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_signing_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5.png)

![gradle 파일에 signing 설정하기_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF%25E1%2584%258B%25E1%2585%25A6_signing_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2592%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25B5_2.png)

## Build.gradle 파일 설정 확인

1. `[project]android/app/build.gradle` 경로 따라 클릭.

![build.gradle 파일 설정 확인_7.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_7.png)

1. android tag 안에 3가지 값을 확인해 보자.
applicationId - 다른 애들과 구분 지을 수 있는 이 앱만의 유니크한 아이디라고 보면 된다. 애플리케이션 아이디를 잘 못 정했을 때 어떤 문제가 발생하고 애플리케이션 아이디를 어떻게 바꿔주는지는 나중에 보여준다. 

![build.gradle 파일 설정 확인_6.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_6.png)

1. versionCode는 pubspec.yaml 파일에 가면 `1.0.0+1`이 있는데 `+1`이 이 부분에 해당한다. 여기서 중요한 것은 version code는 무조건 integer. 

![build.gradle 파일 설정 확인_5.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_5.png)

1. 플레이스토어에 업로드할 때마다 플레이스토어에 있는 버전 코드보다 반드시 높게 만들어서 업로드해야 업로드가 진행된다. 

![build.gradle 파일 설정 확인_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_4.png)

1. versionName은 `1.0.0`에 해당한다. versionName은 String이고 여러분들이 원하는 방식대로 versionName을 만들어주면 된다. 

![build.gradle 파일 설정 확인_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_3.png)

1. 자 드디어 앱 bundle build를 시작한다. 터미널을 열고 `flutter build appbundle` 입력.

![build.gradle 파일 설정 확인_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_2.png)

1. command를 누른 상태로 링크를 클릭하면 app bundle 파일을 볼 수 있다. 

![build.gradle 파일 설정 확인_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/build.gradle_%25E1%2584%2591%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AF_%25E1%2584%2589%25E1%2585%25A5%25E1%2586%25AF%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_%25E1%2584%2592%25E1%2585%25AA%25E1%2586%25A8%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB_1.png)

## Join Google Play Console

1. 우리가 업로드할 google play console에 가입하자.

![join google play console_5.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/join_google_play_console_5.png)

1. 가입 과정은 다른 가입 과정과 크게 다를 게 없다. 그냥 나오는 질문들에 솔직하게 답하면 끝. 

![join google play console_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/join_google_play_console_4.png)

1. 질문에 답을 다 하면 돈을 내야 한다. 가입 시 딱 한 번만 내는 것이기 때문에 아까워할 필요가 없다. 

![join google play console_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/join_google_play_console_3.png)

1. 아래와 같은 화면이 뜨면 끝!

![join google play console_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/join_google_play_console_2.png)

1. 이 아니라..
Identity까지 등록이 되어야만 앱을 배포할 수 있다. 

![join google play console_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/join_google_play_console_1.png)

## Upload app bundle to Google Play Store

1. PlayStore 가입이 끝나고 Play Console로 가면 verify identity라는 문구가 있다. 이를 통해 여러분들의 아이디를 등록해 줘야 앱을 배포할 수 있다. 

![Upload app bundle to google play store_12.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_12.png)

![Upload app bundle to google play store_11.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_11.png)

1. 안내에 따라서 정보를 입력하자.

![Upload app bundle to google play store_10.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_10.png)

1. 구글이 내 아이디를 확인하고 있는 동안 우리는 앱을 업로드할 수 있다. Google play Console에서 Create app 클릭.

![Upload app bundle to google play store_9.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_9.png)

1. 그리고 내 앱에 관련된 정보들을 하나씩 입력한다. 기본 정보를 입력 후, create app을 클릭한다. 

![Upload app bundle to google play store_8.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_8.png)

1. 우리 앱을 업로드할 수 있는 Dashboard가 보이고 여기에 입력할 정보가 엄청나게 많다. 

![Upload app bundle to google play store_2 (1).png](20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_2_(1).png)

1. App bundle을 업로드 후, 유저에게 바로 공개하는 것보다는 업로드된 앱을 테스트 후, 공개하는 것이 좋다. 
여기에 테스팅 방법도 여러 가지가 있기 때문에 여러분들만의 테스팅 방법 선택 후 테스팅을 마치고 Publish를 한다. 

![Upload app bundle to google play store_1 (1).png](20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_1_(1).png)

1. 테스팅 하기에 앞서 app Bundle을 업로드해 보자. 

![Upload app bundle to google play store_7.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_7.png)

![Upload app bundle to google play store_6.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_6.png)

1. 우리가 업로드 키를 사용해서 build 했음에도 불구하고 키를 선택하라고 나온다. 

![Upload app bundle to google play store_5.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_5.png)

1. 개인적으로 우리가 사용한 업로드 키는 다른 스토어에 올릴 때 사용하고 구글 플레이스토어에는 구글 generate key를 사용한다. 그래서 이번에는 Use google-generated key 클릭.

![Upload app bundle to google play store_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_4.png)

1. 자 드디어 우리가 build 한 App bundle을 업로드하자. 

![Upload app bundle to google play store_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_3.png)

![Upload app bundle to google play store_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_2.png)

1. App bundle에 에러가 나타났다.

![Upload app bundle to google play store_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Upload_app_bundle_to_google_play_store_1.png)

애플리케이션 아이디가 유니크하지 않아서이다. 

그럼 애플리케이션 아이디를 어떻게 바꿔야 할까?

## Change package name & application ID(bump up the version code)

1. 애플리케이션 아이디를 어떻게 바꾸는지 알아보자. 
바꾸는 방법은 두 가지가 있다. 
”Manual”과 “Package”. 그 이유는 manual로 바꿀 때 실수할 가능성이 많기 때문이다.

![change package name&applicationID_13.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_13.png)

1. 우리가 사용할 패키지는 ‘change_app_package_name’이라는 패키지이다. 패키지를 설치하는 것부터 시작.

![change package name&applicationID_12.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_12.png)

1. 터미널에 `flutter pub add change_app_package_name` 명령어를 사용해 패키지를 설치하자. 

![change package name&applicationID_11.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_11.png)

1. 설치된 패키지를 통해 애플리케이션 아이디를 변경해 보자. 
아래에 보이는 것처럼 명령어를 입력하고 실행하면 애플리케이션 아이디가 변경된다.
주의해야 할 점은 맨 마지막 부분에 있는 `com.thecodingpapa.release_demo` 부분을 여러분들이 원하는 유니크한 애플리케이션 아이디로 변경 후 실행하면 된다. 

![change package name&applicationID_10.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_10.png)

1. 변경이 잘 되었는지 확인해 보자. `[project]android/app/build.gradle` 경로로 이동.

![change package name&applicationID_9.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_9.png)

1. android tag 안에 namespace 또는 defaultConfig 안에 애플리케이션 아이디를 확인하면 된다. 

![change package name&applicationID_8.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_8.png)

1. 애플리케이션 아이디 변경이 잘 되었으면 app bundle로 다시 build 후 구글 플레이스토어에 업로드한다. 

![change package name&applicationID_7.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_7.png)

![change package name&applicationID_6.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_6.png)

1. 그런데 이번에는 version 코드에 대한 에러가 나온다. 이전에 말했듯이 버전 코드는 항상 1씩 올린 후 업로드를 해야 업로드가 가능해진다. 

![change package name&applicationID_5.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_5.png)

![change package name&applicationID_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_4.png)

1. 그럼 pubspec.yaml 파일로 가서 version+ 이후에 있는 번호를 한 번 올린 후 다시 build를 해서 업로드를 해보자.

![change package name&applicationID_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_3.png)

![change package name&applicationID_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_2.png)

1. 드디어 에러 없는 깔끔한 업로드가 되었다. 

![change package name&applicationID_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/change_package_nameapplicationID_1.png)

## Fill the application informations

1. app bundle만 업로드하면 다 끝나는 줄 알았지만 이렇게 많은 것들을 작성해야 앱을 모든 유저들에게 출시할 수 있다. 많은 에러들이 있지만 그중, 필요한 부분만 담아보도록 하겠다.

![fill the application information_10.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_10.png)

1. 우리가 Dashboard 따라서 하나씩 작성해도 되지만 개인적으로 여기에 있는 에러 메시지들부터 해결을 한 후, Dashboard에서 필요한 부분만 작성해서 출시한다. 

![fill the application information_9.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_9.png)

제 기억을 거슬러 올라가, 앱을 처음 출시할 때 어려웠던 부분들을 기점으로 여러분들에게 간단한 팁을 알려드리겠습니다.

1. 첫 번째로, privacy Policy. 개인정보처리 방침을 어떻게 만들어야 될까?

![fill the application information_8.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_8.png)

정부가 운영하는 사이트를 통해 개인 정보 처리 방침을 쉽게 만들 수 있다. 정부가 쉽게 만들 수 있도록 프로그램을 만들어줬다. 이 프로그램을 통해서 각각 개인에 따른 개인 정보 처리 방침을 쉽게 만들 수 있다. 

> 📌 업데이트된 내용
영상 제작 시엔 정부 사이트를 통해 개인 정보 처리 방침을 쉽게 만들 수 있었는데 현재(2023년 10월 31일 기준) 프로그램이 사라진 것으로 보인다. 그래서 해당 부분은 ['개인 정보 보호 지침 가이드라인'](https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=7909) 링크를 통해서 직접 설정해 줘야 한다.
> 

![개인정보처리방침.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/%25E1%2584%2580%25E1%2585%25A2%25E1%2584%258B%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9%25E1%2584%258E%25E1%2585%25A5%25E1%2584%2585%25E1%2585%25B5%25E1%2584%2587%25E1%2585%25A1%25E1%2586%25BC%25E1%2584%258E%25E1%2585%25B5%25E1%2586%25B7.png)

![Untitled](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/Untitled.png)

1. 두 번째, 앱을 아무리 잘 만들어도 앱의 기능을 효율적으로 설명하지 못하면 유저가 다운로드를 하지 않아서 아무 쓸모가 없다.

구글에서 지원해 주는 광고를 받아서 광고한다.

![fill the application information_7.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_7.png)

1. 여기서부터가 진짜다. 
앱 이름은, 여러분들이 구글 플레이스토어에서 보이는 앱 이름이다.
Short and Full description을 통해 유저들이 어떤 앱인지에 대한 설명을 보게 된다. 

![fill the application information_6.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_6.png)

1. 가장 중요한 Graphics.
유저들 대부분이 제목, 이미지, 영상을 통해 여러분들 앱의 기능을 훑어본다.

![fill the application information_5.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_5.png)

1. 각각의 이미지나 영상의 구체적인 정보는 아래에 자세히 나와있으므로 참고해서 제작한다.

![fill the application information_4.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_4.png)

1. 마지막으로 Testers list 만들기

![fill the application information_3.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_3.png)

1. 자신의 이메일을 Testers list에 넣어준다. 

![fill the application information_2.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_2.png)

1. 이 Testers list를 통해 alpha Test를 세팅하고 여러분들이 직접 다운로드를 해서 앱을 테스트할 수 있다. 

![fill the application information_1.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/fill_the_application_information_1.png)

//////////////////////////////////////////////////////////////

## Multidex 활성화

어떤 이유에서든 여러분의 앱 사이즈가 커져서, 정확하게 methods가 64k 보다 많다면, 안드로이드 앱 빌드가 안되고 다음과 같은 Build Failed 에러 메세지가 나올 수 있다.

![https://docs.flutter.dev/assets/images/docs/deployment/android/ide-build-failure-multidex.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/ide-build-failure-multidex.png)

mutidex를 활성화하기 위해. 터미널을 통해 안드로이드 앱을 실행해보자.

```groovy
flutter run --debug
```

안드로이드를 선택한다.

![https://docs.flutter.dev/assets/images/docs/deployment/android/cli-select-device.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/cli-select-device.png)

다음과 같은 메세지가 나오면, y타입 후 엔터!

![https://docs.flutter.dev/assets/images/docs/deployment/android/cli-multidex-added-build.png](https://show.thecodingpapa.com/blog-images/20230913_build_and_release_android%20c64d8d1033fe411da4fe13d2d5ca4038/cli-multidex-added-build.png)

## App Manifest 정보 확인

`[project]/android/app/src/main/AndroidManifest.xml`이 파일을 마지막으로 확인하자.

- application
    
    android:label 이 값이 유저들에게 보이는 여러분의 앱 이름이 된다. 자동으로 Flutter
    
- user-permission
인터넷 접속 요구를 넣어야 유저앱이 인터넷에 접속이 가능하다.

```groovy
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
	
	<user-permission android:name="android.permission.INTERNET"/> <!--이 부분 꼭 추가-->

	<application
		...
```

> 참고로 debug 또는 profile빌드는 기존에 인터넷 permission이 포함되어 있음.
그래서 개발 중엔 인터넷 접속이 가능함.
아래 파일들을 통해 직접 확인 가능.
debug - `[project]/android/app/src/**debug**/AndroidManifest.xml`
profile - `[project]/android/app/src/**profile**/AndroidManifest.xml`.
> 

## Gradle Build 설정값 확인

`[project]/android/app/build.gradle` 파일을 확인.

- applicationId
이 값이 여러분 앱의 유니크한 ID가 된다. 어떠한 앱과도 겹쳐서는 안된다.
- versionCode
처음 앱을 출시한땐 상관없지만 **항상 기존에 Google Play Store에 업로드된 앱의 값보다 항상 높아야 업데이트가 가능**하다.
이 값은 pubspec.yaml 파일에서 뒷 값 1에 해당한다. 여러분이 앱을 업데이트 후 Google Play Store에 올릴 때마다 항상 값을 높게 설정 후 업로드 하자.
유저는 이 값을 볼 수 없다.

```groovy
version: 1.0.0+1
```

- versionName
유저가 볼 수 있는 version 값이다. 위 코드에서 앞부분 1.0.0에 해당한다. Google Play Store에 업로드 할 때 따로 제약은 없다.

## release 버젼 빌드

### App Bundle 빌드

1. terminal에서 project폴더에 위치하자.
2. 다음 명령어 실행

```groovy
flutter build appbundle 
```

위 명령어에 —release 태그를 넣어주지 않아도 기본적으로 release로 빌드가 됨.

App Bundle은 다음 위치에서 찾을 수 있음.

`[project]/build/app/outputs/bundle/release/app.aab`

### App Bundle 테스트

그냥 Google Play Store에 업로드 후, alpha 또는 beta 테스트로 테스트 해보면 끝.