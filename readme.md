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

<script> 태그는 JS Engine이 실행하고 나머지 태그들은 DOM에 트리형태로 생성된다

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

```html
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