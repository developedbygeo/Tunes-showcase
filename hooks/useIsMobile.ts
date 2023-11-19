import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const useIsMobile = (maxWidth = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

    useEffect(() => {
        const handleResize = debounce(() => {
            setIsMobile(window.innerWidth < maxWidth);
        }, 250);

        window.addEventListener('resize', handleResize);

        return () => handleResize.cancel();
    }, [maxWidth]);

    return isMobile;
};

export default useIsMobile;
