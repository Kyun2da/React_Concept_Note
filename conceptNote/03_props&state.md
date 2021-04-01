# Props와 State에 대해서

### props란?

props는 쉽게 부모 컴포넌트가 자식 컴포넌트에게 주는 값이라고 생각할 수 있다.

먼저 새 컴포넌트를 만들어보자

```react
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

여기서 받아온 props 값은 this. 키워드를 통해 조회할 수 있다.

```react
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}

export default App;
```

App.js를 위의 코드 처럼 바꾼다면 브라우저에 안녕하세요 제이름은 리액트입니다. 라고 뜨게 된다.

여기서 props를 지정을 안해주었을 때 default props라는 것을 써서 props의 기본값을 지정해 줄 수 있다.

```react
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

여기서 이렇게 props만 받아와서 보여주기만 하는 컴포넌트의 경우에는 더 간편한 문법으로 작성할 수 있는 방법이 있다. 바로, 함수형태로 작성하는 것이다. 

```react
import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;
```

함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은, state 와 LifeCycle 이 빠져있다는 점이다. 그래서, 컴포넌트 초기 마운트가 아주 미세하게 빠르고, 메모리 자원을 덜 사용한다. 미세한 차이이니, 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없다.

### state란?

동적인 데이터를 다룰때 사용하는 것이 바로 state이다.

```react
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

위의 코드는 +버튼과 -버튼을 이용하여 숫자를 1씩 늘리고 줄이는 코드이다. 이렇게 값을 동적으로 변경할 필요가 있을 때는 state를 쓴다.