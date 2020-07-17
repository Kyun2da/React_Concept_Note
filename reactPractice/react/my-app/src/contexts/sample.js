import React, { Component, createContext } from "react";

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
  state = {
    value: "기본값입니다."
  };
  actions = {
    setValue: value => {
      this.setState({ value });
    }
  };
  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { SampleConsumer, SampleProvider };
