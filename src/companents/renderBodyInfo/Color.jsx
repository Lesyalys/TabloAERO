export const colors = (flight, type) => {
    if (flight?.landed === "ПРИ") {
        return type === "border" ? "border-l-4 border-green-500 " : "#05df72";
    }

    if (flight?.tookoff === "ВЫЛ") {
        return type === "border" ? "border-l-4 border-yellow-500" : "#fdc700";
    }
    //заканчиваеться регистрация и посадка
    if (flight?.tchkend || flight?.tbrdend ) {
        return type === "border" ? "border-l-4 border-green-500" : "#05df72";
    }

    // Если рейс задержан (для вылетающих)
    if (flight?.timedelay && flight.dep && flight?.time !== flight?.timedelay) {
        return type === "border" ? "border-l-4 border-yellow-400" : "#fdc700";
    }

    // Если рейс задержан (для прибывающих)
    if (flight?.timedelay && flight.arr && flight?.time !== flight?.timedelay) {
        return type === "border" ? "border-l-4 border-yellow-500" : "#fdc700";
    }

    // Если идет регистрация или посадка
    if (flight?.tchkbegin || flight?.tbrdbegin) {
        return type === "border" ? "border-l-4 border-green-500" : "#05df72";
    }

    // Стандартный серый бордер для всех остальных случаев
    return type === "border" ? "border-l-4 border-gray-500" : "";
};

export const colorStatus = (flight) => {
    const info = ((flight?.time === flight?.timedelay || flight?.timedelay) && flight?.landed !== "ПРИ")
    const infoGreen = (flight?.tbrdbegin || flight?.tchkbegin || flight?.landed === "ПРИ" || (flight?.boarding && flight?.tbrdend))
    return(
        info
        ? 'text-yellow-400'
        : infoGreen ? 'text-green-400' : ""
    )
}
// export  const colorBG = (index) => {
//     let bgColor = ''
//     if (index % 2 === 0){
//         'bg-[#141414]' : 'bg-[#282828]'
//     }
//     return bgColor
        
// }