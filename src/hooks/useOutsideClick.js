import { useEffect, useRef } from 'react';

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // console.log(ref.current);
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log(e.currentTarget, e.target, 'useClick');
          handler();
        }
      }
      document.addEventListener('click', handleClick, listenCapturing);
      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
