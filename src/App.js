import React from "react";
import { Clock } from "./Clock";
import Fetcher from "./Fetch";
import Input from "./Input";

const CLOCK_COMPONENT = "Clock";
const FETCH_COMPONENT = "Fetcher";
const INPUT_COMPONENT = "Input";

function ComponentSelectContainer(props) {
  return (
    <div
      className="btn btn-primary"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "20px",
      }}
    >
      {props.children}
    </div>
  );
}

function ComponentSelectButton(props) {
  const { onClick, children } = props;

  return (
    <button onClick={onClick} style={{ cursor: "pointer", fontSize: "16px" }}>
      {children}
    </button>
  );
}

function App() {
  const [component, setComponent] = React.useState(FETCH_COMPONENT);

  return (
    <React.StrictMode>
      <main className="container mx-auto px-3 pb-12">
        <ComponentSelectContainer>
          <ComponentSelectButton onClick={() => setComponent(FETCH_COMPONENT)}>
            <strong>{FETCH_COMPONENT}</strong>
          </ComponentSelectButton>
          <ComponentSelectButton onClick={() => setComponent(INPUT_COMPONENT)}>
            <strong>{INPUT_COMPONENT}</strong>
          </ComponentSelectButton>
          <ComponentSelectButton onClick={() => setComponent(CLOCK_COMPONENT)}>
            <strong>{CLOCK_COMPONENT}</strong>
          </ComponentSelectButton>
        </ComponentSelectContainer>
        {component === FETCH_COMPONENT && <Fetcher />}
        {component === INPUT_COMPONENT && <Input />}
        {component === CLOCK_COMPONENT && <Clock />}
      </main>
    </React.StrictMode>
  );
}

export default App;
