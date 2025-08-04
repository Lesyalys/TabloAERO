import { useEffect, useState } from "react";

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
    // const codedelay = (flight, isRus) => {
    //     return (
    //         isRus ?
    //             flight?.codedelay ===
    //         :

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
                    [index]: getDelayedInfo(flight, isRus) || stateTimedelay(flight, isRus) || getInitialInfo(flight, isRus)
                }))
            }, 10000);
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
            className="w-1/2 mt-2.5 mr-10 last:mr-0 text-3xl">
            <ul className="uppercase last:mb-0 ">
                {data.map((flight, index) => (
                    <li key={index}
                        className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                        <span className="truncate ">{flight.time}</span>
                        <span className="truncate  text-[#00b7ff] text-left">{cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}</span>
                        <span className="truncate  text-[#ffffff] text-center" >{infoMap[index] || stateHall(flight, isRus) || stateTimedelay(flight, isRus)}</span>
                        <span className="truncate  text-[#FFCC32] text-right font-sans font-medium">{renderFlightNumber(flight)}</span>
                    </li>
                ))}
            </ul>

        </div>

        // <motion.div
        // className="w-1/2 mt-2.5 mr-10 last:mr-0 text-3xl"}
        // >
        //    <span className="truncate ">{flight.time}</span>
        //     <span className="truncate  text-[#00b7ff] text-left">{cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}</span>
        //     <span className="truncate  text-[#ffffff] text-center" >{infoMap[index] || stateHall(flight, isRus) || stateTimedelay(flight, isRus)}</span>
        //     <span className="truncate  text-[#FFCC32] text-right font-sans font-medium">{renderFlightNumber(flight)}</span>

        // </motion.div>


    )
};

export { RowBody };