'use client';

import { useCallback, useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { debounce } from 'lodash';

import { Button } from '@/components/ui/Button';
import { cn } from '@/libs/ui';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(
        debounce(() => {
            const shouldShow = window.scrollY > 500;
            setIsVisible(shouldShow);
        }, 150),
        []
    );

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
    };

    return (
        <Button
            variant="outline"
            className={cn(
                'fixed bottom-12 right-12 rounded-full p-2 outline-none transition-[colors_opacity] duration-300',
                isVisible ? 'opacity-100' : 'opacity-0'
            )}
            onClick={scrollToTop}
        >
            <MdKeyboardArrowUp className="h-6 w-6" />
        </Button>
    );
};

export default ScrollToTopButton;
