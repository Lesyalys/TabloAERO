import { RowBody } from './RowBody.jsx'


const RowArrivalBody = ({ data, cycel }) => {
    // const [flightData, setFlightData] = useState([]);

    // useEffect(() => {

    //     GetTimetable((cb) => {
    //         setFlightData(cb);
    //     });

    // const intervalId = setInterval(() => {
    //     GetTimetable((cb) => {
    //         console.log(cb);
    //         setFlightData(cb);
    //     });
    // }, 60000);

    // return () => clearInterval(intervalId);
    // }, []);
    // console.log(data)

    return (
        <RowBody flights={data} cycel={cycel} />

    )
}
export { RowArrivalBody }