import "./styles.css";
import Input from "./Input";

export default function App() {
  return (
    <div className="App">
      <Input renderTextBelow={(value) => <>The value is {value}</>} />
    </div>
  );
}
