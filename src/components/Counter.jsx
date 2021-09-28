import { useState } from 'react';
import { connect } from 'react-redux';

function Counter({ state }) {
  console.log(state);
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

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Counter);
