import axios from "axios";

export async function getInfoVoice() {
    const config = {
        url: 'http://172.17.10.12:7010/get/pattern',
        method: 'get',
        maxContentLenght: Infinity
    }

    try {
        const res = await axios(config);
        const resj = res.data[0].MessageTextRU;
        // console.log(res.data[0].MessageTextRU);
        return (resj);
    } catch {
        console.error();
    }

}