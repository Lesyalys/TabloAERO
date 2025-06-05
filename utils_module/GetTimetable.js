
export function GetTimetable(){
    const res = fetch('http://172.17.7.30/FIDS/AG10.XML')
    .then (res => {console.log(res.date)})
}