import './App.css';
import { Header } from './companents/ui/Header';
import { RowTableHeader } from './companents/ui/RowTableHeader';
import { RowArrivalBody } from './companents/ui/RowArrivalBody';
import { RowDepartureBody } from './companents/ui/RowDepartureBody.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-between mt-2.5 gap-2.5">
        <RowTableHeader />
        <RowTableHeader />
      </div>
      <div className="flex flex-row justify-between gap-2.5">
        <RowArrivalBody />
        <RowDepartureBody />
      </div>
    </>
  );
}

export default App;