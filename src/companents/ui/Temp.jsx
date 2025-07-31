// import { useState, useEffect } from "react";
// import { getTemp } from "../../../utils_module/GetTemp";

const Temp = ({ temp, cycel }) => {
    const imgTemp = temp >= 15 ?
        <svg xmlns="http://www.w3.org/2000/svg" color="yellow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun text-weather-temp w-6 h-6 mr-6" data-lov-id="src/components/FlightBoard.tsx:92:10" data-lov-name="Sun" data-component-path="src/components/FlightBoard.tsx" data-component-line="92" data-component-file="FlightBoard.tsx" data-component-name="Sun" data-component-content="%7B%22className%22%3A%22text-weather-temp%20w-6%20h-6%22%7D"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
        :
        <img src="https://cdn-0.emojis.wiki/emoji-pics-lf/telegram/snowflake-telegram.gif" className="h-10 w-10" />

    const colorTemp = temp > 0 ? <span className="text-yellow-300">{temp} °C</span> : <span className="text-blue-300">{temp} °C</span>
    const lenCity = cycel === 0 ? <span>Нижневартовск {colorTemp}</span> : <span>Nizhnevartovsk  {colorTemp}</span>

    return (
        <div className="flex items-center pt-2">
            <>{imgTemp}</>
            <>{lenCity}</>
        </div>
    );
}
export { Temp }