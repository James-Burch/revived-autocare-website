import React, { useState } from 'react';

interface CounterProps {
    initialCount?: number;
    step?: number;
    min?: number;
    max?: number;
}

const Counter: React.FC<CounterProps> = ({
    initialCount = 0,
    step = 1,
    min,
    max
}) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = (): void => {
        setCount(prevCount => {
            const newCount = prevCount + step;
            return max !== undefined && newCount > max ? max : newCount;
        });
    };

    const decrement = (): void => {
        setCount(prevCount => {
            const newCount = prevCount - step;
            return min !== undefined && newCount < min ? min : newCount;
        });
    };

    const reset = (): void => {
        setCount(initialCount);
    };

    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            <div className="counter-controls">
                <button
                    onClick={decrement}
                    disabled={min !== undefined && count <= min}
                >
                    -{step}
                </button>
                <button onClick={reset}>Reset</button>
                <button
                    onClick={increment}
                    disabled={max !== undefined && count >= max}
                >
                    +{step}
                </button>
            </div>
        </div>
    );
};

export default Counter;