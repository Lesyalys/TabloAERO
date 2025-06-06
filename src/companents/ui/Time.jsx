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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <h1>{date}</h1>
            <h1>{time}</h1>
        </div>
    );
};

export { Time };