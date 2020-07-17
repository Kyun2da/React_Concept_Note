import React from "react";
import "./App.css";
import Info from "./components/Info";
import UseReducer from "./components/UseReducer";
import Info2 from "./components/Info2";
import UseMemo from "./components/UseMemo";
function App() {
  return (
    <div className="App">
      {/* <Info /> */}
      <UseReducer />
      <Info2 />
      <UseMemo />
    </div>
  );
}

export default App;
