import axios from "axios";

export async function getInfoVoice() {
    const config = {
        url: 'http://172.17.10.12:7010/get/pattern',
        method: 'get',
        maxContentLenght: Infinity
    }

    try {
        const res = await axios(config);
        const resj = res.data
        return (resj);
    } catch {
        console.error();
    }

}