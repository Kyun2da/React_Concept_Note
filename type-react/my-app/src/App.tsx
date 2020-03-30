import React from "react";
import "./App.css";
import Clock from "./Clock";

type AppProps = {
  name: string;
};

function App({ name }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world!, {name}</h1>
        <Clock />
      </header>
    </div>
  );
}

export default App;
