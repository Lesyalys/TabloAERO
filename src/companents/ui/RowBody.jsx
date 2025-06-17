// import '../../App.css';
import { useState, useEffect } from "react";

const RowBody = ({ flights }) => {

    const [contentIndex, setContentIndex] = useState(0);
    const [displayerContent, setDisplayerContent] = useState([]);

    const renderFlightNumber = (flight) => {
        if (!flight?.company || !flight?.flight) return 'N/A';
        return `${flight.company} ${flight.flight}`;
    };

    const state = (flight) => {
        return (flight?.landed == "ПРИ" ? "Прибыл" : (flight?.tookoff == "ВЫЛ" ? 'Вылетел' : ''))
    }
    const content = [
        <>
            {flights.map((flight, index) => (
                <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                    <span className="truncate ">{flight.time}</span>
                    <span className="truncate  text-[#00b7ff] text-left">{flight?.dest?.split('%')[0]}</span>
                    <span className="truncate  text-[#00b7ff] text-center">{state(flight) }</span>
                    {/* <li className="truncate flex items-center justify-center">{renderFlightStatus(flight)}</li> */}
                    <span className="truncate  text-[#e612b8] text-right">{renderFlightNumber(flight)}</span>
                </li>
            ))}
        </>
        ,
        <>
            {flights.map((flight, index) => (
                <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                    <span className="truncate ">{flight.time}</span>
                    <span className="truncate  text-[#00b7ff] text-left">{flight?.dest?.split('%')[1]}</span>
                    <span className="truncate  text-[#00b7ff] text-center">{state(flight) }</span>
                    {/* <li className="truncate flex items-center justify-center">{renderFlightStatus(flight)}</li> */}
                    <span className="truncate  text-[#e612b8] text-right">{renderFlightNumber(flight)}</span>
                </li>
            ))}
        </>


    ]

    useEffect(() => {
        setDisplayerContent(content[contentIndex]);
        const intervalId = setInterval(() => {
            // setContentIndex(prevIndex => prevIndex > content.length ? 0 :++prevIndex );
            setContentIndex(prevIndex => prevIndex == 0? 1 :0 );
            console.log(contentIndex);
            setDisplayerContent(content[contentIndex]);
        }, 9000);
        return () => clearInterval(intervalId);
    }, [contentIndex]);


    return (
        <div className="w-1/2 mt-2.5">
            <ul className="uppercase last:mb-0 ">
                {displayerContent}
            </ul>

        </div>
    )
};

export { RowBody };