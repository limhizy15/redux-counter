import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => props.dispatch({ type: 'DECREMENT' })}>-</button>
      <span>{props.count}</span>
      <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter);
