export const ProgressBarCSS = () => {
    return (
        <div className="w-full bg-[#282828] rounded-full md:h-2 h-1 md:mb-2 mb-1 overflow-visible relative">

            <span className="absolute top-1/2 left-0 text-lg text-gray-600 z-5  animate-plane ">
                ✈
            </span>


            <div className="bg-[#7bd7fc71]  md:h-2 h-1 rounded-full animate-progress relative z-0" />

            <style jsx>{`
                @keyframes progress {
                    0% { transform: scaleX(0); }
                    100% { transform: scaleX(1); }
                }
                @keyframes plane {
                    0% { transform: translateY(-50%) translateX(0); }
                    100% { transform: translateY(-50%) translateX(calc(100vw - 2rem)); }
                }
                .animate-progress {
                    animation: progress 15s linear infinite;
                    transform-origin: left;
                }
                .animate-plane {
                    animation: plane 15s linear infinite;
                    transform: translateY(-50%);
                }
            `}</style>
        </div>
    );
};