# Web Storage(DOM Storage) API

1. HTML5에서 지원하는 저장소
1. 기전 cookie와의 차이점
    - 서버와 통신 여부
    - 지원 용량
    - AP 제공 여부
1. cookie에 대한 간단한 정보
    - cookie는 서버와 통신을 한다.
    - http는 request와 response로만 처리된다.
    - http는 request를 받으면 요청자(클라이언트)가 누구인지 알아야     responsem를 할 수 있다.
    - 그래서, http request를 할 때 작은 정보(요청자의 ip주소, 웹브라우저 정보, 키워드 등등)를 담은 패킥을 함께 전송한다. 이것인 cookie이다.
    - cookie는 만료 기한이 있는 키-값 구조로 되어 있다.
    - 크기 4KB 제한
1. Web Storage의 특징
    - Web Storage는 서버와 통신하지 않는다.
    - Web Storage는 웹 앱의 클라이언트측 데이터 저장 방법과 프로토콜을 제공한다(API).
    - Web Storage는 window 객체의 하위 객체인 localSrorage와 sessionStorage 객체로 지원한다.
    - Web Storage에 저장되는 데이터(키와 값)는 모두 문자열 형식이다. 숫자 또는 불린을 저장해도 자동으로 문자열로 형변환된다. 
    - Web Storage가 지원하는 저장 용량은 웹브라우저 별로 차이가 있다. 최소 5MB 이상 지원 (firefox 10MB, chrome 10MB, sagari 5MB). 
1. Web Storage의 종류
    - local storage: 도메인 별(정확히는 프로토콜, 호스트, 포트 모두 포함해서, 이하 출처) 저장, 웹브라우저 별로 저장, 영구 저장(단, 사용자 삭제 전까지만)
    - session storage: 인스턴스 별(탭 별) 저장, 각 인스턴스에 따른 저장 내용은 같은 출처여도 간섭하지 않는다. 
1. 웹 사용 행태에 따른 저장소 사용 사례
    - 자동 로그인을 체크하고 로그인 한다. 로그아웃하지 않는 이상 웹브라우저를 새로 열고, 시스템을 재시작해도 로그인 상태가 유지된다. -> local storage (영구 저장)
    - 인터넷 은행 로그인 상태에서 해당 페이지(탭)을 닫았다. 단, 웹브라우저는 열려 있는 상태. 그래서 새 탭을 열고 인터넷 은행 사이트로 접속하니 로그 아웃 상태이다. -> session storage (일시저장)
    - 쇼핑몰에 접속하니 광고 창이 뜬다. 해당 창에 있는 '오늘만 보기' 또는 '7일 동안 보지 않기'를 체크하고 창을 닫는다 -> cookie
1. Web Storage Object methods and property
    - 저장하기
     ```javascript
    localStorage.setItem(key, value);
    ```
    - 가져오기
    ```javascript
    localStorage.getItem(key);
    ```
    - 삭제하기
    ```javascript
    localStorage.remove(key);
    ```
    - 모두 삭제하기
    ```javascript
    localStorage.clear();
    ```
    - 항목의 개수
    ```javascript
    localStorage.length
    ```