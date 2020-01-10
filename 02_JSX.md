# JSX

리액트를 사용하면 웹 어플리케이션에서 사용하는 유저 인터페이스를 재사용 가능한 컴포넌트로 분리하여 작성함으로서, 프로젝트의 유지보수성을 우수하게 해준다.

여기서 JSX란 자바스크립트의 문법확장을 말한다.  React는 JSX사용을 필수로 하지는 않지만, 대부분의 사람들은 자바스크립트의 UI로 작업할 때 시각적으로 더 도움이 된다고 생각하기 때문에 리액트와 JSX가 밀접한 관련을 갖고 있다고 볼 수 있다.

여기서 JSX는 몇가지 규칙이 있다. 이제 그 규칙을 살펴보도록 하자

### 꼭 닫혀야 하는 태그

태그는 꼭 닫혀 있어야 한다. `<div>` 태그를  열었으면 `</div>` 를 통하여 태그를 꼭 닫아주어야 한다.

### 감싸져 있는 엘리먼트

두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 한다.

```react
// src/App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
      <div>
        Bye
      </div>
    );
  }
}

export default App;
```

위의 코드 처럼 실행하면 오류가난다. 따라서 아래의 코드와 같이 작성해야한다.

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </div>
    );
  }
}

export default App;
```

하지만 이렇게 작성하면 div가 너무 많아진다는 시각적 불편함이 있다. 이럴 땐 React에서는 Fragment라는 것을 사용하면 된다. 사용법은 아래와 같다.

```react
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;
```

### JSX 안에 자바스크립트 값 사용하기

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        hello {name}!
      </div>
    );
  }
}

export default App;
```

### 조건부 렌더링

JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자를 사용한다.

반면 if문을 사용할 수는 없다.(사용하려면 IIFE(즉시 실행 함수 표현)을 사용해야 한다.)

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App;
```

### style과 className

JSX에서 style과 CSS 클래스를 설정 할 때, html과는 다르다.

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };

    return <div style={style}>안녕하세요!</div>;
  }
}

export default App;
```

### 주석

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* 주석은 이렇게 */}
        <h1
          // 태그 사이에
        >리액트</h1>
      </div>
    );
  }
}

export default App;
```

