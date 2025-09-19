
export const ex_scheddate = (flight, isRus) => {
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