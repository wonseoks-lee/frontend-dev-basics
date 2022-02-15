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

### link

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

### import

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

<script> 태그는 JS Engine이 실행하고 나머지 태그들은 DOM에 트리형태로 생성된다