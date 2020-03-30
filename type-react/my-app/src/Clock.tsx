import React, { Component } from "react";

interface ClockProps {
  name: string;
}

class Clock extends Component<ClockProps> {
  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return <div></div>;
  }
}

export default Clock;
