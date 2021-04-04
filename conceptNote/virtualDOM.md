# virtual DOM

리액트에서 가장 중요한 개념 중 하나인 virtual DOM에 대해 알아보도록 하자.



## virtual DOM 이란 무엇인가?

[리액트 공식문서](https://ko.reactjs.org/docs/faq-internals.html) 에서 virtual DOM을 다음과 같이 소개한다.

> Virtual DOM (VDOM)은 UI의 이상적인 또는 “가상”적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 “실제” DOM과 동기화하는 프로그래밍 개념입니다. 이 과정을 [재조정](https://ko.reactjs.org/docs/reconciliation.html)이라고 합니다.

한마디로 리액트의 virtual DOM을 사용하는 이유는 **비효율적인 DOM을 변화시키는 과정을 효율적으로 만들기 위해**서 앞 단에 virtual DOM을 사용함으로써 그 과정을 좀더 효율적으로 만들어 주는 것이다.

좀더 시각적인 이해를 위해 [유튜브 영상](https://www.youtube.com/watch?v=BYbgopx44vo)을 하나 참고하면 좋을 것 같다.



## 그렇다면 DOM은 느린가?

앞서 virtual DOM을 사용하는 이유가 DOM을 변화시키는 과정이 느리다고 설명하였다. 여기서 짚고 넘어가야할 단어가 바로 **`변화`**이다.

DOM 자체는 분명히 빠르다. 하지만 변화가 일어나게 된다면 웹 브라우저가 **CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트한다. 이 과정이 매우 느리다**는 것이다.



## 그럼 virtual DOM은 어떻게 빠른데?

그럼 또 한가지 의문이 생기게된다. 어떻게 위의 문제를 virtual DOM을 통해 빠르게 만들었을까?

컴포넌트의 state나 props가 변경될 때 새로 반환되는 엘리먼트 트리와 이전 엘리먼트 트리를 비교하여 변경점을 파악하고, 그 변경점에 대해서만 DOM을 부분적으로 일괄 갱신하는데 이 과정을 **재조정(ReConcilation)**이라고 한다. 리액트는 이 과정을 휴리스틱 알고리즘을 사용하여 기존의 트리 변화과정 O(n^3)을 O(n)에 가깝게 시간을 줄였다. 자세한 문서는 [리액트 공식문서 - 재조정](https://ko.reactjs.org/docs/reconciliation.html) 을 꼭 참고하면 좋을 것 같다.



## 그렇다면 무조건 virtual DOM을 사용하는 것이 더 빠를까?

무조건 빠른 것은 아니다. 리액트 메뉴얼에는 다음과 같은 문장이 있다.

> 우리는 다음 문제를 해결하려고 리액트를 만들었습니다.
>
> **지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하기**

즉, 업데이트가 많이 일어나는 웹에서 리액트의 성능이 좋다는 것을 의미한다.



## 정리

DOM 조작의 실제 문제는 각 조작이 레이아웃 변화, 트리 변화와 렌더링을 일으킨다. 그래서, 예를 들어 30개의 노드를 하나 하나 수정하면, 그 뜻은 30번의 (잠재적인) 레이아웃 재계산과 30번의 (잠재적인) 리렌더링을 초래한다는 것이다.

이같은 문제를 해결하기 위해 virtual DOM을 설계하게 되었고 virtual  DOM에 적용시키고 real DOM 과 비교해 바뀐 부분만 렌더링을 변화시키게 한다. 이 과정을 재조정이라고 한다.

하지만, 무조건 이러한 virtual DOM 을 사용하는 리액트 과정이 빠르다고 볼 수는 없다. 실제로 간단한 앱 같은 경우는 리액트를 사용하지 않는 바닐라 자바스크립트 앱이 더 빠를 수 있다. 따라서 리액트를 상황에 맞게 적재 적소에 활용하는 것이 좋은 판단이다.



## 참고

- 리액트를 다루는 기술
- [velopert 블로그](https://velopert.com/3236)
- [유튜브 Teck Talk: What is the Virtual DOM?](https://www.youtube.com/watch?v=d7pyEDqBDeE)
- [리액트 공식문서](https://ko.reactjs.org/docs)
- [NHN Cloud](https://meetup.toast.com/posts/110)