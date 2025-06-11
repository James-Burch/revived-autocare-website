import { useState, useCallback } from 'react';

interface UseCounterOptions {
  min?: number;
  max?: number;
  step?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (value: number) => void;
}

export const useCounter = (
  initialValue: number = 0,
  options: UseCounterOptions = {}
): UseCounterReturn => {
  const { min, max, step = 1 } = options;
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount + step;
      return max !== undefined && newCount > max ? max : newCount;
    });
  }, [step, max]);

  const decrement = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount - step;
      return min !== undefined && newCount < min ? min : newCount;
    });
  }, [step, min]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const set = useCallback((value: number) => {
    if (min !== undefined && value < min) {
      setCount(min);
    } else if (max !== undefined && value > max) {
      setCount(max);
    } else {
      setCount(value);
    }
  }, [min, max]);

  return { count, increment, decrement, reset, set };
};
