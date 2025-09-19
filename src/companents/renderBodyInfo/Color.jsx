export const colors = (flight, type) => {
    if (flight?.landed === "ПРИ") {
        return type === "border" ? "border-l-4 border-green-500" : "";
    }

    if (flight?.tookoff === "ВЫЛ") {
        return type === "border" ? "border-l-4 border-yellow-500" : "";
    }

    // Если рейс задержан (для вылетающих)
    if (flight?.timedelay && flight.dep && flight?.time !== flight?.timedelay) {
        return type === "border" ? "border-l-4 border-red-500" : "";
    }

    // Если рейс задержан (для прибывающих)
    if (flight?.timedelay && flight.arr && flight?.time !== flight?.timedelay) {
        return type === "border" ? "border-l-4 border-yellow-500" : "";
    }

    // Если идет регистрация или посадка
    if (flight?.tchkbegin || flight?.tbrdbegin) {
        return type === "border" ? "border-l-4 border-blue-500" : "";
    }

    // Стандартный серый бордер для всех остальных случаев
    return type === "border" ? "border-l-4 border-gray-500" : "";
};