// import { useState, useEffect } from "react";
// import { getTemp } from "../../../API/GetTemp";
import { Time } from "./Time";

const Temp = ({ temp, cycel }) => {
    const imgTemp = temp >= 0 ?
        <svg xmlns="http://www.w3.org/2000/svg" color="#ffdf20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            className=" w-10 h-10" ><circle cx="12" cy="12" r="4"></circle>
            <path path d="M12 2v2" ></path >
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
        </svg >
        :
        <svg xmlns="http://www.w3.org/2000/svg" color="#8ec5ff" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="w-10 h-10"
            data-lov-id="src/components/FlightBoard.tsx:92:10" data-lov-name="Snowflake"
            data-component-path="src/components/FlightBoard.tsx" data-component-line="92" data-component-file="FlightBoard.tsx"
            data-component-name="Snowflake" data-component-content="%7B%22className%22%3A%22text-weather-temp%20w-6%20h-6%22%7D">
            <line x1="2" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="22"></line>
            <path d="m20 16-4-4 4-4"></path>
            <path d="m4 8 4 4-4 4"></path>
            <path d="m16 4-4 4-4-4"></path>
            <path d="m8 20 4-4 4 4"></path></svg>

    const colorTemp = (<span className={`${temp > 0 ? "text-yellow-300" : "text-blue-300"} font-bold`}>{temp}°C</span>)

    return (
        <div className="flex items-center pt-2 gap-2 justify-between">
            <div className="flex items-center gap-2">
                <>{imgTemp}</>
                <span>{cycel === 0 ? 'Нижневартовск' : 'Nizhnevartovsk'} {colorTemp}</span>
            </div>
            <Time />
        </div>
    );
}
export { Temp }