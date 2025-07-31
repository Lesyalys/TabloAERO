// import { useState, useEffect } from "react";
// import { getTemp } from "../../../utils_module/GetTemp";

const Temp = ({ temp, cycel }) => {
    const imgTemp = temp >= 15 ?
        <svg xmlns="http://www.w3.org/2000/svg" color="yellow" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            className=" text-weather-temp w-6 h-6 mr-6" ><circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        :
        <img src="https://cdn-0.emojis.wiki/emoji-pics-lf/telegram/snowflake-telegram.gif" className="h-10 w-10" />

    const colorTemp = (<span className={`${temp > 0 ? "text-yellow-300" : "text-blue-300"} font-bold`}>{temp}°C</span>)

    return (
        <div className="flex items-center pt-2">
            <>{imgTemp}</>
            <span>{cycel === 0 ? 'Нижневартовск' : 'Nizhnevartovsk'} {colorTemp}</span>
        </div>
    );
}
export { Temp }