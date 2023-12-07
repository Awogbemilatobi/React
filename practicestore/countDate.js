import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const today = dayjs().format("ddd MMM DD YYYY");

  function updateCount() {
    step > 0 && setCount((count) => count + step);
    step === 0 && setCount((count) => count + 1);
    step < 0 && setCount((count) => count + step);
  }

  function updateStep() {
    setStep((step) => step + 1);
  }

  function downDateStep() {
    setStep((step) => step - 1);
  }

  function downDateCount() {
    step > 0 && setCount((count) => count - step);
    step === 0 && setCount((count) => count - 1);
    step < 0 && setCount((count) => count + step);
  }

  /* Shorter Alternative
    function updateCount() {
      setCount((prevCount) => prevCount + step || 1);
    }

    function updateStep() {
      setStep((prevStep) => prevStep + 1);
    }

    function downDateStep() {
      setStep((prevStep) => prevStep - 1);
    }

    function downDateCount() {
      setCount((prevCount) => prevCount + step || 1);
    }*/

  return (
    <div className="container">
      <div>
        <button onClick={downDateStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={updateStep}>+</button>
      </div>
      <div>
        <button onClick={downDateCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={updateCount}>+</button>
      </div>
      {count === 0 && (
        <p>
          Today is {dayjs(today).add(count, "day").format("ddd MMM DD YYYY")}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)} days ago was{" "}
          {dayjs(today).add(count, "day").format("ddd MMM DD YYYY")}
        </p>
      )}
      {count > 0 && (
        <p>
          {count} days from today will be{" "}
          {dayjs(today).add(count, "day").format("ddd MMM DD YYYY")}
        </p>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
