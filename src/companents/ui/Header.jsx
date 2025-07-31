import { useState, useEffect, useCallback } from 'react';
import { Time } from './Time.jsx';
import { Temp } from './Temp.jsx';
import { InfoVoice } from './InfoTable.jsx';
import { ArrDepHeader } from './ArrDepHeader.jsx';
import { getInfoVoice } from '../../../utils_module/GetInfoVoice.js';
import { getTemp } from "../../../utils_module/GetTemp.js";

const Header = ({ cycel }) => {
    const [voiceInfo, setvoiceInfo] = useState('');
    const [temp, setTemp] = useState(0);
    const updateVoice = useCallback(() => {
        try {
            getInfoVoice().then(v => setvoiceInfo(v)).catch(console.error);

        } catch {
            console.error();
        }
    }, [])
    const updateTemp = useCallback(async () => {
        try {
            getTemp().then(t => setTemp(t)).catch(console.error);
        } catch {
            console.error();
        }
    }, []);
    useEffect(() => {
        updateVoice();
        updateTemp();

        const updateVoiceInterval = setInterval(updateVoice, 60000);
        const tempInterval = setInterval(updateTemp, 60000);

        return () => {
            clearInterval(updateVoiceInterval);
            clearInterval(tempInterval);
        };
    }, []);
    return (
        <>
            <div
            >
                <div className='p-2'>
                    <Temp temp={temp} cycel={cycel} />
                    <Time />
                    <InfoVoice voiceInfo={voiceInfo} />
                </div>
                <ArrDepHeader cycel={cycel} />
            </div>
        </>
    )
}

export { Header } 