import React from "react";
import { SampleConsumer } from "../contexts/sample";

const Receive = () => {
  return (
    <SampleConsumer>
      {sample => <div>현재 설정된 값:{sample.state.value}</div>}
    </SampleConsumer>
  );
};

export default Receive;
