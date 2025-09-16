import axios from 'axios';

export async function GetTimetable(cb) {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://172.17.0.19:3001/get/xalTabloAR',
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