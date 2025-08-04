const InfoVoice = ({ voiceInfo, cycel }) => {
    const isRus = cycel === 0 ? true : false
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

    const currentMessage = voiceInfo[0]?.MessageTextRU

    return (
        <div className="flex flex-row overflow-clip bg-secondary/30 border border-[#2c313a] border-border rounded p-4 bg-[#21252b4d] " >
            <marquee className="flex animate-marquee-move gap-4 text-3xl ">
                {/* <span className="inline-block rotate-180">✈</span> */}
                <span>
                    {currentMessage}
                </span>
            </marquee>

        </div>
    );
}
export { InfoVoice }