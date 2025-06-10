import { Time } from './Time';

const Header = () => {
    return (
        <div 
        className='flex flex-row justify-center text-4xl items-center uppercase'>
            <h1>Вылет</h1>
            <Time />
            <h1>Прилет</h1>
        </div>
    )
}

export { Header } 