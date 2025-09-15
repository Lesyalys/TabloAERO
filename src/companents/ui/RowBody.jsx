import { useEffect, useState } from "react";
import {
    renderFlightNumber,
    checkong,
    boarding,
    colors,
    getInitialInfo,
    stateTimedelay,
    stateHall,
    getDelayedInfo,
    tchkbegin,
    tbrdbegin,
    desk
} from '../renderBodyInfo/renderBody.tsx'
// import { getImageCompany } from "../../../API/GetImageCompany";

const RowBody = ({ data, cycel }) => {
    console.log(data)

    const isRus = cycel === 0 ? true : false;

    const [timers, setTimers] = useState({});
    const [infoMap, setInfoMap] = useState({});

    useEffect(() => {
        const newInfoMap = {};
        const newTimers = {};

        data.forEach((flight, index) => {
            newInfoMap[index] = stateHall(flight, isRus)
            newTimers[index] = setTimeout(() => {
                setInfoMap(prev => ({
                    ...prev,
                    [index]: flight?.desk ? desk(flight, isRus) : stateHall(flight, isRus)
                }))
            }, 8000);
            // newTimers[index] = setTimeout(() => {
            //     setInfoMap(prev => ({
            //         ...prev,
            //         [index]: getDelayedInfo(flight, isRus) || stateTimedelay(flight, isRus)
            //     }))
            // }, 15000);
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
        <div className="w-1/2  mr-5 last:mr-0 text-2xl">
            <ul className="uppercase last:mb-0">
                {data.map((flight, index) => (
                    <div key={index} className="colum items-start">
                        {/* {tchkbegin(flight) || tbrdbegin(flight) || checkong(flight) || boarding(flight) && */}
                        {/* {flight?.ex_scheddate &&
                            <span key={index} className="bg-gray-800">{flight?.ex_scheddate.replace(/\./g, "/")}</span>
                        } */}
                        <span span className={`rounded-lg text-start font-bold p-3 pl-1 flex`}>
                            {getInitialInfo(flight, isRus) || stateTimedelay(flight, isRus)}
                            {flight?.tchkbegin ? tchkbegin(flight, isRus) : checkong(flight, isRus)}
                            {flight?.tbrdbegin ? tbrdbegin(flight, isRus) : boarding(flight, isRus)}
                            {/* {stateTimedelay(flight, isRus)} */}
                        </span>
                        {/* } */}
                        <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-5 p-2 items-center rounded-lg gap-10 ${colors(flight, "border")}`}>
                            <span className="truncate pl-2">{flight?.time}</span>
                            <span className="truncate text-[#00b7ff] text-left">{cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}</span>
                            <span className="truncate text-[#ffffff] text-center">{infoMap[index]}</span>
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
                ))
                }
            </ul >
        </div >

    )
};

export { RowBody };