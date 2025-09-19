// import { time } from "framer-motion";
import { colorStatus } from "./Color";
export const renderFlightNumber = (flight: any) => {
    if (!flight?.company || !flight?.flight) return 'N/A';
    return `${flight.company} ${flight.flight}`;
};

export const tbrdbegin = (flight: any, isRus: any) => {
    return (
        flight?.tbrdbegin ?
            <span className={`${colorStatus(flight)}`}>
                {isRus ? '• Начало посадки в ' : ' • Boarding at '}{flight?.tbrdbegin}
            </span>
            : ""
    )
}

export const tchkbegin = (flight: any, isRus: any) => {
    return (
        flight?.tchkbegin ? <span className={`${colorStatus(flight)}`}>
            {isRus ? ' • Начало регистрации в ' : ' • Registration in '}{flight?.tchkbegin}
        </span>
            : ""
    )
}

export const checkong = (flight: any, isRus: any) => {
    return (
        flight?.checking && flight?.tchkend ?
            <span className={`${colorStatus(flight)}`}>{isRus ? ` • Регистрация заканчивается в ` : ` • Registration ends at `}{flight?.tchkend}
            </span>
            : ""
    )
}

export const boarding = (flight: any, isRus: any) => {
    return (
        flight?.boarding && flight?.tbrdend ?
            <span className={`${colorStatus(flight)}`}>{isRus ? ` • Посадка заканчивается в ` : ` • Boarding ends at `}{flight?.tbrdend}
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
            ? <span className={`${colorStatus(flight)}`}>{isRus ? '• Прибыл' : '• arrived'}</span>
            : (flight?.tookoff === "ВЫЛ" ? <span className={`${colorStatus(flight)}`}>{isRus ? '• Вылетел' : '• departure'}</span>
                : (flight?.tookoff === "НЕВ" ? <span className={`${colorStatus(flight)}`}>{isRus ? '• Не вылетел' : '• Didnt take off'}</span> : '')
            ))
}


export const stateTimedelay = (flight: any, isRus: any) => {
    // console.log(flight?.time, flight?.timedelay)
    return (
        // flight?.time !== flight?.timedelay && flight?.timedelay != undefined ?
        flight.arr
            ? (flight?.time === flight?.timedelay)
                ? ""
                // ? <span className="text-white"> • Прилетит по расписанию</span>
                : <span className={`${colorStatus(flight)}`}> {isRus ? '• Ожидается в ' : '• Expected in '}{flight.timedelay}</span>
            : flight?.timedelay ? <span className={`${colorStatus(flight)}`}> {isRus ? '• Задержан до ' : '• Detained until '}{flight.timedelay}</span> : ''


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
        ? <span className={`${colorStatus(flight)}`}>{isRus ? '• Регистрация ' : '• Registration '}{flight?.tchkbegin}</span>
        : ''
}

//Need more info
export const Codedelay = (flight: any, isRus: any) => {
    let data = '';
    switch (flight) {
        case 'Поздн.приб.%':
            isRus
                ? data = ' • Позднее прибытие'
                : data = ' • Late arrival'
            break;
        case 'решение а/к%':
            isRus
                ? data = ' • Решение авиакомпании'
                : data = ' • Airline decision'
            break;
        default:
            break;
    }
    return (<span className={`${colorStatus(flight)}`}>{data}</span>)
}

// export const thr2 = (flight: any, isRus: any) => {
//     return (isRus ? (flight?.thr2 ? flight?.thr2 : "") : "")
// }

// export class checkData {
//     this.data: string;

//     const datas = (data:any) => {
//          this.data = data;
//     }
//         const firstArr = (data) => {return data.find(item => item.ex_scheddate && item.dep)};
//         const firstDep = (data) => {return data.find(item => item.ex_scheddate && item.arr)};
//         const firstArrToday = data.find(item => item.arr);
//         const firstDepToday = data.find(item => item.dep);
//         const date = new Date();
//         const m = date.getMonth() + 1;
// } 


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