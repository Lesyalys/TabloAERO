const ArrDepHeader = ({ cycel }) => {
    return (
        <span className='grid grid-cols-2 gap-20 uppercase text-4xl items-center mt-3 mb-3'>
            <h1 className='text-left'>{cycel === 0 ? "Прилет" : "arrived"}</h1>
            <h1 className='text-left'>{cycel === 0 ? "Вылет" : "departure"}</h1>
        </span>
    );
}
export { ArrDepHeader } 