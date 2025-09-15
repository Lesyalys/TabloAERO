export const renderFlightNumber = (flight) => {
    if (!flight?.company || !flight?.flight) return 'N/A';
    return `${flight.company} ${flight.flight}`;
};

export const checkong = (flight) => {
    return (
        flight?.checking === "РЕГ" && flight?.tchkend ? `Регистрация заканчивается в ${flight?.tchkend}` : ""
    )
}

export const boarding = (flight) => {
    return (
        flight?.boarding === "ПОС" && flight?.tbrdend ? `Посадка заканчивается в ${flight?.tbrdend}` : ""
    )
}

export const colors = (flight, type) => {
    return (flight?.landed === "ПРИ" || flight?.tchkbegin ? `${type}-green-600`
        : flight?.tookoff === "ВЫЛ" ? `${type}-yellow-600`
            : `${type}-gray-600`)
}

export const getInitialInfo = (flight, isRus) => {
    return isRus
        ? (flight?.landed === "ПРИ" ? "Прибыл" : (flight?.tookoff === "ВЫЛ" ? 'Вылетел' : ''))
        : (flight?.landed === "ПРИ" ? "arrived" : (flight?.tookoff === "ВЫЛ" ? 'departure' : ''))
}

export const stateTimedelay = (flight, isRus) => {
    return (
        flight?.time !== flight?.timedelay && flight?.timedelay != undefined ?
            (isRus
                ? `Ожидается в ${flight?.timedelay}`
                : `Expected in ${flight?.timedelay}`)
            : ''
    )

}
export const stateHall = (flight, isRus) => {
    return isRus ? `Терминал ${flight?.hall}` : `Terminal ${flight?.hall}`
}
//причина обстоятельств если есть
// const codedelay = (flight) => {
//     return (

//     )
// }

export const getDelayedInfo = (flight, isRus) => {
    return isRus ?
        (flight?.tchkbegin ? `Регистрация ${flight?.tchkbegin}` : '')
        : (flight?.tchkbegin ? `Registration ${flight?.tchkbegin}` : '')
}