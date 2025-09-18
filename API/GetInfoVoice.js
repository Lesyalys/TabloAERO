import axios from "axios";

export async function getInfoVoice() {
    const currentHost = window.location.origin;
    const config = {
        url: `${currentHost}/get/pattern`,
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