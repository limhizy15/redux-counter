import { connect } from 'react-redux'

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => props.dispatch({ type: 'DECREMENT' })}>-</button>
      <span>{props.count}</span>
      <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  )
}

function mapStateToProps(state) {
  return { count: state }
}

export default connect(mapStateToProps)(Counter)
