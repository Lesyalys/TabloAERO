import { useState, useEffect } from 'react';
import { GetTimetableDU } from '../../../utils_module/GetTimetableDU.js'
import { RowBody } from './RowBody.jsx'

const RowDepartureBody = ({index}) => {
    const [flightData, setFlightData] = useState([]);

    useEffect(() => {

        GetTimetableDU((cb) => {
            setFlightData(cb);
        });

        // const intervalId = setInterval(() => {
        //     GetTimetableDU((cb) => {
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
export { RowDepartureBody }