# 유용한 사이트

Layout :  [https://www.html.it/app/uploads/blog/layoutgala/](https://www.html.it/app/uploads/blog/layoutgala/)

HTML validator : [https://validator.w3.org/](https://validator.w3.org/)

DOCTYPE 추천 : [http://www.w3.org/QA/2002/04/valid-dtd-list.html](https://www.w3.org/QA/2002/04/valid-dtd-list.html)

---
# BE Dev

1. Java 문법, 언어적 특징
2. Web Programming(Servlet Programming)
3. Spring MVC
4. Server Programming

 + RDB

  
# FE Dev

1. JavaScript(문법, 언어적특징)
    - Browser Programming(DOM)
    - Server(Web Server + Api Server App) 개발 : backend(Node.JS)
2. 개발환경(npm, webpack, test, build tools, .... Node기반)

 + HTML(Data 표현) + CSS(decoration)

---

# JS, DOM 실행과정


![js환경](https://user-images.githubusercontent.com/66767038/153982353-2091af6f-8468-46ac-a5e5-dae93540a343.png)


# HTML

![Untitled](https://user-images.githubusercontent.com/66767038/153982514-1c735951-bd02-4f27-87c2-01466b28ebe2.png)

javascript 는 동적인 것을 만들 수 있다.

HTML 은 데이터를 표현

CSS는 decoration 기능

HTML + CSS =  구조


# 상대경로

```html
<a href="./ex01.html">메인으로 돌아가기</a>
```

./ 은 현재경로를 나타낸다 이는 생략이 가능하므로 아래와 같이 표현 가능하다

( 현재 열려있는 페이지의 위치가 기준이므로 같은 위치에 있어야 접근이 가능하다 )

```html
<a href="ex01.html">메인으로 돌아가기</a>
```

상대경로는 ./ 현재부터 시작한다

```html
<img src="./../images/lightblue.jpg">
```

현재의/상위폴더의/images의/lightblue.jpg 불러오기


# 절대경로

```html
<img src="/ch02/lightblue.jpg">
```

절대경로는 /부터 시작한다


# 시맨틱 검색

h1태그가 가장 중요도가 높을 가능성이 높다. → bot이 검색하는 단어들은 대부분 h1태그임

태그를 의미있게 잘 달아야하고, CSS 는 무조건 따로 빼라

메뉴 = navigation, 주소 = address 처럼 의미있는 태그를 쓰려고 노력해야한다

```html
**<p>
		문장인데, <em>강조할 키워드</em>도 있을 거고 <br/>
		더 <strong>강조해야할 키워드</strong> 있을 겁니다.
	</p>
	<address>
		이름: 이원석<br/>
		주소: 서울 관악구<br/>
		전화번호: 010-0000-0000<br/>
	</address>
	
	<pre>
public class Person{
	private String name;
}
	</pre>**
```


# HTML Tag (Element)

```html
<style>
p{
	border: 1px solid #000
}
</style>
```

#RGB 순서대로 두글자씩 - 16진수

#세글자만 나오는 것은 한글자씩을 생략한 것이다 → #000 = #000000

원색계열은 피하는 것을 권장한다 ( 눈이 너무 아프기도하고 발작의 원인이 됨 )

```html
<em>강조3</em><em>강조4</em>
<em>강조3</em> <em>강조4</em>
<em>강조3</em>                          <em>강조4</em>
```

아무리 간격을 벌려도 스페이스바 한칸만 적용된다

붙여서 쓰면 붙힌대로 나오지만 개행, 간격을 아무리 줘도 공백 한칸(스페이스바한번)만 들어간다

block level = div로 나누고 inline level = span 으로 나눈다 

보통 3layer 쓴다 → header, container, footer

![HTML (1)](https://user-images.githubusercontent.com/66767038/153982360-14eabc11-bf48-464f-bb38-5e615d2b207d.png)


# ****CSS ( Cascading Style Sheet )****

tag + class + id 가 기본이다.

웹 표준의 원칙 : HTML 마크업을 통해 구조를 잡고, CSS로 디자인을 입힘

WebProgramming (Backend:Java&Spring. Frontend:JS&React)

RDB

Web Service(Linux[on premise, Cloud], Tomcat, apache, nginx, kafka, rabbitMQ, Redis, Elastic Search) git 

# 선택자(Selector)

tag → tag Name (1 score)

class → .class (100 score)

id → #id (10000 score)

```html
<h1 id=”header” class=”title”> ... </h1>
```

h1

.title

#header

```css
h1{
	font-size: 20px;
	color: #f00;
	width: 320px;
	border: 1px solid #000;
	padding: 20px; 
}

h2{
	font-size: 14px;
	color: #36f;
}

.headline{
	color: #333;
}

p{
	font-size: 12px;
	color: #111;
}
```

.class가 스코어가 더 높다 → tag보다 먼저 적용된다. 

위 코드는 headline과 p 태그를 같이 쓸경우, headline만 적용된다.


# 외부 CSS link / import

## link

```html
<link rel="stylesheet" type="text/css" href="css/main.css"/>
```

css폴더에 있는 main.css를 불러온다

<link/>  = css와 html 사이에서 쓴다

```css
body{
	padding: 10px 20px 30px 40px;
	margin: 10px;
	font-size: 12px;
	font-family: Arial, Helvertica, sans-serif;
	color: #333;
}
```

font-family 는 해당하는 글꼴이 없을 경우, 하나씩 하나씩 적용된다 → 여러 OS를 위한 옵션

## import

```css
@charset "UTF-8";
@import "main.css";

body{
	background-color: #ff6;
}

h1{
	color: #999;
}
```

@import = css 와 css 사이에서 쓴다

import는 상대경로를 사용한다

---

# JavaScript

## 사용법

```html
<script type="text/javascript">
function f() {
	console.log(this);
}

</script>
<input onfocus="console.log(this);" type="text" placeholder="아이디"/>
```

script 태그는 JS Engine이 실행하고 나머지 태그들은 DOM에 트리형태로 생성된다

함수에서의 this는 그 함수를 호출한 객체를 뜻한다

```html
<!-- 콘솔화면 -->
<input onfocus="console.log(this);" type="text" placeholder="아이디">
```

콘솔창에 뜨는 모습이다. 이처럼 this는 해당 함수를 호출한 객체를 뜻한다.

“” ‘’ 구분 안한다

```jsx
f = function(){
	console.log("time out");
}

finction f() {
	console.log("time out");
}
```

두 함수 선언방식 모두 같으나 f라는 객체를 만드는 것을 선호하도록 하자 (1번코드)

```jsx
console.log("1");
setTimeout(f, 2000);
console.log("2");
```

```jsx
console.log("1");
setTimeout(function(){
	console.log("time out");
}, 2000);
console.log("2");
```

함수가 객체이기 때문에 함수자체를 인자로 주는 것이 가능하다

위 코드의 결과는 1, 2, time out 순으로나온다 → 자바스크립트는 1 다음 timeout이 나오지 않는 것을 보아 비동기 방식을 채택중이라는 것을 알 수 있다.

## ****setInterval****, setTimeOut, clearInterval

```jsx
window.onload = function(){
	var elDiv = document.getElementById("box");
	elDiv.onclick = function() {
		var intervalId = setInterval(function(){
			var marginTop = parseInt(elDiv.style.marginTop);
			
			if( marginTop < -80){
				clearInterval(intervalId);
				return
			}
			
			marginTop = marginTop - 10;
			elDiv.style.marginTop = marginTop + "px";
			
			console.log(marginTop);
			
		}, 200);
	}
}
```

setInterval은 일정 간격마다 반복적으로 수행한다

setTimeout은 설정해둔 시간을 기다리고 1번 수행한다

clearInterval은 setInterval을 정지한다

## DOM Programming

```html
<!-- DOM programming -->
<script type="text/javascript">
function onFocus(el) {
	el.style.backgroundColor = "#e1e6f6";
}
function onBlur(el) {
	el.style.backgroundColor = "#fff";
}

</script>
</head>
<body>
	<form>
		<input onfocus="onFocus(this)" onblur="onBlur(this)" id="user-id" type="text" placeholder="아이디"/>
		<br/><br/>
		<input type="password" placeholder="비밀번호"/>
	</form>
</body>
</html>
```

this 를 넣어주고 java script 로 dom 객체를 불러와서 해당 객체의 배경화면 색상을 바꾼다. (onFocus)

객체클릭을 풀었을 때 dom 객체를 불러오고 해당 객체의 배경화면 색상을 흰색으로 바꾼다 (onBlur)

---

## 종속 선택자(Class를 사용한 동적 프로그래밍)

```html
<style>
input{
	background-color: #fff;
	padding: 5px;
	border: 2px solid #03cf5d;
	outline: none;
}

input.focused{
	background-color: #e1e6f6;
}
</style>
<script type="text/javascript">
function onFocus(el) {
	// el.style.backgroundColor = "#e1e6f6";
	el.className = "focused"
}
function onBlur(el) {
	//el.style.backgroundColor = "#fff";
	el.className = "";
}
</script>
</head>
<body>
	<form>
		<input 
			onfocus="onFocus(this)" 
			onblur="onBlur(this)" 
			id="user-id" 
			type="text"
			class="focused" 
			placeholder="아이디"/>
		<br/><br/>
		<input type="password" placeholder="비밀번호"/>
	</form>
</body>
```

input객체 매개변수로 받는다 → input(el)의 className에 style.input에 선언해둔 ‘focused’를 대입

```html
<style>
input{
	background-color: #fff;
	padding: 5px;
	border: 2px solid #03cf5d;
	outline: none;
}

input.focused{
	background-color: #e1e6f6;
}
input#user-id.focused{
	background-color: #e1e6f6;
}
</style>
<script type="text/javascript">
function changeBackground(el, className){
	el.className = className;
}
</script>
</head>
<body>
	<form>
		<input 
			onfocus='changeBackground(this, "focused")' 
			onblur='changeBackground(this, "")' 
			id="user-id" 
			type="text"
			class="focused" 
			placeholder="아이디"/>
		<br/><br/>
		<input 
			onfocus='changeBackground(this, "focused")' 
			onblur='changeBackground(this, "")'
			type="password"
			class="focused" 
			placeholder="비밀번호"/>
		<br/><br/>
	</form>
</body>
```

두개의 함수를 하나의 함수로 깔끔하게 바꾼 버전

input의 user-id를 id로 가지는 .focuesd class 만 적용한다

## 하위 선택자

```html
.list1 a {
	font-weight: bold;
	color: #f00;
	text-decoration: line-through;
}

.list2 a {
	font-weight: bold;
	color: #39f;
	text-decoration: none;
}

<ul class="list1">
		<li><a href="#">제주글꼴의 가장 큰 특징</a></li>
		<li>제주어를 표현할 수 있어야 한다.</li>
		<ul class="list2">
			<li><a href="#">제주 사투리(고어)를 표현할 수 있어야 한다.</a></li>
			<li>제주 글꼴이라는 느낌이 줘야 한다.</li>
			<li>기본 고딕체가 있어야 한다.</li>
			<li>기본 명조체가 있어야 한다.</li>
		</ul>
		<li>시대적인 요구에 맞춘 디자인이어야 한다.</li>
		<li>PC와 맥 둘 다 사용 가능해야 한다.</li>
	</ul>
```

![하위선택자](https://user-images.githubusercontent.com/66767038/154002455-162fae9b-19e0-4e2b-ab0e-a21a8c14faa3.png)

score가 같으면 아래것을 사용한다

## 그룹 선택자

```css
.right_box, .left_box {
	margin: 0;
	padding: 5px;
	width: 47%;
	border: 5px solid #ddd;
}

.right_box {
	float: right;
}

.left_box {
	float: left;
}
```

각각의 선택자들을 그룹으로 지어 속성을 부여

공통적인 속성 일괄적용으로 편리하게 사용

## 수도선택자

```css
a:link, a:visited, a:active {
	color: #F60;
	text-decoration: none;
}

a:hover {
	color: #06F;
	text-decoration: underline;
}

h1:before {
	content: url(images/bul1.gif);
}

h1:after {
	content: url(images/bul2.gif);
}

tr:hover {
	background-color: #FC6;
	cursor: pointer;
}
```

:hover   -> 마우스의 커서가 올라가 있는 상태
:active  -> 마우스 커서를 클릭한 순간부터 놀기 직전까지 상태
:link     -> 링크를 클릭하지 않은 그냥 링크만 되어 있는 상태
:visited -> 링크를 눌러서 방문한 후 상태
:before -> 문장이 시작되기 전
:after   -> 문장이 끝난 다음
- :hover, :active, :link, :visited 는 a 태그와 함께 링크를 데코레이션 할 때 많이 사용된다

```html
<p>
		원래는 2010년 5월 4일 공개된 글꼴이지만, <a href="#map">다시 여러분에게 안내해</a> 드리겠습니다. 첫번째로
		제가 생각한 내용은 대한민국에서 가장 유명한 관광지인 <a href="#">제주를 상징할만한 요소</a>는 많지만 디자인적으로
		통일된 무언가가 있어야 하겠다. 두번째로 <a href="#">공항부터 시작해서 관광객들이</a> 접하는 모든 곳에서 일관된
		디자인의 통일성과 상징성이 필요하다.
</p>

	<ul>
		<li>안녕하세요</li>
					....
		<li>안녕하세요</li>
	</ul>
	<h4 id="map">
		오시는 길
	</h4>
```

id를 href에 넣어두면 클릭 했을 시, 해당 객체로 바로 이동된다

# 선택자 활용 예제(ch03/nhead.html)

```css
.search-box .btn-search {
	background-color: #19ce60; 
	width: 54px;
	height: 54px;
	cursor: pointer; 
}
```

search-box에 있는 btn-search라는 search_icon이 들어갈 배경 설정

```css
.search-box .btn-search button{
	font-size: 0px;
	width: 22px;
	height: 22px;
	background: url("/ch03/images/nsplite.png") no-repeat -420px 0px / 457px 434px;
	border: none;
	cursor: pointer; 
	margin: 16px;
}
```

검색버튼 아이콘

```css
.search-box input, .search-box a{
	display: block; 
}
```

 input a 태그를 block 단위로 나열 한후(세로), float right를 주어 오른쪽정렬을 해준다(가로)

```css
.search-box input, .search-box .btn-search, .search-box a {
	float: right;
}
```

각각의 요소들을 오른쪽정렬한다는 것, header의 logo나 search-box 처럼 큰 범위들은 float: left를 주어 왼쪽 정렬

---

## margin, padding

<img width="859" alt="스크린샷 2022-02-15 오후 3 54 02" src="https://user-images.githubusercontent.com/66767038/154011629-34b222e6-e720-49d3-bf08-747ac6624bfe.png">

```html
.box1 {
	border: 1px solid #666;
	width: 300px;
	background-color: #FFC;
	
	padding-top: 10px;
	padding-right: 10px;
	padding-bottom: 10px;
	padding-left: 10px;
	
	padding: 10px 20px 30px 40px; /* T R B L */
	padding: 10px 20px 30px; /* T (R, L) B 좌우대칭*/  
	padding: 10px 20px; /* (T, B) (R, L)  */
	padding: 10px; /* (T, R, B, L) */  
	
	margin: 100px auto 300px auto;
	margin: 100px auto 300px;
	margin: 100px auto;
}
```

## max-width, max-height

```css
.box1 {
	margin:10px;
	padding:10px;
	border:1px solid #666;
	background-color: #FFC;
	
	max-width: 900px;
}
```

max-width 설정 시, 화면을 아무리 늘려도 width가 최대 900px까지만 늘려진다

```css
.box1 {
	margin:10px;
	padding:10px;
	border:1px solid #666;
	background-color: #FFC;
	
	
	max-height: 100px;
	overflow-y: scroll;
	overflow-y: auto;
	overflow-y: hidden;
}
```

max-height 설정 시, 위와 동일하나 글이 짤릴 수 있다. 박스를 넘어서 글씨 나옴

이를 overflow-y를 설정하여 해결한다

scroll : 내용이 잘림. scroll bar 나옴

auto : 내용이 잘림. 필요할때만 스크롤바 나옴

hidden : 내용이 잘림. 스크롤바를 숨김

## border

```css
.box1 {
	border: 4px dashed;

}
.box2 {
	border:4px dotted;

}
.box3 {
	border:4px double;

}
.box4 {
	border:4px groove;

}
.box5 {
	border:4px  inset;

}
.box6 {
	border:4px outset;

}

.box7 {
	border: 4px ridge;

}

.box8 {
	border: 4px solid;
	
	/* 12[3(속성)x4(방향)]가지 속성, 방향, 컬러 스타일링을 할 수 있다(예제: 그중에 3가지) */
	border-left-width: 1px;
	border-left-style: solid;
	border-left-color: green;
	
	/* 12가지 속성별 단축형 */
	border-width: 1px 2px 3px 4px; /* T R B L */
	border-width: 1px 2px 3px;  /* T (R, L) B 좌우대칭*/ 
	border-width: 1px 2px; /* (T, B) (R, L)  */
	border-width: 10px; /* (T, R, B, L) */  
	
	border-style: dash dotted solid double;
	border-color: red green blue black;
	
	/* 보통은 다음과 같은 방식을 사용한다.(4방향이 모두 width, color, style이 동일하다면...) */
	border: 1px solid #111;
	
}
.box9 {
	border: 4px none;

}
```

박스의 선을 긋는 속성, 몇개를 적느냐에 따라 동일한 속성부여 가능

## background

오른쪽 마우스를 눌렀을 때, 이미지 저장이 안뜬다면 background image로 구현한 객체다

```css
body {
	margin:0;
	padding:0;
	
	/*
	background-color: #022250;
	background-image: url("/ch03/images/back_image2.jpg"); 
	background-repeat: no-repeat; 
	background-position: 0 0;
	background-size: 500px;
	*/
	background: #022250 url("/ch03/images/back_image2.jpg") no-repeat 0 0 / 900px; 
}
```

repeat 는 사진을 어떤방향으로 반복할지를 정한다

x y 속성 갖고있고 사진의 크기에 따라 여러개를 반복적으로 찍어낸다

```css
ul.bullet{
	list-style-type: none;
	width: 300px;
	margin: 100px auto;
	
	border: 1px solid #999;
	border-radius: 10px;
	
	background: url("/ch03/images/back2.gif") no-repeat 0 0;
}

ul.bullet li {
	padding: 10px 10px 10px 25px;
	background: url("/ch03/images/bullet1.gif") no-repeat 5px 10px;
}
</style>
</head>

<body>
<ul  class="bullet">
    <li>리스트의 bullet 을 백그라운드로 사용가능합니다.</li>
    <li>리스트의 bullet 을 백그라운드로 사용가능합니다.</li>
    <li>리스트의 bullet 을 백그라운드로 사용가능합니다.</li>
    <li>리스트의 bullet 을 백그라운드로 사용가능합니다.</li>
    <li>리스트의 bullet 을 백그라운드로 사용가능합니다.</li>
    <li>리스트의 bullet 을 백그라운드로 사용가능합니다.</li>
</ul>
</body>
```

list 는 기본적으로 bullet을 갖고있는데 none으로 설정해줌으로서 없앨 수 있고

background를 사용하여 커스텀하여 사용할 수 있다.

## z-index

```css
.box{
	position: absolute;
	width: 200px;
	height: 100px;
	color: #fff;
}

.box#box_1{
	left: 250px;
	top: 100px;
	background-color: #00f;		
	z-index: 10;
}

.box#box_2{
	left: 200px;
	top: 150px;
	background-color: #f00;
	z-index: 5;
}
```

z축이 생기게하려면  position을 absolute를 줘야한다

z-index의 값에 따라 맨앞으로 보낼 객체를 선택한다

위 값은 box2가 맨 앞으로 온다

## float

문서에 사진과 그림이 있을 때, 그림을 왼쪽이나 오른쪽으로 띄워서 정렬하거나 각 객체를 오른쪽이나 왼쪽으로 정렬하여 전체문서를 배치할 때 사용

---

# 텍스트 처리방법

## 글꼴

우리나라는 맑은고딕 12px 을 보통 사용한다

1px = 72dpi 이다. 보통 인쇄할 때는 300 dpi
모든 브라우저의 기본 글꼴의 크기는 16px 를 기준으로 한다.
따라서 1em = 16px

12px = 0.75em

```css
p.text1 {
	font-family: "맑은 고딕";
	font-size: 12px;
}
p.text2 {
	font-family: "맑은 고딕";
	font-size: 0.75em;
	color:#FF6633;
}
```

em으로 설정해둔 text2는 글꼴 크기를 ‘아주크게'로 설정해두면 같이 커진다

1em = 16px → 아주크게 → 1em = 32px 

그러나, text1은 px로 고정해두었기때문에 설정을 ‘아주크게'로 바꾸어도 아무것도 변경되지 않는다

‘중간’ → 16px

접근성과 관련이 있기떄문에 em을 쓰도록하자

## line-height

```css
p.text1 {
	font-family: "맑은 고딕";
	font-size: 24px;
	line-height:28px;
}
p.text2 {
	font-family: "맑은 고딕";
	font-size: 1.75em;
	color:#FF6633;
	line-height:1.2em;
}

p.text3 {
	font-family: "맑은 고딕";
	font-size: 0.75em;
	color:#3366FF;
	line-height:14px;
	text-align:
}
```

문장과 문장 사이의 간격

‘아주 크게’로 변경 시에 p.text3는 깨진다. 그러나 em들은 안깨지고 잘나온다

em을 쓰자

## elipsis

```css
.text3{
	height: 20px;
	border: 1px solid #999;
	
	
	width: 70px;	/* 텍스트를 가지고 있는 엘리먼트의 너비 */ 
	overflow: hidden; /* 글자 길이가 너비를 넘어가는 경우 보이지 않게 처리 */ 
	text-overflow: ellipsis; /* 글자 길이가 너비를 넘어가는 경우 ... */
	white-space: nowrap /* 줄바꿈 금지 -> 한줄로 처리 */
}

<p class="text3" title="영문자는 abc로 시작됩니다.">영문자는 abc 로 시작됩니다.</p>
```

마우스를 올려뒀을때 title에 적힌 문자열이 보임

elipsis를 통해 한정된 공간에 한줄로 표시한다 ( overflow시, ... 으로 표현 )