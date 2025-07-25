import { Time } from './Time';

const Header = ({ cycel }) => {

    const dataArr = [
        <h1 className='flex flex-col gap-4 items-start'>
            <svg width="87" height="64" viewBox="0 0 87 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2547_63)">
                    <path d="M37.9051 24.7098C47.8425 28.3963 68.4377 36.418 71.3191 39.0134C74.9209 42.2576 85.6497 55.6583 68.0949 50.6768L57.409 46.219L26.78 41.3428C25.2211 39.1116 25.2102 35.2288 37.6377 37.5477L41.5212 38.2724L8.34126 23.7418C7.96388 23.5089 7.35913 22.4484 7.95907 20.0695C7.44475 19.071 7.01514 16.9421 9.41118 16.4145C9.75829 14.4306 10.5394 8.49173 10.8871 0.607337C11.4205 0.688824 12.5208 1.44828 12.6546 3.83419C12.6662 4.0414 12.6761 4.22242 12.6846 4.37969L17.4697 14.8859L37.9051 24.7098Z" fill="white" />
                    <path d="M39.2282 16.2386L55.8899 31.0712L40.9001 24.0504L37.3079 20.3477C33.7463 15.1778 37.1041 15.4541 39.2282 16.2386Z" fill="white" />
                    <path d="M3.70508 60.9688H79.7051" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2547_63">
                        <rect width="87" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            {cycel === 0 ? "Прилет" : "arrived"}
        </h1>
    ]

    const dataDep = [
        <h1 className='flex flex-col gap-4 items-end'>
            <svg width="86" height="64" viewBox="0 0 86 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2547_73)">
                    <path d="M34.9175 27.5421C44.3037 22.6185 64.0402 12.6695 67.8967 12.2627C72.7174 11.7541 89.8557 12.738 74.4127 22.4594L63.9526 27.4236L39.8452 46.9365C37.1438 46.6035 34.2496 44.0151 44.2841 36.3257L47.4199 33.9227L14.4283 48.8763C14.0028 49.0012 12.8099 48.7417 11.4423 46.7048C10.356 46.4195 8.4858 45.3153 9.69577 43.181C8.45279 41.5963 4.5594 37.0441 -1.07039 31.5133C-0.653106 31.1712 0.647324 30.8609 2.51078 32.3569C2.67261 32.4869 2.81388 32.6005 2.93649 32.6993L13.9479 36.1671L34.9175 27.5421Z" fill="white" />
                    <path d="M29.5037 20.8936L51.674 18.4238L36.43 24.8742L31.2748 25.0691C25.0492 24.2601 27.5 21.9483 29.5037 20.8936Z" fill="white" />
                    <path d="M4.70508 60.9688H80.7051" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_2547_73">
                        <rect width="86" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            {cycel === 0 ? "Вылет" : "departure"}
        </h1>
    ]
    return (
        <div
            className='grid grid-cols-3 mt-3 gap-20 uppercase text-4xl'>
            {dataArr[0]}
            <Time />
            {dataDep[0]}
        </div>
    )
}

export { Header } 