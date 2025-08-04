import axios from "axios"


export async function getTemp() {
    const config = {
        method: 'get',
        url: 'http://172.20.0.33:7006/weather',
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