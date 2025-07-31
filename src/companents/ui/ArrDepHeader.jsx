const ArrDepHeader = ({ cycel }) => {
    // const dataDep = [
    //     <h1 className='flex flex-row gap-4 items-end'>
    //         {/* <svg width="86" height="64" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <g clipPath="url(#clip0_2547_73)">
    //                 <path d="M34.9175 27.5421C44.3037 22.6185 64.0402 12.6695 67.8967 12.2627C72.7174 11.7541 89.8557 12.738 74.4127 22.4594L63.9526 27.4236L39.8452 46.9365C37.1438 46.6035 34.2496 44.0151 44.2841 36.3257L47.4199 33.9227L14.4283 48.8763C14.0028 49.0012 12.8099 48.7417 11.4423 46.7048C10.356 46.4195 8.4858 45.3153 9.69577 43.181C8.45279 41.5963 4.5594 37.0441 -1.07039 31.5133C-0.653106 31.1712 0.647324 30.8609 2.51078 32.3569C2.67261 32.4869 2.81388 32.6005 2.93649 32.6993L13.9479 36.1671L34.9175 27.5421Z" fill="white" />
    //                 <path d="M29.5037 20.8936L51.674 18.4238L36.43 24.8742L31.2748 25.0691C25.0492 24.2601 27.5 21.9483 29.5037 20.8936Z" fill="white" />
    //                 <path d="M4.70508 60.9688H80.7051" stroke="white" strokeWidth="3" strokeLinecap="round" />
    //             </g>
    //             <defs>
    //                 <clipPath id="clip0_2547_73">
    //                     <rect width="86" height="64" fill="white" />
    //                 </clipPath>
    //             </defs>
    //         </svg> */}

    //         {cycel === 0 ? "Вылет" : "departure"}
    //     </h1>
    // ]
    const dataArr = (<h1 className='flex flex-row gap-4 items-start'>{cycel === 0 ? "Прилет" : "arrived"}</h1>)
    const dataDep = (<h1 className='flex flex-row gap-4 items-end'>{cycel === 0 ? "Вылет" : "departure"}</h1>)
    return (
        <span className='grid grid-cols-2 gap-20 uppercase text-4xl items-center '>
            {dataArr}
            {/* <span className='flex justify-center'>
                <img src='./src/assets/aero.png' className='h-[90px]' />
            </span> */}
            {dataDep}
        </span>


        // <>
        //     <div className="relative w-full h-[160px] overflow-hidden"> {/* Размер контейнера */}
        //         <video
        //             autoPlay
        //             muted
        //             loop
        //             playsInline
        //             className="absolute w-full h-full object-cover"
        //         >
        //             <source src="../../assets/plane.mp4" type="video/mp4" />
        //             Ваш браузер не поддерживает видео.
        //         </video>
        //     </div>
        //     <Time />
        // </>
    );
}
export { ArrDepHeader }