import './App.css';
import useToggle from './custom/useToggle';
import useCounter from './custom/useCounter';

function App() {
  const { valueToggle, toggle, setFalse, setTrue } = useToggle(true);
  const { valueCounter, reset, plusOne, minusOne } = useCounter(10);
  return (
    <div id="box">
      <section style={{ border: '1px solid' }}>
        <p>toggle hook</p>
        <h2>{String(valueToggle)}</h2>
        <button onClick={toggle}>toggle</button>
        <button onClick={setTrue}>true</button>
        <button onClick={setFalse}>false</button>
      </section>
      <section style={{ border: '1px solid' }}>
        <p>counter hook</p>
        <h2>{String(valueCounter)}</h2>
        <button onClick={reset}>reset</button>
        <button onClick={plusOne}>+ 1</button>
        <button onClick={minusOne}>- 1</button>
      </section>
    </div>
  );
}

export default App;
