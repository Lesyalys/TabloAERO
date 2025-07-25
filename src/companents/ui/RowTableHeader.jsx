// import { useState, useEffect } from "react"

const RowTableHeader = ({ cycel }) => {

    // const [headcycel, setHeadcycel] = useState(0);

    const data = [
        cycel === 0 ?
            <>
                <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5 w-1/2">
                    <li className="flex items-center justify-start">Время</li>
                    <li className="flex items-center justify-center">Направление</li>
                    <li className="flex items-center justify-center">Информация</li>
                    <li className="flex items-center justify-end">Рейс</li>
                </ul>
            </>
            :
            <>
                <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5 w-1/2">
                    <li className="flex items-center justify-start">Time</li>
                    <li className="flex items-center justify-center">Direction</li>
                    <li className="flex items-center justify-center">Information</li>
                    <li className="flex items-center justify-end">Flight</li>
                </ul>
            </>
        // ,
        // <>
        //     <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5 w-1/2">
        //         <li className="flex items-center justify-start">Time</li>
        //         <li className="flex items-center justify-center">Direction</li>
        //         <li className="flex items-center justify-center">Information</li>
        //         <li className="flex items-center justify-end">Flight</li>
        //     </ul>
        // </>
        // , <>
        //     <ul className="grid grid-cols-4 mt-3 gap-20 border-2 border-[#282828] p-2.5 w-1/2">
        //         <li className="flex items-center justify-start">Time</li>
        //         <li className="flex items-center justify-center">Direction</li>
        //         <li className="flex items-center justify-center">Expected</li>
        //         <li className="flex items-center justify-end">Flight</li>
        //     </ul>
        // </>

    ]

    // useEffect(()=>{
    //     const setValidId = setInterval(() => {
    //     setHeadcycel(id => id === 0 ? 1 : 0)
    // },9000)

    // return () =>  clearInterval(setValidId)
    // }, [])

    return (
        <>
            {data[0]}
        </>

    )
}
export { RowTableHeader }