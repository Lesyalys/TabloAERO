import { useEffect, useState } from "react"

const InfoVoice = ({ voiceInfo, cycel }) => {
    const isRus = cycel === 0 ? true : false
    const [correntIndex, setCorrentIndex] = useState(0);

    useEffect(() => {
        if (voiceInfo.length > 1) return;
        const timer = setInterval(() => {
            setCorrentIndex(prev => (prev + 1) % voiceInfo.length)
        }, 6000);
        return clearInterval(timer)
    }, [])

    if (!voiceInfo || voiceInfo.length === 0) {
        return (
            isRus ?
                <div className="flex flex-row overflow-clip bg-secondary/30 border border-[#2c313a] border-border rounded p-4 bg-[#21252b4d] " >
                    <div className="flex w-max gap-4 text-3xl ">
                        {/* <span className="inline-block rotate-180">✈</span> */}
                        <span className="text-gray-500">
                            Окно голосовых сообщений
                        </span>
                    </div>

                </div>
                :
                <div className="flex flex-row overflow-clip bg-secondary/30 border border-[#2c313a] border-border rounded p-4 bg-[#21252b4d] " >
                    <div className="flex w-max gap-4 text-3xl ">
                        {/* <span className="inline-block rotate-180">✈</span> */}
                        <span className="text-gray-500">
                            Voice messages window
                        </span>
                    </div>

                </div>
        )
    }

    console.log(voiceInfo)
    const currentMessage = voiceInfo[correntIndex]?.MessageTextRU

    return (
        <div className="flex flex-row overflow-clip bg-secondary/30 border border-[#2c313a] border-border rounded p-4 bg-[#21252b4d] " >
            <marquee className="flex w-max animate-marquee-move gap-4 text-3xl ">
                {/* <span className="inline-block rotate-180">✈</span> */}
                <span>
                    {currentMessage}
                </span>
            </marquee>

        </div>
    );
}
export { InfoVoice }