import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './companents/ui/Header';
import { RowTableHeader } from './companents/ui/RowTableHeader';
import { RowArrivalBody } from './companents/ui/RowArrivalBody';
import { RowDepartureBody } from './companents/ui/RowDepartureBody.jsx';

function App() {

  const [timer, setTimer] = useState(0)

  useEffect(()=>{
    const i = setInterval(() => {
      setTimer(ind => ind === 0 ? 1 : 0)
    },60000)
    return () => clearInterval(i)
  }, [])
  return (
    <>
      <Header />
      <div className="flex flex-row justify-between mt-2.5 gap-2.5">
        <RowTableHeader index={timer}/>
        <RowTableHeader index={timer}/>
      </div>
      <div className="flex flex-row justify-between mt-2.5 gap-2.5 pt-2">
        <RowArrivalBody index={timer}/>
        <RowDepartureBody index={timer}/>
      </div>
    </>
  );
}

export default App;