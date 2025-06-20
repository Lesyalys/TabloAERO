import { useState, useEffect } from 'react';
import { GetTimetable } from '../../../utils_module/GetTimetable.js'
import { RowBody } from './RowBody.jsx'
// import '../../App.css'

const RowArrivalBody = ({index}) => {
    const [flightData, setFlightData] = useState([]);

    useEffect(() => {

        GetTimetable((cb) => {
            setFlightData(cb);
        });

        // const intervalId = setInterval(() => {
        //     GetTimetable((cb) => {
        //         console.log(cb);
        //         setFlightData(cb);
        //     });
        // }, 60000);

        // return () => clearInterval(intervalId);
    }, []);
    // console.log(data)

    return (
        <RowBody flights={flightData} index={index}/>

    )
}
export { RowArrivalBody }