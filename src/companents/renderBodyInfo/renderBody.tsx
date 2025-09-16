export const renderFlightNumber = (flight: any) => {
    if (!flight?.company || !flight?.flight) return 'N/A';
    return `${flight.company} ${flight.flight}`;
};

export const tbrdbegin = (flight: any, isRus: any) => {
    return (
        isRus
            // ? (flight?.tbrdbegin ? ` Начало посадки в ${flight?.tbrdbegin}` : "")
            // : (flight?.tbrdbegin ? ` Start of boarding at ${flight?.tbrdbegin}` : "")
            ? (flight?.tbrdbegin ? ` Начало посадки в ${flight?.tbrdbegin}` : "")
            : (flight?.tbrdbegin ? ` Boarding at ${flight?.tbrdbegin}` : "")
    )
}

export const tchkbegin = (flight: any, isRus: any) => {
    return (
        isRus
            // ? (flight?.tbrdbegin ? `  Начало регистрации в ${flight?.tchkbegin}` : "")
            // : (flight?.tbrdbegin ? `  Start of registration in ${flight?.tchkbegin}` : "")
            ? (flight?.tbrdbegin ? `Начало регистрации в ${flight?.tchkbegin}` : "")
            : (flight?.tbrdbegin ? `Registration in ${flight?.tchkbegin}` : "")
    )
}

export const checkong = (flight: any, isRus: any) => {
    return (
        isRus
            ? (flight?.checking && flight?.tchkend ? `Регистрация заканчивается в ${flight?.tchkend}` : "")
            : (flight?.checking && flight?.tchkend ? `Registration ends at ${flight?.tchkend}` : "")
    )
}

export const boarding = (flight: any, isRus: any) => {
    return (
        isRus
            ? (flight?.boarding && flight?.tbrdend ? ` Посадка заканчивается в ${flight?.tbrdend}` : "")
            : (flight?.boarding && flight?.tbrdend ? ` Boarding ends at ${flight?.tbrdend}` : "")
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
        ? (flight?.landed === "ПРИ" ? "Прибыл" : (flight?.tookoff === "ВЫЛ" ? 'Вылетел' : ''))
        : (flight?.landed === "ПРИ" ? "arrived" : (flight?.tookoff === "ВЫЛ" ? 'departure' : ''))
}


export const stateTimedelay = (flight: any, isRus: any) => {
    return (
        flight?.time !== flight?.timedelay && flight?.timedelay != undefined ?
            (isRus
                ? ` Ожидается в ${flight?.timedelay}`
                : ` Expected in ${flight?.timedelay}`)
            : ''
    )

}
export const stateHall = (flight: any, isRus: any) => {
    return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
}
//причина обстоятельств если есть
// const codedelay = (flight) => {
//     return (

//     )
// }

export const getDelayedInfo = (flight: any, isRus: any) => {
    return isRus ?
        (flight?.tchkbegin ? `Регистрация ${flight?.tchkbegin}` : '')
        : (flight?.tchkbegin ? `Registration ${flight?.tchkbegin}` : '')
}

export const colors = (flight: any, type: string) => {
    if (flight?.landed || flight?.tookoff || flight?.boarding || flight?.checking || flight?.tbrdbegin) {
        return type === "border" ? "border-l-4 border-green-800" : "bg-gradient-to-r from-green-800 to-gray-900";
        // } else if (flight?.tookoff === "ВЫЛ") {
        //     return type === "border" ? "border-l-4 border-yellow-600" : "bg-black";
        // } else if (flight?.checking) {
        //     return type === "border" ? "border-l-4 border-green-600" : "bg-black";
        // }
    }
    else {
        return type === "border" ? "border-l-4 border-gray-600" : "";
    }
}

export const hasContent = (flight, isRus) => {
    return (

        getInitialInfo(flight, isRus) ||
        stateTimedelay(flight, isRus) ||
        tchkbegin(flight, isRus) ||
        checkong(flight, isRus) ||
        tbrdbegin(flight, isRus) ||
        boarding(flight, isRus)
    )
}