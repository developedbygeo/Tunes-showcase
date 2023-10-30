import { CSSProperties } from 'react';

import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';

type BubbleProps = WithClassName & {
    style?: CSSProperties;
};

const Bubble = ({ className, style }: BubbleProps) => {
    return (
        <div
            className={cn(
                'box-shadow-inset-0-0-2.5rem-rgba(255, 255, 255, 0.25) absolute left-10 h-48 w-48 rounded-full before:absolute before:top-12 before:z-10 before:h-8 before:w-8 before:rounded-full before:bg-white before:blur-sm after:absolute after:left-20 after:top-20 after:z-10 after:h-5 after:w-5 after:rounded-full after:bg-white after:blur-sm',
                className
            )}
            style={style}
        >
            <span className="absolute inset-[0.625rem] rounded-full border-l-[0.9375rem] border-[#0fb4ff] blur-[0.5rem]" />
            <span className="absolute inset-[0.625rem] rounded-full border-r-[0.9375rem] border-[#ff4484] blur-[0.5rem]" />
            <span className="absolute inset-[0.625rem] rounded-full border-t-[0.9375rem] border-[#ffeb3b] blur-[0.5rem]" />
            <span className="absolute inset-[1.875rem] rounded-full border-l-[0.9375rem] border-[#ff4484] blur-[0.75rem]" />
            <span className="transform-rotate-330deg absolute inset-[0.625rem] rounded-full border-b-[0.625rem] border-[#fff] blur-[0.5rem]" />
        </div>
    );
};

export default Bubble;
