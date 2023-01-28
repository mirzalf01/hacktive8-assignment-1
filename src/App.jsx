import './App.css';
import './styles/custom.css'
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState(0);
  function addValue(val){
    if (value == 0) {
      setvalue(val);
    } else{
      setvalue(value+val);
    }
  }
  function allClear(){
    setvalue(0);
  }
  function clear(){
    if (value.length === 1) {
      setvalue(0);
    } else{
      setvalue(value.substring(0,value.length-1))
    }
  }
  function calculate(){
    setvalue(eval(value))
  }
  return (
    <div className="App">
      <h1>Online Calculator</h1>
      <table className='table'>
        <tr>
          <td className='darker-bg' colSpan={4}>{value}</td>
        </tr>
        <tr>
          <td className='w-25'><button className='button' onClick={() => allClear()}>AC</button></td>
          <td className='w-25'><button className='button' onClick={() => clear()}>CE</button></td>
          <td className='w-25'><button className='button' onClick={() => addValue('/')}>/</button></td>
          <td className='w-25'><button className='button' onClick={() => addValue('*')}>*</button></td>
        </tr>
        <tr>
          <td><button className='button' onClick={() => addValue('7')}>7</button></td>
          <td><button className='button' onClick={() => addValue('8')}>8</button></td>
          <td><button className='button' onClick={() => addValue('9')}>9</button></td>
          <td><button className='button' onClick={() => addValue('-')}>-</button></td>
        </tr>
        <tr>
          <td><button className='button' onClick={() => addValue('4')}>4</button></td>
          <td><button className='button' onClick={() => addValue('5')}>5</button></td>
          <td><button className='button' onClick={() => addValue('6')}>6</button></td>
          <td><button className='button' onClick={() => addValue('+')}>+</button></td>
        </tr>
        <tr>
          <td><button className='button' onClick={() => addValue('1')}>1</button></td>
          <td><button className='button' onClick={() => addValue('2')}>2</button></td>
          <td><button className='button' onClick={() => addValue('3')}>3</button></td>
          <td rowSpan={2}><button className='button' onClick={() => calculate()}>=</button></td>
        </tr>
        <tr>
          <td colSpan={2}><button className='button' onClick={() => addValue('0')}>0</button></td>
          <td><button className='button' onClick={() => addValue('.')}>.</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
