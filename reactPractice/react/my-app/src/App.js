import React, { Fragment } from "react";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import Counter from "./Counter";
import Info from "./Info";
import RightPane from "./components/RightPane";
import LeftPane from "./components/LeftPane";
import { SampleProvider } from "./contexts/sample";
function App() {
  return (
    <div className="App">
      {/* <EventPractice />
      <EventPractice2 />
      <ValidationSample /> */}
      {/* <ScrollBox ref={ref => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button> */}
      {/* <IterationSample />
      <Counter />
      <Info /> */}
      <SampleProvider>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
      </SampleProvider>
    </div>
  );
}

export default App;
