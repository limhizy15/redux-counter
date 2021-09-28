import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  );
}

export default Counter;
