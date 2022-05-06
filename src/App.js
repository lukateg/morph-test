import { useState } from "react";
import "./style.sass";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [inputs, setInputs] = useState({
    first: { valid: false, loader: "" },
    second: { valid: false, loader: "" },
    third: { valid: false, loader: "" },
    fourth: { valid: false, loader: "" },
  });

  return (
    <div className="App">
      <Header inputs={inputs} />
      <Form inputs={inputs} setInputs={setInputs} />
    </div>
  );
}

export default App;
