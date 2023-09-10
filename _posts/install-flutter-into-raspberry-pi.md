---

title: 'Raspberry Pi에 Flutter 설치'
excerpt: 'Flutter를 라즈베리 파이에 설치하는 것부터 시작해서.'
coverImage: '/cover/gameconsole_bktz60.jpg'
date: '2023-09-08T00:01:07.322Z'
author:
  name: Victor Yang (THE CODING PAPA)
  picture: '/thecodingpapa_logo.png'
ogImage:
  url: '/thecodingpapa_logo.png'

---


## 준비사항

> Linux 또는 Windows와 WSL(Windows Subsystem for Linux) 컴퓨터
Raspberry Pi 3 또는 4 ( 이전꺼는 사용 안해 봄 )
Raspberry Pi용 전원공급장치 (5V, 3A 이상 - 굉장히 중요 함)
micro SD Card (64GB)
micro SD Card reader
이더넷 케이블
hdmi 케이블
hdmi 케이블용 모니터 (Raspberry Pi OS 작동하고 Flutter 실행할 때)
mouse with USB Dongle/Bluetooth
> 

## 시작하기 전 훑어보기

이제 본격적으로 설치를 시작하기 전에 전체적으로 무엇을 할것인지 이해 후 진행하자.
왜냐하면 하는 도중 문제가 생겼을 시에 문제를 해결할 수 있는 큰 도움이 된다.
우리가 사용하는 컴퓨터는 두개다.
- Linux 또는 Windows와 WSL(Windows Subsystem for Linux) 컴퓨터
- Raspberry Pi OS(Pi OS)가 설치 된 Raspberry Pi

우리가 해야 할 것은 아래와 같다.
- Flutter 개발. ( Linux / Windows / Mac )
- Flutter 프로젝트 빌드. ( Linux 그리고 [Flutterpi_tool](https://pub.dev/packages/flutterpi_tool) )
- Flutter 빌드 파일을 Raspberry Pi로 보내기. ( Linux ⇒ Raspberry Pi OS )
- Flutter 프로젝트 Raspberry Pi를 통해 실행. ( Raspberry Pi OS 그리고 [Flutter-pi](https://github.com/ardera/flutter-pi) )

이 절차를 다 거친 후에 Flutter가 Raspberry Pi에 연결된 화면에 보이게 된다.
하나씩 천천히 진행해보자.

## Flutter 와 도구들 설치

Linux 또는 Windows(WSL)중 하나를 선택 후 따라한다.
영상에서는 Windows(WSL)을 사용했다. Windows 유저가 많기 때문에^^

### Windows (WSL)

| Windows | WSL(Ubuntu) in Windows | Raspberry Pi OS |
| --- | --- | --- |
| Development 용 | Flutter 앱 Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| https://docs.flutter.dev/get-started/install | https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| IDE(VSCode 또는 안드로이드 스튜디오) | https://pub.dev/packages/flutterpi_tool |  |

먼저 윈도우에 WSL을 통해 Ubuntu를 설치하자.

…


윈도우에 Flutter 설치를 시작한다
[이 영상을 따라하면 어렵지 않게 설치가 가능^^](https://www.youtube.com/watch?v=_v_NP_Xw4pA)

| Windows | WSL(Ubuntu) in Windows | Raspberry Pi OS |
| --- | --- | --- |
| Development 용 | Flutter 앱 Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| IDE(VSCode 또는 안드로이드 스튜디오) | https://pub.dev/packages/flutterpi_tool |  |

윈도우에 Flutter 설치가 끝나고, flutter SDK를 WSL(Ubuntu)에 설치 한다.
먼저 Ubuntu를 실행.

WSL(Ubuntu) 터미널에서 snap 툴을 통해 설치. (snap 툴은 Ubuntu에 기본으로 설치되어 있음)
```shell
sudo snap install flutter --classic
```

잘 설치되었는지 확인하기 위해, 다음을 terminal에 실행.
```shell
flutter sdk-path
```

또는
```shell
flutter doctor
```

아래와 같은 에러가 발생한다면, [이 글을 따라서 해결해주자.](https://wondev.tistory.com/73)
```shell
/usr/bin/env: ‘bash\r’: No such file or directory
```

이제 Windows 그리고 WSL(Ubuntu) 둘다 Flutter SDK가 설치되었다.

| Windows | WSL | Raspberry Pi OS |
| --- | --- | --- |
| Development 용 | Flutter 앱 Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | ✅ https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| ✅ IDE(VSCode 또는 안드로이드 스튜디오) | https://pub.dev/packages/flutterpi_tool |  |

flutterpi_tool을 WSL에 설치하자. WSL(Ubuntu)에 다음을 입력한다.
```shell
flutter pub global activate flutterpi_tool
```

매번 flutter pub global run flutterpi_tool를 입력하는 대신 명령어 flutterpi_tool을 바로 사용하려면 PATH를 업데이트 하자.
```shell
nano ~/.bashrc
```

파일 맨 끝에 아래 코드를 입력 후. ctrl+o 그리고 Enter. ctrl+x로 닫아준다.
```shell
export PATH="$PATH":"$HOME/.pub-cache/bin"
```

그리고 아래를 통해 입력한 PATH를 업데이트해주자.
```shell
source ~/.bashrc
```

| Windows | WSL | Raspberry Pi OS |
| --- | --- | --- |
| Development 용 | Flutter 앱 Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | ✅ https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| ✅ IDE(VSCode 또는 안드로이드 스튜디오) | ✅ https://pub.dev/packages/flutterpi_tool |  |

여기 까지 잘 마쳤다면 개발 후 빌드까지는 가능하다. 이젠 Flutter를 Raspberry Pi에서 실행하기 위해서 준비가 필요하다.

아래부터는 Windows 대신 Native Linux에서 개발하는 분들을 위한 준비이다.

### Linux(Ubuntu)

| Linux | Raspberry Pi OS |
| --- | --- |
| Flutter Development, Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| IDE(VSCode 또는 안드로이드 스튜디오) |  |
| https://pub.dev/packages/flutterpi_tool |  |

터미널을 오픈 후 snap을 통해 설치.
```shell
sudo snap install flutter --classic
```

잘 설치되었는지 확인하기 위해, 다음을 terminal에 실행.
```shell
flutter sdk-path
```

또는
```shell
flutter doctor
```

여기부터는 Flutter 개발 관련된 설치이기 때문에 따로 설명을 넣지는 않았다.
Linux Flutter 개발 관련 설치는 [이 링크](https://docs.flutter.dev/get-started/install)를 통해서 따라하면 된다.

| Linux | Raspberry Pi OS |
| --- | --- |
| Flutter Development, Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| ✅ IDE(VSCode 또는 안드로이드 스튜디오) |  |
| https://pub.dev/packages/flutterpi_tool |  |

flutterpi_tool을 설치하자. terminal에 다음을 입력한다.
```shell
flutter pub global activate flutterpi_tool
```

매번 flutter pub global run flutterpi_tool를 입력하는 대신 명령어 flutterpi_tool을 바로 사용하려면 PATH를 업데이트 하자.
```shell
nano ~/.bashrc
```

파일 맨 끝에 아래 코드를 입력 후. ctrl+o 그리고 Enter. ctrl+x로 닫아준다.
```shell
export PATH="$PATH":"$HOME/.pub-cache/bin"
```

그리고 아래를 통해 입력한 PATH를 업데이트해주자.
```shell
source ~/.bashrc
```

| Linux | Raspberry Pi OS |
| --- | --- |
| Flutter Development, Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| ✅ IDE(VSCode 또는 안드로이드 스튜디오) |  |
| ✅ https://pub.dev/packages/flutterpi_tool |  |

---

## Raspberry Pi 준비

| Raspberry Pi OS |
| --- |
| OS 설치 |
| Raspberry Pi 실행 및 설정 |
| Raspberry Pi 연결 (ethernet) |
| https://github.com/ardera/flutter-pi |

Raspberry Pi에서 Flutter를 실행하기 위해 사용할 Flutter Engine Embedder를 설치해줄것이다.
그 전에 Raspberry Pi OS를 설치해주고 Raspberry Pi 를 설정해주어야 한다.

OS를 먼저 설치해주자.
준비한 SD카드를 우리가 사용하는 컴퓨터에 연결해서 설치해준다.

### [Flash SD card](https://www.youtube.com/watch?v=ntaXWS8Lk34)(Raspberry Pi OS 설치)

1. insert micro SD card to Computer.
2. Download and Install Raspberry Pi Imager from [Here](https://www.raspberrypi.com/software/).
3. Choose OS. Raspberry Pi OS(**64-BIT**) with Raspberry Pi Imager.
4. Choose your SD card as Storage.
5. Click Setting icon.
6. Enable SSH (in order to connect via Ethernet)
7. Set username and password as you like(used for Raspberry Pi OS account)
8. Click Save.
9. Click Write.

| Raspberry Pi OS |
| --- |
| ✅ OS 설치 |
| Raspberry Pi 실행 및 설정 |
| Raspberry Pi 연결 (ethernet) |
| Raspberry Pi 설정 |
| https://github.com/ardera/flutter-pi |

### Raspberry Pi 실행

드디어! Raspberry Pi를 실행한다.

SD카드를 Raspberry Pi에 넣자.
5V-3A(반드시 3A 이상을 사용하자!)전원장치 연결.
hdmi 모니터에 연결.

전원장치에 전원이 전달되면 바로 부팅이 시작되고, Raspberry Pi가 실행된다.

이더넷케이블(인터넷케이블)을 사용하고 있는 컴퓨터에 한쪽을 연결하고 Raspberry Pi에 다른 한쪽을 연결한다.
Raspberry Pi 화면이 나오면 성공.

| Raspberry Pi OS |
| --- |
| ✅ OS 설치 |
| ✅ Raspberry Pi 실행 |
| Raspberry Pi 연결 (ethernet) |
| Raspberry Pi 설정 |
| https://github.com/ardera/flutter-pi |

### Raspberry Pi 연결
컴퓨터에서 직접 Raspberry Pi에 Ethernet을 통해 연결을 시작한다.

먼저 사용하고 있는 컴퓨터에서 Terminal을 실행.

| Mac | Windows | Linux |
| --- | --- | --- |
| Terminal | WSL(Ubuntu) | Terminal |

Raspberry Pi IP를 찾자.

```shell
ping raspberrypi.local
```

이런 화면이 나올것이다.

```shell
rainvic@windows-victor:~$ ping raspberrypi.local
PING raspberrypi.local (179.252.174.112) 56(84) bytes of data.
64 bytes from 179.252.174.112 (179.252.174.112): icmp_seq=1 ttl=63 time=1.19 ms
64 bytes from 179.252.174.112 (179.252.174.112): icmp_seq=2 ttl=63 time=1.15 ms
64 bytes from 179.252.174.112 (179.252.174.112): icmp_seq=3 ttl=63 time=1.21 ms
64 bytes from 179.252.174.112 (179.252.174.112): icmp_seq=4 ttl=63 time=1.14 ms
64 bytes from 179.252.174.112 (179.252.174.112): icmp_seq=5 ttl=63 time=1.48 ms
```

멈추기 위해서 ctrl+c.
IP를 복사해서 연결해보자.
우리가 알아야 할 정보는 Raspberry Pi OS 설치시 설정한 username과 password 그리고 지금 찾은 IP주소이다.
username: thecodingpapa
password: 22334455
IP: 179.252.174.112

다음 처럼 terminal에 입력 후 Raspberry Pi에 연결을 시도 한다.

```shell
ssh thecodingpapa@179.252.174.112
```

연결을 계속 할건지 물어보는 문구가 아래처럼 나오면 ‘yes’를 입력 후 enter.

```shell
rainvic@windows-victor:~$ ssh thecodingpapa@179.252.174.112
The authenticity of host '179.252.174.112 (179.252.174.112)' can't be established.
------- key fingerprint is SHA256:Mp8JKOMSZ3ke93rmTTYfpzla+kjsv1234Vsfjs.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

비밀번호를 입력하라는 문구가 나오면 비밀번호 입력 후 enter!(비밀번호 입력시 몇개나 입력이 되고 있는지 알 수 없다. 정확히 입력하자)

```shell
rainvic@windows-victor:~$ ssh thecodingpapa@179.252.174.112
thecodingpapa@179.252.174.112's password:
```

다음과 같은 문구가 나오면 성공!!

```shell
Linux raspberrypi 6.1.21-v8+ #1642 SMP PREEMPT Mon Apr  3 17:24:16 BST 2023 aarch64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Tue Aug 29 06:28:21 2023 from 179.252.174.112

Wi-Fi is currently blocked by rfkill.
Use raspi-config to set the country before use.

thecodingpapa@raspberrypi:~ $
```

### 연결이 안될 시, 두가지 해결방법.

Raspberry Pi OS를 다시 동일하게 설치해본다.

- Raspberry Pi OS(**64-BIT**)
- Enable SSH
- Set username & password (미리 노트에 정확히 적어두기)

이 방법이 안된다면, 아래 명령어를 Terminal에 실행 후 다시 연결을 시도해보자. (IP는 Raspberry Pi IP이다)

```shell
ssh-keygen -R 179.252.174.112
```

| Raspberry Pi OS |
| --- |
| ✅ OS 설치 |
| ✅ Raspberry Pi 실행 |
| ✅ Raspberry Pi 연결 (ethernet) |
| Raspberry Pi 설정 |
| https://github.com/ardera/flutter-pi |

### flutter-pi 설치 ([ref](https://github.com/ardera/flutter-pi#-building-flutter-pi-on-the-raspberry-pi).)

Raspberry Pi에 연결된 Terminal을 통해서 설치.
cmake, graphics, system등을 설치하는 명령어를 실행.

```shell
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

*설치시 화면과 같은 에러메세지가 뜬다면  Raspberry Pi로 인터넷 연결이 안된것이다.
Raspberry Pi 이더넷 잭을 컴퓨터 대신 인터넷 공유기 빈 공간에 연결.
Raspberry Pi를 terminal을 통해 재 연결 한다.(ping raspberrypi.local부터 다시 시작)
그리고 flutter-pi 설치를 계속 진행해보자.*

[gstreamer video player](https://github.com/ardera/flutter-pi#gstreamer-video-player)를 사용시, 다음 명령어 실행.

```shell
sudo apt install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-ugly gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-alsa
```

시스템 폰트를 업데이트하자.

```shell
sudo fc-cache
```

다음은 flutter-pi를 다운로드 받는 명령어이다.

```shell
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

컴파일

```shell
mkdir build && cd build
cmake ..
make -j`nproc`
```

설치

```shell
sudo make install
```

| Raspberry Pi OS |
| --- |
| ✅ OS 설치 |
| ✅ Raspberry Pi 실행 |
| ✅ Raspberry Pi 연결 (ethernet) |
| Raspberry Pi 설정 |
| ✅ https://github.com/ardera/flutter-pi |

### Flutter를 실행하기 위해 Raspberry Pi OS 설정

Raspberry Pi에 연결된 Terminal을 통해서 설정.

raspi-config열기.

```shell
sudo raspi-config
```

1. 콘솔 모드로 변경: `System Options -> Boot / Auto Login` 그리고 `Console` 또는 `Console (Autologin)`  선택.
2. 만약에  *Raspberry Pi 4 with Raspbian Bullseye를 사용하는 분은 이 부분 스킵.*
    
    V3D graphics driver 활성화:
    
    `Advanced Options -> GL Driver -> GL (Fake KMS)`
    
3. GPU memory 설정 `Performance Options -> GPU Memory` 그리고 `64`입력 후 엔터.
4. 화살표 키를 사용해 `raspi-config`를 나가자.
5. Raspberry Pi에게 권리를 부여. (**NOTE:** 보안상 권리 부여를 원하지 않으면 `flutter-pi` 사용시  `sudo` 를 앞에 붙여서 관리자로 flutter-pi를 실행하면 됨.)
    
    ```
    usermod -a -G render pi
    ```
    
6. 완료 후 reboot.
7. 세팅 후에는 Raspberry Pi OS가 안나오고 Raspberry Pi 화면이 터미널처럼 나온다. 

| Raspberry Pi OS |
| --- |
| ✅ OS 설치 |
| ✅ Raspberry Pi 실행 |
| ✅ Raspberry Pi 연결 (ethernet) |
| ✅ Raspberry Pi 설정 |
| ✅ https://github.com/ardera/flutter-pi |

### Flutter 프로젝트 생성 (테스트 용)

WSL(Ubuntu)예를 보여주지만 Native Linux 사용시 프로젝트 경로만 잘 설정해주면 방법은 동일 함.

1. WSL(Ubuntu)로 flutter 프로젝트 생성.

```shell
cd ..
cd ..
cd mnt
cd c
```

현재 위치는 Windows 저장공간 C 드라이브다.
여러분이 원하는 저장공간으로 cd를 이용해 이동한 후, flutter 프로젝트를 생성해주자.
내 경우에는 C:\src\projects로 이동한 후 flutter 프로젝트를 생성해줄것이다.

```shell
cd src/projects
```

아래는 “raspberry_test”라는 프로젝트 명을 가진 flutter 프로젝트를 생성해주는 명령어이다.

```shell
flutter create raspberry_test
```

이후 프로젝트 폴더에 들어가서 프로젝트가 잘 생성되었는지 확인해보자.

```shell
cd raspberry_test
ls
```

아래와 같은 파일들이 보이면 성공!

```shell
README.md              android  lib    macos         pubspec.yaml        test  windows
analysis_options.yaml  ios      linux  pubspec.lock  raspberry_test.iml  web
```

이제 해당 프로젝트를 Raspberry Pi에서 실행해보자.

### flutter 개발 후, 빌드할 때 사용할 [flutterpi_tool](https://github.com/ardera/flutter-pi#building-the-app-new-method-linux-only) 설치 (Linux only)

**이 부분은 반드시 리눅스를 사용해야 된다.**

위에서 flutterpi_tool을 설치 하지 않았다면, WSL(Ubuntu) 또는 Ubuntu의 terminal에서 아래 명령어들을 통해 flutterpi_tool을 설치해주자.

```shell
flutter pub global activate flutterpi_tool
```

매번 flutter pub global run flutterpi_tool를 입력하는 대신 명령어 flutterpi_tool을 바로 사용하려면 PATH를 업데이트 하자.

```shell
nano ~/.bashrc
```

파일 맨 끝에 아래 코드를 입력 후. ctrl+o 그리고 Enter. ctrl+x로 닫아준다.
```shell
export PATH="$PATH":"$HOME/.pub-cache/bin"
```

그리고 아래를 통해 입력한 PATH를 업데이트해주자.
```shell
source ~/.bashrc
```

| Linux | Raspberry Pi OS |
| --- | --- |
| Flutter Development, Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| ✅ IDE(VSCode 또는 안드로이드 스튜디오) |  |
| ✅ https://pub.dev/packages/flutterpi_tool |  |

| Windows | WSL | Raspberry Pi OS |
| --- | --- | --- |
| Development 용 | Flutter 앱 Build 및 Deploy to Raspberry Pi | Flutter 앱 실행 |
| ✅ https://docs.flutter.dev/get-started/install | ✅ https://docs.flutter.dev/get-started/install | https://github.com/ardera/flutter-pi |
| ✅ IDE(VSCode 또는 안드로이드 스튜디오) | ✅ https://pub.dev/packages/flutterpi_tool |  |

### flutterpi_tool로 flutter 프로젝트 빌드하기.(Linux only)

WSL(Ubuntu) 또는 Native Linux를 사용.
먼저 프로젝트가 있는 폴더로 이동.
flutterpi_tool을 사용해 빌드를 시작하자. 우리는 64BIT, Raspberry Pi 3(기본값)이기 때문에 64bit만 명시.

```shell
flutterpi_tool build --arch=arm64 --release
```

### Raspberry Pi에서 flutter 실행하기.

먼저 빌드한 파일을 컴퓨터에서 Raspberry Pi로 옮겨주자.(Linux Terminal 또는 WSL(Ubuntu)에서 실행)

```shell
rsync -a --info=progress2 ./build/flutter_assets/ thecodingpapa@179.252.174.112:/home/Dev/raspberry_test
```

또는

```shell
scp -r ./build/flutter_assets/ thecodingpapa@179.252.174.112:/home/Dev/raspberry_test
```

Raspberry Pi 안에 여러분이 원하는 위치(/home/Dev/raspberry_test)에 파일을 옮기는 것이다.

이제 flutter를 실행해보자.

Terminal 또는 WSL(Ubuntu)에서 Raspberry Pi에 Ethernet을 통해 연결하자.

```shell
ssh thecodingpapa@179.252.174.112
```

연결 후, flutter 앱을 실행하는 명령어를 입력해준다.

```shell
flutter-pi --release /home/Dev/raspberry_test
```

---