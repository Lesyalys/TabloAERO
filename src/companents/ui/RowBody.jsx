// import '../../App.css';

const RowBody = ({ flights }) => {
  const renderFlightStatus = (flight) => {
    if (flight?.timedelay && flight.timedelay !== flight.time) {
      return `Ожидается в ${flight.timedelay}`;
    }
    if (flight?.trans) {
      return `Terminal ${flight.trans}`;
    }
    return flight?.landed || 'N/A';
  };

  const renderFlightNumber = (flight) => {
    if (!flight?.company || !flight?.flight) return 'N/A';
    return `${flight.company} ${flight.flight}`;
  };

  const renderDestination = (flight) => {
    return flight?.dest?.split('%')[0] || 'N/A';
  };

  return (
    <div className="w-1/2 bg-slate-800 rounded-xl p-2.5 mt-2.5">
      {flights.map((flight, index) => (
        <div 
          className="flex flex-row justify-between uppercase gap-4"
          key={index}
          style={{ marginBottom: index < flights.length - 1 ? '10px' : '0' }}
        >
          <p>{flight?.time || 'N/A'}</p>
          <p>{renderDestination(flight)}</p>
          <p>{renderFlightStatus(flight)}</p>
          <p>{renderFlightNumber(flight)}</p>
        </div>
      ))}
    </div>
  );
};

export { RowBody };