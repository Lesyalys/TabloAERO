import './App.css';
// import { FixedSizeList as List} from 'react-window';
import { useState, useEffect, useCallback } from 'react';
import { GetTimetable } from '../utils_module/GetTimetable.js'
import { GetTimetableDU } from '../utils_module/GetTimetableDU.js'
// import { getTemp } from "../utils_module/GetTemp";
// import { getInfoVoice } from '../utils_module/GetInfoVoice.js';

import { Header } from './companents/ui/Header';
import { RowTableHeader } from './companents/ui/RowTableHeader';
import { RowArrivalBody } from './companents/ui/RowArrivalBody';
import { RowDepartureBody } from './companents/ui/RowDepartureBody.jsx';
// import { Temp } from './companents/ui/Temp.jsx';
// import { InfoVoice } from './companents/ui/InfoTable.jsx';


function App() {

  // const [cycel, setcycel] = useState(0);
  const [correntPage, setCorrentPage] = useState(0);
  const [cycel, setCycel] = useState(0);

  const [dataArr, setDataArr] = useState([]);
  const [dataDep, setDataDep] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [temp, setTemp] = useState(0);
  // const [voiceInfo, setvoiceInfo] = useState('');

  const featchData = useCallback(() => {
    setLoading(true)

    Promise.all([
      new Promise(res => GetTimetable(res)),
      new Promise(res => GetTimetableDU(res))
    ]).then(([dataArr, dataDep]) => {
      setDataArr(dataArr);
      setDataDep(dataDep);
      setLoading(false);
    });
  }, [])

  // const updateTemp = useCallback(async () => {
  //   try {
  //     getTemp().then(t => setTemp(t)).catch(console.error);
  //   } catch {
  //     console.error();
  //   }
  // }, []);

  // const updateVoice = useCallback(() => {
  //   try {
  //     getInfoVoice().then(v => setvoiceInfo(v)).catch(console.error);
  //   } catch {
  //     console.error();
  //   }
  // }, [])

  useEffect(() => {
    featchData();
    // updateTemp();
    // updateVoice();

    // const dataInterval = setInterval(featchData, 60000);
    // const tempInterval = setInterval(updateTemp, 60000);
    // const updateVoiceInterval = setInterval(updateVoice, 60000);

    return () => {
      // clearInterval(dataInterval);
      // clearInterval(tempInterval);
      // clearInterval(updateVoiceInterval);
    };
  }, []);
  useEffect(() => {
    const needsPagination = dataArr.length > 6 || dataDep.length > 6;
    const maxArrPags = Math.ceil(dataArr.length / 6);
    const maxDepPags = Math.ceil(dataDep.length / 6);
    const totalPage = Math.max(maxArrPags, maxDepPags, 1);

    const i = setInterval(() => {
      if (needsPagination) {
        setCorrentPage(prev => (prev + 1) % totalPage);
      }
      if (correntPage === totalPage - 1) {
        setCycel(i => i === 0 ? 1 : 0)
      }
    }, 9000)
    return () => clearInterval(i);
  }, [dataArr, dataDep, correntPage]);

  const pagination = (data, pages) => {
    const start = pages * 6;
    const end = start + 6
    return data.slice(start, end);
  }



  if (loading) {
    return <div className='flex justify-center pt-10 flex-col items-center'>
      <div className='pb-10 uppercase'>Loading...</div>
      <span className='w-30 h-30 rounded-full border-3 border-blue-300 border-t-transparent animate-spin'>✈</span>
    </div>
  }


  return (

    <div>
      {/* <Temp temp={temp} cycel={cycel} /> */}
      <Header cycel={cycel} />
      {/* <InfoVoice voiceInfo={voiceInfo} /> */}
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row justify-between  gap-2.5">
          <RowTableHeader cycel={cycel} />
          <RowTableHeader cycel={cycel} />
        </div>
        <div className="flex flex-row justify-between gap-2.5 pt-2">
          <RowArrivalBody cycel={cycel} data={pagination(dataArr, correntPage)} />
          <RowDepartureBody cycel={cycel} data={pagination(dataDep, correntPage)} />
        </div>
      </div>
    </div>


  );
}

export default App;