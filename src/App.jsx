import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Toggle from "./Components/Toggle/Toggle";
import DarkLightMode from "./Components/DarkLightMode/DarkLightMode";

export default function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const handleIncrement = () => setCount((counter) => counter + 1);
  const handleReset = () => setCount(0);

  const handleToggleTheme = () => setIsDark((darkmode) => !darkmode);

  const title = count === 0 ? "Click Counter" : `Klik: ${count}`;

  useEffect(() => {
    console.log("count ændrede sig:", count, "-> title:", title);
    document.title = title;
  }, [count]);

  return (
    <div className={isDark ? "app dark" : "app"}>
      <div className="page">
        <h1>{title}</h1>

        <DarkLightMode isDark={isDark} onToggle={handleToggleTheme} />

        <Counter
          count={count}
          onIncrement={handleIncrement}
          onReset={handleReset}
        />

        {count > 10 && <p>du har klikket 10 gange</p>}

        <Toggle />
      </div>
    </div>
  );
}
