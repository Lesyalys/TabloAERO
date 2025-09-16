import axios from 'axios';

export async function GetTimetableDU(cb) {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://172.17.0.19:3001/get/xalTabloDU',
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