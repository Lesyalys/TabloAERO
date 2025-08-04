import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { Header } from './companents/ui/Header';
import { RowTableHeader } from './companents/ui/RowTableHeader';
import { RowBody } from './companents/ui/RowBody.jsx';
// import { motion } from 'framer-motion';

import { GetTimetable } from '../utils_module/GetTimetable.js'
import { GetTimetableDU } from '../utils_module/GetTimetableDU.js'


function App() {
  const [correntPage, setCorrentPage] = useState(0);
  const [cycel, setCycel] = useState(0);

  const [dataArr, setDataArr] = useState([]);
  const [dataDep, setDataDep] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    featchData();

    // const dataInterval = setInterval(featchData, 60000);

    return () => {
      // clearInterval(dataInterval);
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
    }, 15000)
    return () => clearInterval(i);
  }, [dataArr, dataDep, correntPage]);

  const pagination = (data, pages) => {
    const start = pages * 6;
    const end = start + 6
    return data.slice(start, end);
  }



  if (loading) {
    return <div className='flex justify-center pt-10 flex-col items-center'>
      <div className='pb-10 uppercase font-mono'>Loading...</div>
      <span className='w-30 h-30 rounded-full border-3 border-blue-300 border-t-transparent animate-spin'>✈</span>
    </div>
  }


  return (

    <div className='font-mono'>
      <Header cycel={cycel} />
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row justify-between  gap-2.5">
          <RowTableHeader cycel={cycel} />
          <RowTableHeader cycel={cycel} />
        </div>

        <div className="flex flex-row justify-between gap-2.5 pt-2">
          <RowBody cycel={cycel} data={pagination(dataArr, correntPage)} />
          <RowBody cycel={cycel} data={pagination(dataDep, correntPage)} />
        </div>
      </div>
    </div>


  );
}

export default App;

// <motion.div
//                 key={time}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className='mb-5 font-bold text-6xl'
//             >{time}
//             </motion.div>