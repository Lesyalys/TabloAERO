import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './companents/ui/Header';
import { RowTableHeader } from './companents/ui/RowTableHeader';
import { RowBody } from './companents/ui/RowBody.jsx';
import { AnimatePresence, motion } from 'framer-motion';

import { GetTimetable } from '../API/GetTimetable.js'
import { GetTimetableDU } from '../API/GetTimetableDU.js'
import { getImageCompanies } from '../API//GetImageCompany.js'
import { ProgressBarCSS } from './companents/ui/ProgressBarCSS.jsx';

function App() {
  const [correntPage, setCorrentPage] = useState(0);
  const [cycel, setCycel] = useState(0);
  const [data, setData] = useState({ arr: [], dep: [], image: '' });
  const [loading, setLoading] = useState(true);
  // const [progress, setProgress] = useState(0);

  const featchData = async () => {
    try {
      const [arr, dep] = await Promise.all([
        new Promise(res => GetTimetable(res)),
        new Promise(res => GetTimetableDU(res)),
      ]);
      const allCompanies = [
        ...new Set([
          ...arr.map(item => item.company),
          ...dep.map(item => item.company)
        ])
      ].filter(company => company);

      const companyImage = await getImageCompanies(allCompanies);

      const imageMap = Object.fromEntries(companyImage.map(({ company, image }) => [company, image]))


      const arrImage = arr.map(item => ({
        ...item,
        image: imageMap[item.company],
        arr: true,
        dep: false
      }))

      const depImage = dep.map(item => ({
        ...item,
        image: imageMap[item.company],
        arr: false,
        dep: true
      }))

      setData(prev => ({
        ...prev,
        arr: JSON.stringify(prev.arr) === JSON.stringify(arr) ? prev.arr : arrImage,
        dep: JSON.stringify(prev.dep) === JSON.stringify(dep) ? prev.dep : depImage
        // image: arr ? arrImage : depImage
      }));
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    } finally {
      if (loading) setLoading(false);
    }
  };

  useEffect(() => {
    featchData();
    const dataInterval = setInterval(featchData, 60000);
    return () => {
      clearInterval(dataInterval);
    };
  }, []);

  useEffect(() => {
    const needsPagination = data.arr.length > 6 || data.dep.length > 6;
    const maxArrPags = Math.ceil(data.arr.length / 6);
    const maxDepPags = Math.ceil(data.dep.length / 6);
    const totalPage = Math.max(maxArrPags, maxDepPags, 1);

    // setProgress(0);

    const i = setInterval(() => {
      console.log("paginastion")
      if (needsPagination) {
        setCorrentPage(prev => {
          const nextPage = (prev + 1) % totalPage;
          if (nextPage === 0) {
            // const [cycel, setCycel] = useState(0);
            setCycel(i => i === 0 ? 1 : 0)
          }
          return nextPage;
        });
      }
    }, 15000)

    // const setIntervali = setInterval(() => {
    //   setProgress((i) => {
    //     if (i > 100) {
    //       return 0;
    //     } else {
    //       return i + (100 / (15000 / 100));
    //     }

    //   });
    // }, 100)
    return () => { clearInterval(i) };
  }, [data.arr, data.dep]);

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
    <AnimatePresence mode='wait'>

      <div >
        <ProgressBarCSS />
        <span className='hidden md:block'>
          <Header cycel={cycel} />
        </span>
        <motion.div
          key={`${cycel}-${correntPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2.5">
          <div className="flex flex-row justify-between ">
            {/* <RowTableHeader cycel={cycel} /> */}
            {/* <RowTableHeader cycel={cycel} /> */}
          </div>

          <div className="flex flex-col md:w-full justify-between gap-2.5 md:text-[18px] md:flex-row text-[12px]">
            {/* <div className='w-full]'> */}
            <span className='block uppercase md:hidden'>
              <h1>{cycel === 0 ? "Прилет" : "arrived"}</h1>
            </span>
            <RowBody cycel={cycel} data={pagination(data.arr, correntPage)} />
            {/* </div> */}
            {/* <div className='w-full'> */}
            <span className='block uppercase md:hidden'>
              <h1>{cycel === 0 ? "Вылет" : "departures"}</h1>
            </span>
            <RowBody cycel={cycel} data={pagination(data.dep, correntPage)} />
            {/* </div> */}
          </div>
        </motion.div>
      </div>

    </AnimatePresence>

  );
}

export default App;

{/* <motion.div
                key={time}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='mb-5 font-bold text-6xl'
            >{time}
            </motion.div> */}