import './App.css';
// import { FixedSizeList as List} from 'react-window';
import { useState, useEffect } from 'react';
import { Header } from './companents/ui/Header';
import { RowTableHeader } from './companents/ui/RowTableHeader';
import { RowArrivalBody } from './companents/ui/RowArrivalBody';
import { RowDepartureBody } from './companents/ui/RowDepartureBody.jsx';

function App() {

  const [timer, setTimer] = useState(0)
  // const Row = ({index,style}) => {
  //   <div style={style}>row {index}</div>
  // }

  useEffect(() => {
    const i = setInterval(() => {
      setTimer(ind => (ind + 1) % 4)
    }, 9000)
    return () => clearInterval(i)
  }, [])
  return (
    <>
      <Header index={timer} />
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row justify-between  gap-2.5">
          <RowTableHeader index={timer} />
          <RowTableHeader index={timer} />
        </div>
        <div className="flex flex-row justify-between gap-2.5 pt-2">
          <RowArrivalBody index={timer} />
          <RowDepartureBody index={timer} />
        </div>
      </div>
    </>
  );
}

export default App;