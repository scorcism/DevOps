import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Clock = ({ clockStart }) => {

    // console.log(usertime)
    let timeafterreload = localStorage.getItem("time");
    console.log(timeafterreload) 
    
    const minuteSeconds = 60;
    const hourSeconds = 3600;

    const timerProps = {
        isPlaying: clockStart,
        size: 210,
        strokeWidth: 6
    };

    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div className="time">{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };

    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;


    let stratTime = Date.now() / 1000; // use UNIX timestamp in seconds

    let endTime = stratTime + (timeafterreload*60); // use UNIX timestamp in seconds

    let remainingTime = endTime - stratTime;


    return (
        <div className="clock-body">
            {remainingTime && <>


            <CountdownCircleTimer
                {...timerProps}
                colors="#EF798A"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#218380"
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                        {renderTime("seconds", getTimeSeconds(elapsedTime))}
                    </span>
                )}
            </CountdownCircleTimer>
    </>
    }
        </div>
    );
}


export default Clock;