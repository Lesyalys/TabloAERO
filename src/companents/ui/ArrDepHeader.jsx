// import planeArr from '/public/planeArr.png'
// import planeDep from '/public/planeDep.png'

const ArrDepHeader = ({ cycel }) => {
    return (
        <span className='grid grid-cols-2 uppercase text-4xl items-center mb-5 font-bold'>
            <span className='flex flex-row items-center p-0 m-0'>
                {/* <img src={planeArr} alt="" width="15%" height="15%"></img> */}
                <h1 className='text-left'>
                    {cycel === 0 ? "Прилет" : "arrived"}</h1>
            </span>

            <span className='flex flex-row items-center justify-end '>
                {/* justify-self-end */}
                <h1 className='text-left'>
                    {cycel === 0 ? "Вылет" : "departures"}</h1>
                {/* <img src={planeDep} alt="" width="15%" height="15%"></img> */}
            </span>
        </span>
    );
}
export { ArrDepHeader } 