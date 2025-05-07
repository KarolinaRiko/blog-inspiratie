import { useState, useEffect } from 'react';

const DelayedFallback = ({ minDelay = 3000, fallback }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 0);
    const minTimer = setTimeout(() => setShow(true), minDelay); 

    return () => {
      clearTimeout(timer);
      clearTimeout(minTimer);
    };
  }, [minDelay]);

  return show ? fallback : null;
};

export default DelayedFallback;
