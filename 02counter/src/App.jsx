import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const increaseValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("Value Incremented", counter);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Value Decremented", counter);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
