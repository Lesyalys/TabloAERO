// import { useState, useEffect } from "react"

const RowTableHeader = ({index}) => {

    // const [headIndex, setHeadIndex] = useState(0);

    const data = [
        <>
            <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5 w-1/2">
                <li className="flex items-center justify-start">Время</li>
                <li className="flex items-center justify-center">Направление</li>
                <li className="flex items-center justify-center">Информация</li>
                <li className="flex items-center justify-end">Рейс</li>
            </ul>
        </>
        ,
        <>
            <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5 w-1/2">
                <li className="flex items-center justify-start">Время</li>
                <li className="flex items-center justify-center">Направление</li>
                <li className="flex items-center justify-center">Ож. время</li>
                <li className="flex items-center justify-end">Рейс</li>
            </ul>
        </>
    ]

    // useEffect(()=>{
    //     const setValidId = setInterval(() => {
    //     setHeadIndex(id => id === 0 ? 1 : 0)
    // },9000)

    // return () =>  clearInterval(setValidId)
    // }, [])

    return (
        <>
            {data[index]}
        </>

    )
}
export { RowTableHeader }