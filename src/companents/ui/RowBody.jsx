import { useEffect, useState } from "react";
// import { getImageCompany } from "../../../API/GetImageCompany";

const RowBody = ({ data, cycel }) => {
    const isRus = cycel === 0 ? true : false;

    const [timers, setTimers] = useState({});
    const [infoMap, setInfoMap] = useState({});

    const renderFlightNumber = (flight) => {
        if (!flight?.company || !flight?.flight) return 'N/A';
        return `${flight.company} ${flight.flight}`;
    };

    const getInitialInfo = (flight, isRus) => {
        return isRus
            ? (flight?.landed === "ПРИ" ? "Прибыл" : (flight?.tookoff === "ВЫЛ" ? 'Вылетел' : ''))
            : (flight?.landed === "ПРИ" ? "arrived" : (flight?.tookoff === "ВЫЛ" ? 'departure' : ''))
    }

    const stateTimedelay = (flight, isRus) => {
        return (
            flight?.time !== flight?.timedelay && flight?.timedelay != undefined ?
                (isRus
                    ? `Ожидается в ${flight?.timedelay}`
                    : `Expected in ${flight?.timedelay}`)
                : ''
        )

    }
    const stateHall = (flight, isRus) => {
        return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
    }
    //причина обстоятельств если есть
    // const codedelay = (flight) => {
    //     return (

    //     )
    // }

    const getDelayedInfo = (flight, isRus) => {
        return isRus ?
            (flight?.tchkbegin ? `Регистрация ${flight?.tchkbegin}` : '')
            : (flight?.tchkbegin ? `Registration ${flight?.tchkbegin}` : '')
    }
    useEffect(() => {
        const newInfoMap = {};
        const newTimers = {};

        data.forEach((flight, index) => {
            newInfoMap[index] = stateHall(flight, isRus)
            newTimers[index] = setTimeout(() => {
                setInfoMap(prev => ({
                    ...prev,
                    [index]: getInitialInfo(flight, isRus)
                }))
            }, 8000);
            newTimers[index] = setTimeout(() => {
                setInfoMap(prev => ({
                    ...prev,
                    [index]: getDelayedInfo(flight, isRus) || stateTimedelay(flight, isRus)
                }))
            }, 15000);
        })
        setInfoMap(newInfoMap)
        setTimers(prev => {
            Object.values(prev).forEach(timer => clearTimeout(timer))
            return newTimers
        });

        return () => {
            Object.values(newTimers).forEach(timer => clearTimeout(timer))
        }

    }, [data, isRus])

    return (

        <div
            className="w-1/2 mt-2.5 mr-10 last:mr-0 text-[21px]">
            <ul className="uppercase last:mb-0 ">
                {data.map((flight, index) => (
                    <>
                        {/* {flight?.ex_scheddate && <div className="w-1/2 mt-2.5 mr-10 last:mr-0">{flight?.ex_scheddate}</div>} */}
                        <li key={index}
                            className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-5 p-2 items-center rounded-lg shadow-xl border-l-5
                            ${flight?.landed === "ПРИ" || flight?.tchkbegin ? "border-green-600"
                                    : flight?.tookoff === "ВЫЛ" ? "border-yellow-600"
                                        : "border-gray-600"}`}
                        >
                            <span className="truncate">
                                <>{flight?.time}</>
                            </span>
                            <span className="truncate  text-[#00b7ff] text-left">{cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}</span>
                            <span className="truncate  text-[#ffffff] text-center" >{infoMap[index] || stateHall(flight, isRus) || stateTimedelay(flight, isRus)}</span>
                            <span className="truncate  text-[#FFCC32] text-right font-sans font-medium">{renderFlightNumber(flight)}</span>
                            <span className="truncate flex justify-end">
                                <img src={`data:image/png;base64,${flight?.image ? flight?.image : "../../../public/empty.png"} `} className="trancute h-16"></img>
                            </span>
                        </li >
                    </>
                ))}
            </ul>

        </div >

    )
};

export { RowBody };