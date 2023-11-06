import { MdCircle } from 'react-icons/md';

import { WithClassName } from '@/types/UI';
import { Experience } from '@/types/sanity/biography';

import { cn } from '@/libs/ui';

type BiographyExperienceProps = WithClassName & {
    experience: Experience[];
};

const BiographyExperience = ({ className, experience }: BiographyExperienceProps) => {
    return (
        <section className={cn('container', className)}>
            <h2 className="mb-12 text-lg font-semibold">Experience</h2>
            <ul className="relative flex flex-col gap-12 before:absolute before:left-[0.65rem] before:top-5 before:z-0 before:h-full before:w-1 before:bg-accent">
                {experience.map((exp, index) => (
                    <li className="flex" key={exp._key}>
                        <article className="">
                            <h3 className="sr-only">{`Details about ${exp.title} at ${exp.location}`}</h3>
                            <div className="flex items-center">
                                <MdCircle
                                    className={cn(
                                        'relative z-20 mr-4 h-6 w-6',
                                        index === 0 ? 'text-accent' : 'text-gray-200'
                                    )}
                                />
                                <p className="mb-3 text-base">
                                    {exp.title} - <span>{exp.location}</span>
                                </p>
                            </div>
                            <p className="pl-10 text-base font-normal text-gray-300">
                                {exp.timeFrame} - <span className="font-light">{exp.duration} </span>
                            </p>
                            <p className="mt-3 pl-10 text-base font-light">{exp.description}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BiographyExperience;
