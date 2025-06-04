import './App.css'
import { Header } from './companents/ui/Header'
import { RowArrivalHeader } from './companents/ui/RowArrivalHeader'
import { RowArrivalBody } from './companents/ui/RowArrivalBody'

function App() {

  return (
    <>
    <Header/>
      <RowArrivalHeader/>
        <RowArrivalBody/>
        <RowArrivalBody/>
        <RowArrivalBody/>
        <RowArrivalBody/>
    </>
  )
}

export default App
