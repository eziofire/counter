import { useState } from "react";

function App() {
  //count starts from 0
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      <h1> Counter App</h1>
      <h2> {counter}</h2>

      <button onClick={handleClick1}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
    </div>
  );
}
export default App;
