import { useEffect, useState } from "react";
import {
    renderFlightNumber,
    checkong,
    boarding,
    colors,
    getInitialInfo,
    stateTimedelay,
    stateHall,
    getDelayedInfo
} from '../renderBodyInfo/renderBody.tsx'
// import { getImageCompany } from "../../../API/GetImageCompany";

const RowBody = ({ data, cycel }) => {

    console.log(data);
    const isRus = cycel === 0 ? true : false;

    const [timers, setTimers] = useState({});
    const [infoMap, setInfoMap] = useState({});

    useEffect(() => {
        const newInfoMap = {};
        const newTimers = {};

        data.forEach((flight, index) => {
            newInfoMap[index] = getDelayedInfo(flight, isRus)
            newTimers[index] = setTimeout(() => {
                setInfoMap(prev => ({
                    ...prev,
                    [index]: checkong(flight) || boarding(flight)
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
        // text-[21px]
        <div className="w-1/2 mt-2.5 mr-10 last:mr-0 text-2xl">
            <ul className="uppercase last:mb-0">
                {data.map((flight, index) => (
                    <div key={index} className="column items-start mb-2">
                        {getInitialInfo(flight, isRus) || infoMap[index] &&
                            <span className={`rounded-lg text-start font-bold p-3 pl-1 flex justify-center ${colors(flight, "bg")}`}>
                                {getInitialInfo(flight, isRus) || infoMap[index]}
                            </span>
                        }
                        <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-5 p-2 items-center rounded-lg gap-10 border-2 ${colors(flight, "border")}`}>
                            <span className="truncate">{flight?.time}</span>
                            <span className="truncate text-[#00b7ff] text-left">{cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}</span>
                            <span className="truncate text-[#ffffff] text-center">{stateHall(flight, isRus) || stateTimedelay(flight, isRus)}</span>
                            <span className="truncate text-[#FFCC32] text-center font-sans font-medium">{renderFlightNumber(flight)}</span>
                            <span className="truncate flex justify-end">
                                {flight?.image ?
                                    <img src={`data:image/png;base64,${flight?.image}`} className="trancute h-16" alt="Flight" />
                                    :
                                    <img src="../../../public/empty.png" className="trancute h-16" alt="No image" />
                                }
                            </span>
                        </li>
                    </div>
                ))}
            </ul>
        </div>

    )
};

export { RowBody };