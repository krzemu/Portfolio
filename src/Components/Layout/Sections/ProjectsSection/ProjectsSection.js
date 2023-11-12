import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Section from '../../../UI/Section/Section';
import ProjectCard from './ProjectCard';
import ciemneszkProjectImg from '../../../../Assets/Projects/ciemneszkielko-project-card-background.jpg';
import dorjanProjectImg from '../../../../Assets/Projects/dorjanenergia-project-card-background.jpg';
import ltmediaProjectImg from '../../../../Assets/Projects/ltmedia-project-card-background.jpg';


const DUMMY_PROJECTS = [
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        thumbnail: ciemneszkProjectImg
    },
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        thumbnail: dorjanProjectImg
    },
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        thumbnail: ltmediaProjectImg
    },
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        thumbnail: ciemneszkProjectImg
    }
];


const ProjectsSection = () => {
    const [stateData, setStateData] = useState([...DUMMY_PROJECTS]);
    const projectsRef = useRef(null);
    let renderedData = stateData.map((item, i) =>
        <ProjectCard
            key={i}
            className='project-card'
            title={item.title}
            desc={item.desc}
            href={item.href}
            tags={item.tags}
            thumbnail={item.thumbnail}
        />
    );

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline()
                .fromTo('h2', { opacity: 0, y: 0, x: -100, scale: 0.4 }, { opacity: 1, x: 0, y: 0, scale: 1 })
                .fromTo(".project-card", { opacity: 0, y: 300, scale: 0.4 }, { opacity: 1, y: 0, stagger: .125, scale: 1 }, "-=.2");
        }, projectsRef);
        return () => ctx.revert();
    }, []);

    return <Section
        className='bg-gradient-to-b  from-slate-800/80 from-0% via-slate-800 via-20% to-slate-800 overflow-hidden backdrop-blur-sm'
        ref={projectsRef}
    >
        <h2>Projects</h2>
        <div className='grid grid-cols-2 py-16 gap-16 place-items-stretch' >
            {DUMMY_PROJECTS.length === 0 ? '' : renderedData}
        </div>
    </Section>
};

export default ProjectsSection;