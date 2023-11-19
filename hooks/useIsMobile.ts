import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { isClient } from '@/libs/ui';

const useIsMobile = (maxWidth = 768) => {
    const isClientSide = isClient();
    const [isMobile, setIsMobile] = useState(isClientSide ? window.innerWidth < maxWidth : false);

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
