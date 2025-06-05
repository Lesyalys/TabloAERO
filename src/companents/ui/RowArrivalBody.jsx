import {GetTimetable} from '../../../utils_module/GetTimetable.js'

const RowArrivalBody = () => {

    GetTimetable((cb)=>console.log(cb));
    // console.log(data)

    return (
        <>
        <div style={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            width: '50%',
            backgroundColor: '#1E293B',
            borderRadius: '10px',
            padding: '10px',
            marginTop:'10px'}}>

            <p>fdg</p>
            <p>fdg</p>
            <p>fdg</p>
        </div>
        </>
        
    )
}
export {RowArrivalBody}