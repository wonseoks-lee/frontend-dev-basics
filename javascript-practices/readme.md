01. Node.js

## JavaScript Runtime
 V8 자바스크립트 엔진 기반으로 빌드된 OS 레벨에서 자바스크립트 실행이 가능한 자바스크립트 런타임이다. 자체 http, net와 같은 서버 라이브러리 모듈을 이용해 비동기 방식의 채팅, 메세징 그리고 웹서버와 같은 서버사이드 네트워크 애플리케이션 개발의 플랫폼 역할로 시작되었다. 현재는 자바스크립트로 작성된 트랜스파일러, 빌드, 린팅, 압축 그리고 테스트 도구들의 실행 환경도 제공할 수 있기 때문에 복잡한 웹브라우저 애플리케이션 개발에도 활용된다.

 한편, 서버/클라이언트 개발 플랫폼 역활을 하기 위해 반드시 필요한 모듈 시스템으로 CommonJS 명세를 따르다가 v12부터 ECMAScript의 공식 표준 모듈 시스템을 사용한다. REPL(Read-Eval-Print Loop) 환경을 포함하고 있어 대화식(Interactive) 테스트 및 프로그래밍도 가능하다. 함께 설치되는 주요 도구로는 다음과 같은 것이 있다.
1.	npm(Node Package Manager)
     - 다양한 패키지와 도구들을 설치할 때 필요한 중요한 도구이다.
     - 여기서는 npm으로 패키지를 관리하는 방법과 패키지 관리 이슈들을 다룬다.
2.	npx(Node Package Executing)
     - 설치되는 패키지의 실행 스크립트를 쉽고 편하게 실행할 수 있는 도구이다.
     - 로컬 설치가 된 패키지의 실행 스크립트는  ./node_module/... 이런 형태로 실행 스크립트을 node로 실행해야 하지만 npx와 실행스크립트 이름으로만 실행할 수 있다.



## 주요 버젼
1.	2009년
	Ryan Dahl(라이언 달)이 Ajax 파일 업로드의 진행상태 표시를 위해 처음 고안해 냈다.
2.	2011년
	- 패키지 관리 툴인 npm(Node Package Manager)이 발표되었다.
	- 최초 버전은 리눅스와 macOS만 지원했지만 Microsoft와 파트너쉽을 맺고 Windows을 지원하기 시작했다.
3.	2013년
	V0.10으로 버전닝이 된 Node.js 가 공식 릴리즈 되었다. 
4.	2014년
	12월, Fedor Indutny(페도 인더트니)가 차기 릴리즈 지연과 커뮤니케이션 문제로 Node.js의 포크(v0.12)인 io.js 로 갈라지면서 두 그룹으로 나뉘게 된다.
5.	2015년
	- 9월, Node.js v0.12와 io.js v3.3은 병합되어 Node v4.0으로 다시 합쳐졌다.
	- v4.0 이후로 약 6개월 주기로 새로운 버전을 출시하고 있다. 짝수 버전의 경우 장기지원 버전(LTS) 이며 별도의 코드명을 부여받고 3년간 유지보수 대상이 된다.
6.	2019년
	4월, Node.js v12(Erbium)부터 ECMAScript 공식 모듈 시스템 사용을 실험적으로 지원하기 시작했다.
7.	최신 버전(2020년 기준)
	최신 버젼은 13.2.0 이다. LTS 버전은 12.13.1이다. 최신 버전의 기능은 불안정할 수 있으므로 안정성을 위해 LTS 버전(짝수 버젼)을 사용하는 게 좋다.



## 개발 지원
1.	비동기 프로그래밍
	처음부터 Node는 고성능 비동기 애플리케이션 작성 플랫폼으로 구상되고 설계되었다. 당연히, 자바스크립트 엔진 기반으로 개발되었기 때문에 JavaScript 비동기 프로그래밍 모델에 영향을 받아 개선되고 발전하여 왔다. 초기 프로그래밍 모델은 함수형 프로그래밍의 리액터 패턴(CPS에 기반한 코드 작성법)의 콜백함수 였다. 하지만 콜백 지옥(무한 들여쓰기, 소스코드가 대각선으로 계속 늘어지는 것)의 코드가 복잡해 지는 문제가 있다. Generator와 Promise(ECMAScript 2015)와 [async/await](http://rossboucher.com/await) 함수 지원(ECMASscipt2017)으로 비교적 쉽게 비동기 코드를 작성할 수 있다.

2.	최신 ECMAScript 표준 명세 지원
	V8 자바스크립트 엔진을 기반하고 있지만 웹브라우저 보다 조금 빨리 ECMAScript 표준 명세를 지원하고 있다. 클래스, Arrow Function, 블록 단위 변수 스코프, 상수, 템플릿 문자열 등 많은 부분이 개선된 ECMAScript2015 표준 명세뿐만 아니라 ECMAScript2019 최근 명세까지 지원한다.

3.	풀스택 개발
	프론트엔드와 백엔드를 자바스크립트로 함께 개발이 가능한 좁은 의미의 풀스택 개발이 가능하다. 데이터 표현을 위한 JSON을 풀스택 개발에서 별다른 변환 라이브러리 없이 사용할 수 있는 것도 큰 장점이다. 특히, 데이터 저장소로 [MongoDB](https://www.mongodb.com/)나 [Elasticsearch](https://www.elastic.co/products/elasticsearch)를 사용하게 되면 데이터 저장, 처리, 표현까지의 전 계층이 JSON으로 데이터 표현이 통일된다. NoSQL 뿐만 아니라 전통적인 RDBMS 지원도 한다. 데이터 저장 지원은 다음과 같다.
	
	- MongoDB 연동: [Mongoose](http://mongoosejs.com/)
	- [Redis](http://redis.io/) 연동: [node_redis](https://github.com/NodeRedis/node_redis)
	- [MySQL](https://www.mysql.com/) 연동: [node-mysql](https://github.com/redblaze/node-mysql)
	- PostgreSQL 연동: [node-postgres](https://node-postgres.com/)
	- Elasticsearch 연동: [elasticsearch.js](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)

4.	다양한 개발 도구 및 라이브러리 지원
	1)	트랜스컴파일
		서버 개발 뿐만 아니라 웹브라우저 애플리케이션 개발에도 Node.js를 사용한다. 이를 위해서는 웹브라우저에서 지원하는 JavaScript 코드로 변환이 필요한데 이를 위한 개발도구이다. Babel이 대표적이다.

	2)	코드 품질 개선
		Lint 도구들로 실행 전 작성된 코드의 문제점을 보완하기 위한 유효성 검사 도구이다. ESLint, JSLint 그리고 JSHint와 같은 도구들이 있다.
     
	3)	빌드 및 번들링
		서버와 클라이언트 애플리케이션 개발에 사용되는 도구들의 단계적 실행과 실행 과정을 자동화하는 도구이다. 자바스크립트 모듈 뿐만 아니라 다양한 리소스(CSS, Image 등) 모듈 들을 하나의 자바스크립트 번들로 생성하는 도구들이다. Grunt, Gulp 그리고 Webpack과 같은 도구들이 있다.
     
	4)	웹/모바일 애플리케이션 프레임워크
		Node.js 는 애플리케이션의 실행을 위한 플랫폼 역활만을 하기 때문에 웹 또는 모바일 애플리케이션 작성을 보다 편하고 빠르게 도와 줄 애플리케이션 프레임워크가 필요하다. [Express](https://github.com/expressjs/express)는 기본적인 웹 애플리케이션 기능으로 구성된 계층을 제공하는 프레임워크이다. Express를 기반으로 하는 [상위 수준의 많은 프레임워크](https://expressjs.com/en/resources/frameworks.html)들도 지원하고 있으며 웹애플리케이션 개발의 화면 개발에 필요한 [Jade](http://jade-lang.com/) 또는 [mustache.js](https://github.com/janl/mustache.js/) 등과 같은 템플릿 엔진도 지원한다.

	5)	프로세스 관리
		단일 프로세스보다는 실제 서비스에서는 여러 프로세스에 나눠 Node를 실행하고 모니터링 할 필요가 생긴다. Node.js 프로세스 관리 도구 [PM2](http://pm2.keymetrics.io/) 는 Node.js 다중 프로세스 실행을 도와 준다. 프로세스별로 CPU와 메모리 사용량을 모니터링도 PM2를 통해 가능하다.




## 설치(Mac OS)
 Mac에서의 Node는 대부분이 개발 환경을 위해서 설치될 것이다. 여러 버젼의 Node에서 개발할 경우 여러 버젼의 Node를 설치하고 개발 환경에 적용하는 것은 꽤 번거로운 작업이다. nvm은 이를 해결해 주는 굉장히 유용한 도구다. nvm을 설치하여 여러 버젼의 노드를 설치하도록 한다. 이는 Node 애플리케이션 운용 환경(주로 리눅스 또는 도커)에서 유용하다.

1.	설치된 Node 완전 제거하기
	```bash
	$ sudo npm uninstall npm -g
	$ sudo rm -rf /usr/local/lib/node
	$ sudo rm -rf /usr/local/lib/node_modules
    $ sudo rm -rf /var/db/receipts/org.nodejs.*
    $ sudo rm -rf /usr/local/include/node
    $ sudo rm -rf /usr/local/bin/node
    $ sudo rm -f  /usr/local/share/man/man1/node.1
    $ sudo rm -f  /usr/local/lib/dtrace/node.d
    $ sudo rm -f  /usr/local/bin/npm
    $ sudo rm -f  /opt/local/include/node
    $ sudo rm -rf /opt/local/lib/node_modules
    $ sudo rm -rf ~/.npm
    $ sudo rm -rf ~/.node-gyp
    $ brew uninstall node
    ```

2.	nvm(Node Version Manager) 설치
	여러 버전의 노드에서 실행되는 코드를 작성해야 할 필요성이 반드시 생기기 때문에 nvm을 사용하여 설치하도록 한다.
    ```bash
    $ curl https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    $ source ~/.profile (mac)
    $ source ~/.bashrc  (centos)
    $ nvm --version
    0.33.8
    $ 
    ```

3.	node 설치
	+ 안정 버젼 설치
     ```bash
     $ nvm install stable
     ```

   + 최신 버젼 설치
     ```bash
     $ nvm install node
     ```

   + 특정 버젼(v12.12.0) 설치
     ```bash
     $ nvm install v12.12.0
     ```

   + node 설치 버젼 확인하기
     ```bash
     $ nvm ls
            v12.12.0
     ->     v13.7.0
     default -> node (-> v13.7.0)
     node -> stable (-> v13.7.0) (default)
     stable -> 13.7 (-> v13.7.0) (default)
     iojs -> N/A (default)
     lts/* -> lts/erbium (-> N/A)
     lts/argon -> v4.9.1 (-> N/A)
     lts/boron -> v6.17.1 (-> N/A)
     lts/carbon -> v8.17.0 (-> N/A)
     lts/dubnium -> v10.18.1 (-> N/A)
     lts/erbium -> v12.14.1 (-> N/A)
     $
     ```

   + node 특정 버젼(v12.12.0) 사용하기

     ```bash
     $ nvm use v12.12.0
     Now using node v12.12.0 (npm v6.11.3)
     $ node -v
     v12.12.0
     $
     ```

   + node 최신 버젼 사용하기

     ```bash
     $ nvm use node
     Now using node v13.7.0 (npm v6.13.6)
     $ node -v
     v13.7.0
     
     ```

## 설치(CentOS)
 특정 버젼의 Node 애플리케이션만 운용하는 서버 환경이라면 특정 버젼의 Node만 소스 컴파일 설치하고 애플리케이션을 운용하면 베스트 일 것이다. Linux(CentOS) 에서 Node를 소스 컴파일 설치를 한다. 설치를 위해서는 Python3(정확히, 공유 라이브러리)가 설치되어 있어야 한다. [Python3 리눅스 설치 및 설정]을 참고해서 설치한다. 그리고 V8 엔진 컴파일을 위해 g++ 7.x 버젼이 필요하다. CentOS RPM 설치는 4.x까지 지원하기 때문에 별도 설치 및 설정을 해 주어야 한다.

1.	g++ 7.x 설치 및 설치

    ```bash
    # g++ --version
    g++ (GCC) 4.8.5 20150623 (Red Hat 4.8.5-39)
    Copyright (C) 2015 Free Software Foundation, Inc.
    
    # yum install centos-release-scl
    # yum install devtoolset-7-gcc*
    # scl enable devtoolset-7 bash
    # g++ --version
    Thread model: posix
    gcc version 7.3.1 20180303 (Red Hat 7.3.1-5) (GCC)
    
    ```

2.	설치
    v14.4.0 을 설치하고 설치 위치는 /usr/local/kickscar/node-v14.4.0 이다.

    ```bash
    # wget https://nodejs.org/dist/v14.4.0/node-v14.4.0.tar.gz
    # tar xvfz node-v14.4.0.tar.gz
    # ./configure --prefix=/usr/local/kickscar/node-v14.4.0
    # make & make install
    ```

3.	링크 작업

    ```bash
    # ln -s /usr/local/kickscar/node-v14.4.0 /usr/local/kickscar/node
    ```

4.	PATH 설정 (/etc/profile)

    ```
    # node 
    export PATH=$PATH:/usr/local/kickscar/node/bin
    ```

5.	설정 적용 및 설치 확인

    ```bash
    # source /etc/profile
    # node --version
    v14.3.0
    ```