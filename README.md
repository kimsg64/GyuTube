# GyuTube

## 1. 프로젝트 개요

### 개요

- 유튜브 동영상 플레이어 페이지 클론 코딩 개인 프로젝트 "GyuTube"입니다.

  https://kimsg64.github.io/GyuTube/

> ![main.JPG](./markdown_image/main.JPG)

### 목표

- REST API 서버에서 데이터를 받아왔다는 전제 하에 유튜브 메인 페이지 및 동영상 페이지 화면 구현하기
- React.js의 숙련도 향상하기
- 웹 페이지의 디자인 시안에 맞추어 뷰 페이지 제작하기, 여기서는 유튜브를 분석 및 참고하여 뷰 페이지를 제작했습니다.

### 기간

- 2021.08.03 ~ 2021.09.04

### 프로젝트를 통해 배운 것

- HTML, CSS의 다양한 속성들을 공부하고 활용할 수 있게 되었습니다.
- Javascript의 이벤트 개념에 익숙해졌습니다.
- React.js의 함수형 컴포넌트를 통해 OOP의 강력한 기능인 재사용성을 직접 체험해보고, 활용할 수 있게 되었습니다.
- styled-components를 접하고 CSS in JS 방식으로 뷰 페이지를 구성할 수 있게 되었습니다.

## 2. 기술 스택

- React.js
  > 프로젝트 목표에 맞게 React.js를 이용해 뷰 페이지를 제작했습니다.
- styled-components
  > 컴포넌트 관리 효율성의 향상을 위해 이용하였으며, CSS in JS 방식에 익숙해졌습니다.
- react-router
  > 각 페이지를 개별적으로 관리하기 위해 이용했습니다.

## 3. 구현 기능

### 반응형 웹

- pc(1024px ~)

  > ![pc_main.JPG](./markdown_image/pc_main.JPG)

  > ![pc_playing.JPG](./markdown_image/pc_playing.JPG)

- tablet(801 ~ 1023px)

  > ![tablet_main.JPG](./markdown_image/tablet_main.JPG)

  > ![tablet_playing.JPG](./markdown_image/tablet_playing.JPG)

- mobile(~800px)

  > ![mobile_main.JPG](./markdown_image/mobile_main.JPG)

  > ![mobile_playing.JPG](./markdown_image/mobile_playing.JPG)

### 메인 페이지

- 메뉴 버튼 및 로고: 메뉴 버튼에는 메뉴 가이드바 토글 버튼, 로고에는 홈으로 이동하는 기능을 구현했습니다.

  > ![menu.gif](./markdown_image/menu.gif)

- 검색어 자동 완성 기능:간단한 정규표현식을 이용하여 검색어 자동 완성 기능을 구현하였습니다. 검색 창에 글자를 입력하면, 이를 포함하는 제목을 찾아 리스트를 보여줍니다.

  > ![auto.gif](./markdown_image/auto.gif)

- 검색: 검색을 실행하면 리스트에 해당하는 동영상만 필터링되어 표시됩니다.

  > ![search.gif](./markdown_image/search.gif)

- 가상 키보드: 검색어 입력 파트 내부의 키보드 아이콘을 클릭하여 가상 키보드를 이용할 수 있습니다.

  > ![virtual.gif](./markdown_image/virtual.gif)

  키보드는 tab 버튼을 통해 한국어, 영어, 일본어로 변경할 수 있습니다.

  > ![language.gif](./markdown_image/language.gif)

- 음성 인식: react-speech-kit 라이브러리를 이용하여 음성 인식 기능을 구현하였습니다.

  > ![speech.gif](./markdown_image/speech.gif)

- 필터링 기능: 동영상마다 테마가 설정되어 있어, 해당 테마를 클릭하면 일치하는 동영상만 필터링되어 화면에 표시됩니다.
  > ![filter.gif](./markdown_image/filter.gif)

### 동영상 재생 페이지

- 랜덤 재생 목록: 메인 동영상의 오른쪽에 랜덤으로 동영상 목록을 보여줍니다.
  > ![random.gif](./markdown_image/random.gif)
