import logo from './logo.svg';
import './App.css';
import { Input, PageHeader } from "antd";
import { useState } from 'react';

function App() {
  
  const defaultN = 7;
  const calculate = (nParameter) => nParameter*(nParameter + 1)/2;  
  const [result, setResult] = useState(calculate(defaultN));  

  const handleInputChange = (e) => {
    setResult(calculate(Number.parseInt(e.target.value)));
  }

  return (
    <>
    <div className="App">
      <PageHeader title={`Cумма натуральных чисел`}/>            
    </div>
    Сумма первых
    <p/>
    <Input type="number" size='middle' defaultValue={defaultN} onChange={handleInputChange}/>
    <p/>
     натуральных чисел равна {result}
  </>
  );
}

export default App;
