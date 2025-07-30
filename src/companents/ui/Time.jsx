import { useState, useEffect, useRef } from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const lastDateRef = useRef(new Date().getDate());

    useEffect(() => {
        const updateDateTime = () => {
            const current = new Date();
            const currentDate = current.getDate();


            if (currentDate !== lastDateRef.current) {
                lastDateRef.current = currentDate;
                setDate(current.toLocaleDateString());
            }

            setTime(current.toLocaleTimeString());
        };

        updateDateTime();

        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <>

            {/* <span className='flex justify-center'>
                    <img src='./src/assets/aero.png' className='h-[90px]' />
                </span> */}
            <div className='flex flex-col justify-center items-center h-full text-5xl gap-1'>
                <h1>{date}</h1>
                <span className='flex justify-center'>
                    <img src='./src/assets/aero.png' className='h-[90px] mt-3.5 mb-3.5' />
                </span>
                <h1>{time}</h1>
            </div>

        </>
    );
};

export { Time };