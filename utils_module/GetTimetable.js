import axios from 'axios';

export async function GetTimetable(cb) {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:3000/get/xalTabloAR',
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