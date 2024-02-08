import "./styles.css";
import Input from "./Input";

export default function App() {
  const showValue = (value) => <>The value is {value}</>;
  const multiplyByTen = (value) => <>The multiplied value is {value * 10}</>;
  return (
    <div className="App">
      <Input renderTextBelow={showValue} />
      <br />
      <Input renderTextBelow={multiplyByTen} />
    </div>
  );
}
