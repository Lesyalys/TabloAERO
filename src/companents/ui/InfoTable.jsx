const InfoVoice = ({ voiceInfo }) => {

    return (
        <div className="flex flex-row overflow-clip bg-secondary/30 border border-[#2c313a] border-border rounded p-4 bg-[#21252b4d]" >
            <marquee className="flex w-max animate-marquee-move gap-4 text-3xl ">
                <span className="inline-block rotate-225">✈</span>
                {voiceInfo}
            </marquee>

        </div>
    );
}
export { InfoVoice }