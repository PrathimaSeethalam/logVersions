import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';

export default function Timer() {
    const intervalRef = useRef();

    const [state, setState] = useState({
        total: 0,
        isCounting: false
    });

    useEffect(() => () => clearInterval(intervalRef.current), []);

    const { total, isCounting } = state;

    const onStartBtnClick = () => {
        const clickTime = new Date().getTime();
        if (!isCounting) {
            intervalRef.current = setInterval(() => {
                const totalTime = total + new Date().getTime() - clickTime;
                setState({ total: totalTime, isCounting: true });
            }, 0);
        } else {
            clearInterval(intervalRef.current);
            const totalTime = total + new Date().getTime() - clickTime;
            setState({ isCounting: false, total: totalTime });
        }
    };

    const onClearBtnClick = () => {
        clearInterval(intervalRef.current);
        setState({ isCounting: false, total: 0 });
    };
    return (
        <div>
            <section>
                <div className='timer'>
                    {Math.trunc(moment.duration(total).asHours()) +
                        ':' +
                        moment.duration(total).minutes() +
                        ':' +
                        moment.duration(total).seconds()}
                </div>
                <button
                    className={
                        isCounting
                            ? 'button button--stop'
                            : 'button button--start'
                    }
                    onClick={onStartBtnClick}
                >
                    {isCounting ? 'STOP' : total != 0 ? 'CONTINUE' : 'START'}
                </button>

                <button className='button' onClick={onClearBtnClick}>
                    CLEAR
                </button>
            </section>
        </div>
    );
}
