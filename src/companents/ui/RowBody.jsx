const RowBody = ({ data, cycel }) => {
    const isRus = cycel === 0 ? true : false;

    const renderFlightNumber = (flight) => {
        if (!flight?.company || !flight?.flight) return 'N/A';
        return `${flight.company} ${flight.flight}`;
    };

    const state = (flight, isRus) => {
        return isRus
            ? (flight?.landed == "ПРИ" ? "Прибыл" : (flight?.tookoff == "ВЫЛ" ? 'Вылетел' : ''))
            : (flight?.landed == "ПРИ" ? "arrived" : (flight?.tookoff == "ВЫЛ" ? 'departure' : ''))
    }
    // const stateTimedelay = (flight) => {
    //     return (flight?.time !== flight?.timedelay ? flight?.timedelay : '')

    // }
    const stateHall = (flight, isRus) => {
        return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
    }

    // const tchkbegin = (flight, isRus) => {
    //     return isRus ?
    //         (flight?.tchkbegin ? `Рег ${flight?.tchkbegin}` : '')
    //         : (flight?.tchkbegin ? `Reg ${flight?.tchkbegin}` : '')
    // }

    return (
        <div className="w-1/2 mt-2.5 mr-10 last:mr-0 text-3xl">
            <ul className="uppercase last:mb-0 ">
                {data.map((flight, index) => (
                    <li className={`${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'} grid grid-cols-4 p-2.5`}>
                        <span className="truncate ">{flight.time}</span>
                        <span className="truncate  text-[#00b7ff] text-left">{cycel == 0 ? flight?.dest?.split('%')[0] : flight?.dest?.split('%')[1]}</span>
                        <span className="truncate  text-[#ffffff] text-center">{state(flight, isRus) || stateHall(flight, isRus)}</span>
                        <span className="truncate  text-[#FFCC32] text-right font-sans font-medium">{renderFlightNumber(flight)}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
};

export { RowBody };