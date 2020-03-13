import React, { Component } from "react";
import { SampleConsumer } from "../contexts/sample";

class Send extends Component {
  state = {
    input: ""
  };

  componentDidMount() {
    this.setState({
      input: this.props.value
    });
  }
  handleChange = e => {
    this.setState({ input: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.setValue(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    );
  }
}

const SendsContainer = () => (
  <SampleConsumer>
    {({ state, actions }) => (
      <Send value={state.value} setValue={actions.setValue} />
    )}
  </SampleConsumer>
);

export default SendsContainer;
