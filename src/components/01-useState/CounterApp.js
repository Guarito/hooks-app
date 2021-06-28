import React, { useState } from "react";

export const CounterApp = () => {
  const [state, setstate] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 10,
    counter4: 10,
  });

  // Obtenemos los valores que vamos a usar del state
  const { counter1, counter2 } = state;

  return (
    <main className="container">
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr className="divider" />

      <button
        className="btn btn-primary"
        onClick={() => {
          setstate({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </main>
  );
};
