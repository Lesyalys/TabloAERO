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
    <div className="w-1/2 mt-2.5">
      {flights.map((flight, index) => (
        <ul 
          className={`grid grid-cols-4 uppercase last:mb-0 p-2.5
                  ${index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#282828]'}`}
        key={index}
      >
          <li className="truncate"> {flight?.time || 'N/A'}</li>
          <li className="truncate text-blue-300">{renderDestination(flight)}</li>
          <li className="truncate">{renderFlightStatus(flight)}</li>
          <li className="truncate  text-amber-300">{renderFlightNumber(flight)}</li>
        </ul>
      ))}
    </div>
  );
};

export { RowBody };