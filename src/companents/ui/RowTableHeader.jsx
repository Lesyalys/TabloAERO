const RowTableHeader = () => {
    return (
        <>
            <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5">
                <li>Время</li>
                <li>Направление</li>
                <li>Аэрапорт</li>
                <li>Рейс</li>
            </ul>
        </>

    )
}
export { RowTableHeader }