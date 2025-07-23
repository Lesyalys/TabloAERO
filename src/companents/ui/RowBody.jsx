// import '../../App.css';
// import { useState, useEffect } from "react";

const RowBody = ({ flights, index }) => {
    const isRus = index < 2 ? true : false;
    // const [contentIndex, setContentIndex] = useState(0);

    const renderFlightNumber = (flight) => {
        if (!flight?.company || !flight?.flight) return 'N/A';
        return `${flight.company} ${flight.flight}`;
    };

    const state = (flight, isRus) => {
        return isRus
            ? (flight?.landed == "ПРИ" ? "Прибыл" : (flight?.tookoff == "ВЫЛ" ? 'Вылетел' : ''))
            : (flight?.landed == "ПРИ" ? "arrived" : (flight?.tookoff == "ВЫЛ" ? 'departure' : ''))
    }
    const stateTimedelay = (flight) => {
        return (flight?.time !== flight?.timedelay ? flight?.timedelay : '')

    }
    const stateHall = (flight, isRus) => {
        return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
    }
    // const tchkbegin = (flight, isRus) => {
    //     return isRus ?
    //         (flight?.tchkbegin ? `Рег ${flight?.tchkbegin}` : '')
    //         : (flight?.tchkbegin ? `Reg ${flight?.tchkbegin}` : '')
    // }

    const content = [
        <>
            {flights.map((flight, index) => (
                index < 6 ?
                    <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                        <span className="truncate ">{flight.time}</span>
                        <span className="truncate  text-[#00b7ff] text-left">{flight?.dest?.split('%')[0]}</span>
                        <span className="truncate  text-[#ffffff] text-center">{state(flight, isRus) || stateHall(flight, isRus)}</span>
                        <span className="truncate  text-[#e7d31d] text-right">{renderFlightNumber(flight)}</span>
                    </li>
                    :
                    <li></li>
            ))}
        </>
        ,
        <>
            {flights.map((flight, index) => (
                index < 6 ?
                    <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                        <span className="truncate ">{flight.time}</span>
                        <span className="truncate  text-[#00b7ff] text-left">{flight?.dest?.split('%')[0]}</span>
                        <span className="truncate  text-[#ffffff] text-center">{stateTimedelay(flight)}</span>
                        <span className="truncate  text-[#e7d31d] text-right">{renderFlightNumber(flight)}</span>
                    </li>
                    :
                    <li></li>
            ))}
        </>
        ,
        <>
            {flights.map((flight, index) => (
                index < 6 ?
                    <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                        <span className="truncate ">{flight.time}</span>
                        <span className="truncate  text-[#00b7ff] text-left">{flight?.dest?.split('%')[1]}</span>
                        <span className="truncate  text-[#ffffff] text-center">{state(flight, isRus) || stateHall(flight, isRus)}</span>
                        <span className="truncate  text-[#e7d31d] text-right">{renderFlightNumber(flight)}</span>
                    </li>
                    :
                    <li></li>
            ))}
        </>
        ,
        <>
            {flights.map((flight, index) => (
                index < 6 ?
                    <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                        <span className="truncate ">{flight.time}</span>
                        <span className="truncate  text-[#00b7ff] text-left">{flight?.dest?.split('%')[1]}</span>
                        <span className="truncate  text-[#ffffff] text-center">{stateTimedelay(flight)}</span>
                        <span className="truncate  text-[#e7d31d] text-right">{renderFlightNumber(flight)}</span>
                    </li>
                    :
                    <li></li>
            ))}
        </>


    ]

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         // setContentIndex(prevIndex => prevIndex > content.length ? 0 :++prevIndex );
    //         setContentIndex(prevIndex => prevIndex === 0? 1 :0 );
    //     }, 9000);
    //     return () => clearInterval(intervalId);
    // }, []);


    return (
        <div className="w-1/2 mt-2.5">
            <ul className="uppercase last:mb-0 ">
                {content[index]}
            </ul>

        </div>
    )
};

export { RowBody };