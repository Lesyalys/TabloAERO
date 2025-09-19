// import { time } from "framer-motion";

export const renderFlightNumber = (flight: any) => {
    if (!flight?.company || !flight?.flight) return 'N/A';
    return `${flight.company} ${flight.flight}`;
};

export const tbrdbegin = (flight: any, isRus: any) => {
    return (
        flight?.tbrdbegin ?
            <span className="text-green-400">
                {isRus ? '• Начало посадки в ' : ' • Boarding at '}{flight?.tbrdbegin}
            </span>
            : ""
    )
}

export const tchkbegin = (flight: any, isRus: any) => {
    return (
        flight?.tbrdbegin ? <span className="text-green-400">
            {isRus ? ' • Начало регистрации в ' : ' • Registration in '}{flight?.tchkbegin}
        </span>
            : ""
    )
}

export const checkong = (flight: any, isRus: any) => {
    return (
        flight?.checking && flight?.tchkend ?
            <span className="text-yellow-400">{isRus ? ` • Регистрация заканчивается в ` : ` • Registration ends at `}{flight?.tchkend}
            </span>
            : ""
    )
}

export const boarding = (flight: any, isRus: any) => {
    return (
        flight?.boarding && flight?.tbrdend ?
            <span className="text-yellow-400">{isRus ? ` • Посадка заканчивается в ` : ` • Boarding ends at `}{flight?.tbrdend}
            </span>
            : ""
    )
}

export const desk = (flight: any, isRus: any) => {
    return (
        flight?.desk ? (isRus ? `Стойка ${flight?.desk}` : `Desk ${flight?.desk}`) : ""
    )
}


export const getInitialInfo = (flight: any, isRus: any) => {
    return (
        flight?.landed === "ПРИ"
            ? <span className="text-green-400">{isRus ? '• Прибыл' : '• arrived'}</span>
            : (flight?.tookoff === "ВЫЛ" ? <span className="text-yellow-400">{isRus ? '• Вылетел' : '• departure'}</span>
                : ''
            ))
}


export const stateTimedelay = (flight: any, isRus: any) => {
    console.log(flight?.time, flight?.timedelay)
    return (
        // flight?.time !== flight?.timedelay && flight?.timedelay != undefined ?
        flight.arr
            ? (flight?.time === flight?.timedelay)
                ? ""
                // ? <span className="text-white"> • Прилетит по расписанию</span>
                : <span className="text-yellow-400"> • Ожидается в {flight.timedelay}</span>
            : flight?.timedelay ? <span className="text-red-400">  • Задержан до {flight.timedelay}</span> : ''


    )

}

export const TimeCheck = (flight: any) => {
    return (
        (flight?.time !== flight?.timedelay) && flight?.timedelay != undefined
            ? <span className="text-white">{flight?.timedelay}<p className=" line-through flex flex-col text-gray-300">{flight?.time}</p></span>
            : <span>{flight?.time}</span>
    )
}
export const stateHall = (flight: any, isRus: any) => {
    return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
}

export const getDelayedInfo = (flight: any, isRus: any) => {
    return flight?.tchkbegin
        ? <span className="text-yellow-400">{isRus ? '• Регистрация ' : '• Registration '}{flight?.tchkbegin}</span>
        : ''
}

//Need more info
export const Codedelay = (flight: any) => {
    return (
        flight === 'Поздн.приб.%' && 'Позднее прибытие'
    )
}

// export const thr2 = (flight: any, isRus: any) => {
//     return (isRus ? (flight?.thr2 ? flight?.thr2 : "") : "")
// }

export const ex_scheddate = (flight: any, isRus: any) => {
    console.log(flight[1])

    const day = flight[0];
    const mounth = flight[1];
    const curentYear = new Date().getFullYear();
    const date = new Date(curentYear, parseInt(mounth) - 1, parseInt(day));

    const weekDays = isRus
        ? ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
        : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = isRus ? [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ]
        :
        ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]

    const monthName = months[parseInt(mounth) - 1]
    const nameWeek = weekDays[date.getDay()]
    return (
        `${day} ${monthName} • ${nameWeek}`
    )
}

export const hasContent = (flight: any, isRus: any) => {
    return (

        getInitialInfo(flight, isRus) ||
        stateTimedelay(flight, isRus) ||
        tchkbegin(flight, isRus) ||
        checkong(flight, isRus) ||
        tbrdbegin(flight, isRus) ||
        boarding(flight, isRus)
    )
}