const RowTableHeader = ({ cycel }) => {
    const data = (
        <>
            <ul className="grid grid-cols-4 mt-3 w-1/2">
                <li className="flex items-center justify-start">{cycel === 0 ? "Время" : "Time"}</li>
                <li className="flex items-start justify-start">{cycel === 0 ? "Направление" : "Direction"}</li>
                <li className="flex items-center justify-center">{cycel === 0 ? "Информация" : "Information"}</li>
                <li className="flex items-center justify-end">{cycel === 0 ? "Рейс" : "Flight"}</li>
            </ul>
            <hr />
        </>
    )

    return (
        <>
            {data}
        </>

    )
}
export { RowTableHeader }