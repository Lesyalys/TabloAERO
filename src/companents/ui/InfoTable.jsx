const InfoVoice = ({ voiceInfo }) => {

    return (
        <div className="overflow-clip" >
            <marquee className="flex w-max animate-marquee-move gap-4 pl-4 text-3xl">
                <span className="inline-block rotate-225">✈</span>
                {voiceInfo}
            </marquee>
        </div>
    );
}
export { InfoVoice }