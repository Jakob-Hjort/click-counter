import { useState } from "react";

export default function Counter({ count, onIncrement, onReset }) {
  return (
    <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
      <p>Der er klikket: <strong>{count}</strong> gange</p>

      <button onClick={onIncrement}>Klik mig</button>

      <button onClick={onReset} style={{ marginLeft: 12 }}>
        Nulstil
      </button>
    </div>
  );
}