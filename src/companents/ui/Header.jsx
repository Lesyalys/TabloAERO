import Time from './Time';

const Header = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <h1>Arrival</h1>
            <Time/>
            <h1>Departure</h1>
        </div>
    )
}

export {Header} 