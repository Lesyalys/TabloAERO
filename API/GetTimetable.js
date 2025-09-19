import axios from 'axios';

export async function GetTimetable(cb) {
    // const currentHost = window.location.origin;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://tablo.nv-aero.ru/get/xalTabloAR`,
        // url: `http://172.17.10.12:3020/get/xalTabloAR_TEST`,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            const dataJSON = JSON.stringify(response.data);
            cb(JSON.parse(dataJSON));
        })
        .catch((error) => {
            console.log(error);
        });



}