import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '50px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start} className="btn btn-success">Check In</button> <span>{" "}</span>
      <button onClick={pause} className="btn btn-info">Check Out</button> <span>{" "}</span>
      <button onClick={resume} className="btn btn-primary">Resume</button> <span>{" "}</span>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 32400);
        restart(time)
      }} className="btn btn-danger">Restart</button>
    </div>
  );
}

export default MyTimer;