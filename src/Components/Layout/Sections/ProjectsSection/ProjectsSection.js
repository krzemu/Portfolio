import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../../../UI/Section/Section';
import ProjectCard from './ProjectCard';
import ciemneszkProjectImg from '../../../../Assets/Projects/ciemneszkielko.jpg';
import dorjanProjectImg from '../../../../Assets/Projects/dorjan.jpg';
import ltmediaProjectImg from '../../../../Assets/Projects/ltmedia.jpg';
import szkielkoVideo from '../../../../Assets/Projects/szkielko.mp4';
import ltmediaVideo from '../../../../Assets/Projects/ltmedia.mp4';
import dorjanVideo from '../../../../Assets/Projects/dorjan.mp4';



const DUMMY_PROJECTS = [
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        image: ltmediaProjectImg
    },
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        image: dorjanProjectImg
    },
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        image: ciemneszkProjectImg
    },
    {
        title: 'E-commerce Cloth Store',
        desc: 'Lorem Ipsum is simply dummy text',
        href: 'https://google.com',
        tags: [{ t: 'React.js', c: '#7fd0f2' }, { t: 'Gsap', c: '#6ae357' }, { t: 'Next.js', c: '#000000' }, { t: 'MongoDB', c: '#0f294c' }],
        image: dorjanProjectImg
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
            image={item.image}
        // thumbnail={item.thumbnail}
        // video={item.video}
        />
    );

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top center',
                    end: '10%',
                    scrub: 1
                }
            })
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