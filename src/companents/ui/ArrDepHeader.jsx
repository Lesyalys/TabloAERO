// import planeArr from '../../assets/planeArr.png'
// import planeDep from '../../assets/planeDep.png'

const ArrDepHeader = ({ cycel }) => {
    return (
        <span className='grid grid-cols-2 gap-20 uppercase text-4xl items-center mt-2 mb-2'>
            <span className='flex flex-row items-center p-0 m-0'>
                {/* <img src={planeArr} alt="" width="100rm" height="100rm"></img> */}
                <h1 className='text-left'>
                    {cycel === 0 ? "Прилет" : "arrived"}</h1>
            </span>

            <span className='flex flex-row items-end'>
                {/* <img src={planeDep} alt="" width="100rm" height="100rm"></img> */}
                <h1 className='text-left'>
                    {cycel === 0 ? "Вылет" : "departures"}</h1>
            </span>
        </span>
    );
}
export { ArrDepHeader } 