const RowTableHeader = () => {
    return (
        <>
            <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5">
                <li className="flex items-center justify-center">Время</li>
                <li className="flex items-center justify-center">Направление</li>
                <li className="flex items-center justify-center">Аэрапорт</li>
                <li className="flex items-center justify-center">Рейс</li>
            </ul>
        </>

    )
}
export { RowTableHeader }