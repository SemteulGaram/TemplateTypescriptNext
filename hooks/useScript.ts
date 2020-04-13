// https://stackoverflow.com/a/60019310/8274779
import { useEffect } from 'react';

const useScript = (_url: string, parentSelector: string, _async: boolean) => {
  useEffect(() => {
    const placement = document.querySelector(parentSelector)
    if (!placement) throw new Error('Invalid Selector')
    
    const script = document.createElement('script')
    script.src = _url
    script.async = typeof _async === 'undefined' ? true : _async
    placement.appendChild(script)

    return () => {
      placement.removeChild(script)
    };
  }, [_url]);
};

export default useScript;
