import { Component } from 'react';

export default class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log(
      `클래스 componentDidMount 실행 count의 값은 ${this.state.count}입니다.`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `클래스 componentDidUpdate 실행 count의 값은 ${this.state.count}입니다.`
    );
  }

  componentWillUnmount() {
    console.log('클래스 componentWillUnmount 실행');
  }

  render() {
    return (
      <div>
        <h1>클래스형 페이지 입니다.</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count 증가시키기
        </button>
        <div>카운트 값은{this.state.count}입니다.</div>
      </div>
    );
  }
}
