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
    desk,
    hasContent
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
        <div className="w-1/2  mr-6 last:mr-0 ">
            <ul className="uppercase last:mb-0">
                {data.map((flight, index) => (
                    <div key={index} className="colum items-start">
                        {/* {tchkbegin(flight) || tbrdbegin(flight) || checkong(flight) || boarding(flight) && */}
                        {/* {flight?.ex_scheddate &&
                            <span key={index} className="bg-gray-800">{flight?.ex_scheddate.replace(/\./g, "/")}</span>
                        } */}
                        {/* } */}
                        <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-[45%_30%_25%] p-2 items-center rounded-lg text-left  whitespace-normal break-words ${colors(flight, "border", isRus)}`}>
                            <span className=" truncate pl-3 flex flex-row gap-4 justify-start">
                                <span>
                                    {flight?.time}
                                </span>
                                <span className="text-[#00b7ff]">
                                    {cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}
                                </span>
                            </span>
                            <span className="truncate text-[#ffffff] text-end whitespace-normal break-words">
                                {infoMap[index]}
                            </span>
                            <span className="truncate text-[#FFCC32] text-center font-sans font-medium flex flex-row justify-end gap-2 items-center">
                                {renderFlightNumber(flight)}
                                {flight?.image ?
                                    <img src={`data:image/png;base64,${flight?.image}`} className="truncate h-16 md:h-10" alt="Flight" />
                                    :
                                    <img src="./empty.png" className="trancute h-16 md:h-10" alt="No image" />
                                }
                            </span>
                            {/* <span className="truncate flex justify-end"> */}
                            {/* </span> */}
                            {hasContent(flight, isRus) &&
                                (<span span className={`rounded-lg text-start gap-1 flex text-[70%] whitespace-normal break-words text-gray-200 col-span-3  flex-col`}>
                                    <hr className={`mt-2 border-lg  border-[#444444]`} />
                                    {getInitialInfo(flight, isRus) || stateTimedelay(flight, isRus)}
                                    {flight?.tchkbegin ? tchkbegin(flight, isRus) : checkong(flight, isRus)}
                                    {flight?.tbrdbegin ? tbrdbegin(flight, isRus) : boarding(flight, isRus)}
                                    {/* {stateTimedelay(flight, isRus)} */}
                                </span>)
                            }
                        </li>
                    </div>
                ))
                }
            </ul >
        </div >

    )
};

export { RowBody };