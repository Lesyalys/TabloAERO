import { RowBody } from './RowBody.jsx'


const RowArrivalBody = ({ index, data }) => {
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
        <RowBody flights={data} index={index} />

    )
}
export { RowArrivalBody }