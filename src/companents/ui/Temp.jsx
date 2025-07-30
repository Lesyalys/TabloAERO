// import { useState, useEffect } from "react";
// import { getTemp } from "../../../utils_module/GetTemp";

const Temp = ({ temp, cycel }) => {
    const imgTemp = temp >= 15 ?
        <img src="https://cdn-0.emojis.wiki/emoji-pics-lf/telegram/sun-telegram.gif" className="h-10 w-10" />
        :
        <img src="https://cdn-0.emojis.wiki/emoji-pics-lf/telegram/snowflake-telegram.gif" className="h-10 w-10" />

    const lenCity = cycel === 0 ? <span>Нижневартовск {temp} °C</span> : <span>Nizhnevartovsk {temp} °C</span>

    return (
        <div className="flex items-center">
            <>{imgTemp}</>
            <>{lenCity}</>
        </div>
    );
}
export { Temp }