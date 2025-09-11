import { useState, useEffect, useRef } from 'react';

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const lastDateRef = useRef(new Date().getDate());

    useEffect(() => {
        const updateDateTime = () => {
            const current = new Date();
            const currentDate = current.getDate();

            setDate(current.toLocaleDateString().replace(/\./g, '/'));
            if (currentDate !== lastDateRef.current) {
                lastDateRef.current = currentDate;
                setDate(current.toLocaleDateString().replace(/\./g, '/'));
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
            <div className='flex flex-col justify-center items-center h-full gap-1 '>
                <h1 className='font-sans text-3xl'>{date}</h1>
                <span className='flex justify-center'>
                    {/* <img src='/Tablo_1/public/aero.png' className='h-[2em] mt-3.5 mb-3.5' /> */}
                </span>
                <h1 key={time} className='mb-5 font-bold text-5xl ' >{time}</h1>
            </div>


        </>
    );
};

export { Time };