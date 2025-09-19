import axios from 'axios';

export async function GetTimetableDU(cb) {
    // const currentHost = window.location.origin;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        // url: `https://tablo.nv-aero.ru/get/xalTabloDU`,
        // url: `http://172.17.0.19:3001/get/xalTabloDU`,
        url: `http://172.17.10.12:3020/get/xalTabloDU_TEST`,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            const dataJSON = JSON.stringify(response.data);
            // console.log(JSON.parse(dataJSON))
            cb(JSON.parse(dataJSON));
        })
        .catch((error) => {
            console.log(error);
        });



}