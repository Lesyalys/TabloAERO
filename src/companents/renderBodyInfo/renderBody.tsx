export const renderFlightNumber = (flight: any) => {
    if (!flight?.company || !flight?.flight) return 'N/A';
    return `${flight.company} ${flight.flight}`;
};

export const tbrdbegin = (flight: any, isRus: any) => {
    return (
        isRus
            // ? (flight?.tbrdbegin ? ` Начало посадки в ${flight?.tbrdbegin}` : "")
            // : (flight?.tbrdbegin ? ` Start of boarding at ${flight?.tbrdbegin}` : "")
            ? (flight?.tbrdbegin ? ` • Начало посадки в ${flight?.tbrdbegin}` : "")
            : (flight?.tbrdbegin ? ` • Boarding at ${flight?.tbrdbegin}` : "")
    )
}

export const tchkbegin = (flight: any, isRus: any) => {
    return (
        isRus
            // ? (flight?.tbrdbegin ? `  Начало регистрации в ${flight?.tchkbegin}` : "")
            // : (flight?.tbrdbegin ? `  Start of registration in ${flight?.tchkbegin}` : "")
            ? (flight?.tbrdbegin ? ` • Начало регистрации в ${flight?.tchkbegin}` : "")
            : (flight?.tbrdbegin ? ` • Registration in ${flight?.tchkbegin}` : "")
    )
}

export const checkong = (flight: any, isRus: any) => {
    return (
        isRus
            ? (flight?.checking && flight?.tchkend ? ` • Регистрация заканчивается в ${flight?.tchkend}` : "")
            : (flight?.checking && flight?.tchkend ? ` • Registration ends at ${flight?.tchkend}` : "")
    )
}

export const boarding = (flight: any, isRus: any) => {
    return (
        isRus
            ? (flight?.boarding && flight?.tbrdend ? ` • Посадка заканчивается в ${flight?.tbrdend}` : "")
            : (flight?.boarding && flight?.tbrdend ? ` • Boarding ends at ${flight?.tbrdend}` : "")
    )
}

export const desk = (flight: any, isRus: any) => {
    return (
        isRus
            ? (flight?.desk ? `Стойка ${flight?.desk}` : "")
            : (flight?.desk ? `Desk ${flight?.desk}` : "")
    )
}


export const getInitialInfo = (flight: any, isRus: any) => {
    return isRus
        ? (flight?.landed === "ПРИ" ? " • Прибыл" : (flight?.tookoff === "ВЫЛ" ? ' • Вылетел' : ''))
        : (flight?.landed === "ПРИ" ? " • arrived" : (flight?.tookoff === "ВЫЛ" ? ' • departure' : ''))
}


export const stateTimedelay = (flight: any, isRus: any) => {
    return (
        // flight?.time !== flight?.timedelay && flight?.timedelay != undefined ?
        flight.arr
            ? ` • Ожидается в ${flight.timedelay}`
            : ""
        // ` • Задержан до ${flight.timedelay}`
        // flight?.tookoff === "ВЫЛ"
        //     ? ` • Expected at ${flight.timedelay}`
        //     : ` • Delayed until ${flight.timedelay}`;


    )

}
export const stateHall = (flight: any, isRus: any) => {
    return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
}

export const getDelayedInfo = (flight: any, isRus: any) => {
    return isRus ?
        (flight?.tchkbegin ? ` • Регистрация ${flight?.tchkbegin}` : '')
        : (flight?.tchkbegin ? ` • Registration ${flight?.tchkbegin}` : '')
}

export const colors = (flight: any, type: string, isRus: any) => {
    if
        (hasContent(flight, isRus)) {
        return type === "border" ? "border-l-4 border-green-800" : "bg-gradient-to-r from-[#141414] to-[#282828]";
    }
    else {
        return type === "border" ? "border-l-4 border-gray-600" : "bg-gradient-to-r from-green-800 to-gray-900";
    }
}
// export const Codedelay = (flight:any) => {
//     return (flight?.Codedelay && flight?.Codedelay) 
// }

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