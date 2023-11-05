import { useRef } from 'react';

import { WithClassName } from '@/types/UI';
import { Skill } from '@/types/sanity/biography';
import { cn } from '@/libs/ui';
import AnimatedSkillBar from './AnimatedSkillBar';

type BiographySkillsProps = WithClassName & {
    skills: Skill[];
};

// TODO animate
const BiographySkills = ({ className, skills }: BiographySkillsProps) => {
    return (
        <section className={cn('container', className)}>
            <h2 className="mb-12 text-lg font-semibold">Skills</h2>
            <ul className="flex flex-wrap gap-12">
                {skills.map((skill) => (
                    <li className="flex flex-1 basis-1/3 flex-col gap-4" key={skill._key}>
                        <p className="text-base">{skill.title}</p>
                        <AnimatedSkillBar
                            className="bg-gradient-background !shadow-container-neumorph-sm"
                            title={`${skill.title} -${skill.level}`}
                            value={skill.level}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BiographySkills;
