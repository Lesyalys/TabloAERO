const RowTableHeader = ({ cycel }) => {
    return (
        <div className="w-1/2">
            <ul className="grid grid-cols-4 mt-3">
                <li className="flex items-center justify-start">{cycel === 0 ? "Время" : "Time"}</li>
                <li className="flex items-start justify-start">{cycel === 0 ? "Направление" : "Direction"}</li>
                <li className="flex items-center justify-center">{cycel === 0 ? "Информация" : "Information"}</li>
                <li className="flex items-center justify-end">{cycel === 0 ? "Рейс" : "Flight"}</li>
            </ul>
            <hr className="mt-3 bordert-t border-[#2c313a]" />
        </div>

    )
}
export { RowTableHeader }