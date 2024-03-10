import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLInputElement>, handler: () => void): void => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, handler]);
};
