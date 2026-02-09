import "./DarkLightMode.css";

export default function DarkLightMode({ isDark, onToggle }) {
  return (
    <button className="dlmButton" onClick={onToggle}>
      Skift til {isDark ? "Light" : "Dark"} mode
    </button>
  );
}