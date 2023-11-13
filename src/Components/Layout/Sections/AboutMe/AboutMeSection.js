import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from '../../../UI/Section/Section';
import AboutMeCard from './AboutMeCard';

gsap.registerPlugin(ScrollTrigger);

const DUMMY_DATA = [
    {
        title: 'What is Lorem Ipsum?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        dateStart: new Date(2022, 11, 5),
        dateEnd: new Date(2022, 12, 10),
    },
    {
        title: 'Why do we use it?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        dateStart: new Date(2022, 11, 5),
        dateEnd: new Date(2022, 12, 10),
    },
    {
        title: 'Where does it come from?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        dateStart: new Date(2022, 12, 5),
        dateEnd: new Date(2022, 12, 10),
    },
    {
        title: 'Where can I get some?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        dateStart: new Date(2021, 11, 5),
        dateEnd: new Date(2022, 12, 10),
    }

];

const AboutMeSection = () => {
    const aboutMeRef = {
        headingRef: useRef(null),
        paragraphRef: useRef(null),
        // AboutMeCardRef: useRef(),
    }
    const { headingRef, paragraphRef } = aboutMeRef;

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current,
                start: 'top center',
                end: '10%',
                scub: 1,
                markers: true,
            },
            defaults: {
                duration: .3
            }
        });

        tl.fromTo(headingRef.current, { opacity: 0, y: 100, scale: .7 }, { opacity: 1, y: 0, scale: 1 });
        tl.fromTo(paragraphRef.current, { opacity: 0, y: 100, scale: .7 }, { opacity: 1, y: 0, scale: 1 });
    }, []);


    return (
        <Section
            className='backdrop-blur-xl flex justify-center'
            classNameInner="flex flex-col items-center  gap-16"
        >
            <div className='flex flex-col justify-center items-center'>
                <h2
                    className='text-4xl mb-4'
                    ref={headingRef}
                >
                    What is Lorem Ipsum?
                </h2>
                <p
                    className='text-xl w-4/5  leading-8 text-gray-400 text-center'
                    ref={paragraphRef}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <AboutMeCard content={DUMMY_DATA} />
        </Section>
    )
}

export default AboutMeSection;
