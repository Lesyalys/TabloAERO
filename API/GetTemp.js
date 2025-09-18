import axios from "axios"


export async function getTemp() {
    const currentHost = window.location.origin;
    const config = {
        method: 'get',
        url: `${currentHost}/weather`,
        maxContentLength: Infinity
    }

    try {
        const res = await axios(config);
        const temp = res.data[0].TemperatureMax;
        // console.log(temp);
        // cb(temp);
        return temp

    } catch {
        console.log('erro');

    }

}