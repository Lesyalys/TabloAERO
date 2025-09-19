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
    hasContent,
    // thr2,
    ex_scheddate,
    Codedelay
} from '../renderBodyInfo/renderBody.tsx'
// import { getImageCompany } from "../../../API/GetImageCompany";

const RowBody = ({ data, cycel }) => {
    // console.log(data)
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

    const firstArr = data.find(item => item.ex_scheddate && item.dep);
    const firstDep = data.find(item => item.ex_scheddate && item.arr);
    const firstArrToday = data.find(item => item.arr);
    const firstDepToday = data.find(item => item.dep);
    const date = new Date();
    const m = date.getMonth() + 1;
    // console.log(date.toString())
    return (
        // text-[21px]
        <div className="w-full md:w-1/2 last:mr-0">
            <ul className="uppercase last:mb-0">
                {data.map((flight, index) => (
                    <div key={index} className="colum items-start">
                        {(firstArrToday === flight || firstDepToday === flight) && (flight !== firstDep && flight !== firstArr) && (
                            <span className="truncate pl-3 flex flex-row gap-2 justify-start bg-[#3b3b3b] rounded-[3px] mt-2 mb-2">
                                {/* {flight?.ex_scheddate} */}
                                {ex_scheddate([date.getDate().toString(), m.toString()], isRus)}
                            </span>)
                        }
                        {(firstArr === flight || firstDep === flight) && (
                            <span className="truncate pl-3 flex flex-row gap-2 justify-start bg-[#3b3b3b] rounded-[3px] mt-2 mb-2">
                                {/* {flight?.ex_scheddate} */}
                                {ex_scheddate(flight?.ex_scheddate.split((".")[0]), isRus)}
                            </span>)
                        }
                        {/* {tchkbegin(flight) || tbrdbegin(flight) || checkong(flight) || boarding(flight) && */}
                        {/* {flight?.ex_scheddate &&
                            <span key={index} className="bg-gray-800">{flight?.ex_scheddate.replace(/\./g, "/")}</span>
                        } */}
                        {/* } */}
                        <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-[50%_25%_25%] p-1 items-center rounded-lg text-left  whitespace-normal break-words ${colors(flight, "border", isRus)}`}>
                            <span className=" truncate pl-1 flex flex-row gap-2 justify-start">
                                <span>
                                    {flight?.time}
                                </span>
                                <span className="text-[#7bd7fc]  whitespace-normal break-words">
                                    {cycel === 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}
                                    {flight?.thr2 && isRus && (
                                        <span> - {flight?.thr2}
                                        </span>)
                                    }
                                </span>
                            </span>
                            <span className="truncate text-[#ffffff] text-center  whitespace-normal break-words">
                                {infoMap[index]}
                            </span>
                            <span className="truncate text-[#FFCC32] text-center font-sans font-medium flex flex-row justify-end gap-1 items-center">
                                {renderFlightNumber(flight)}
                                {flight?.image ?
                                    <img src={`data:image/png;base64,${flight?.image}`} className="truncate h-16 md:h-10 hidden md:block" alt="Flight" />
                                    :
                                    <img src="./empty.png" className="truncate h-16 md:h-10 hidden md:block" alt="No image" />
                                }
                            </span>
                            {/* <span className="truncate flex justify-end"> */}
                            {/* </span> */}
                            {hasContent(flight, isRus) &&
                                (<span span className={`pl-2 rounded-lg text-start gap-1 flex text-[75%] mb-1 whitespace-normal break-words text-gray-200 col-span-3  flex-col`}>
                                    <hr className={`mt-2 border-lg  border-[#444444]`} />
                                    {getInitialInfo(flight, isRus) || stateTimedelay(flight, isRus)}
                                    {flight?.tchkbegin ? tchkbegin(flight, isRus) : checkong(flight, isRus)}
                                    {flight?.tbrdbegin ? tbrdbegin(flight, isRus) : boarding(flight, isRus)}
                                    <span className="text-red-400">
                                        {Codedelay(flight?.codedelay)}
                                    </span>
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