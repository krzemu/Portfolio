import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


import featuredImage from '../../../../Assets/featured_image.jpg';
import SocialIcons from '../../../SocialIcons/SocialIcons';
import Section from '../../../UI/Section/Section';
// import HeroNav from './HeroNav.jsx';

import SplitText from '../../../Misc/SplitText';


gsap.registerPlugin(ScrollTrigger);


const HeroSection = () => {

    const HeroRef = {
        headerRef: useRef(null),
        subHeadRef: useRef(null),
        imgRef: useRef(null),
        socialIconsRef: useRef(null),

    }
    const { headerRef, subHeadRef, imgRef, socialIconsRef } = HeroRef;

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 10%',
                end: '+=200',
            }, defaults: { duration: .15 }
        });
        // let headerSplit = new SplitText(headerRef.current, { type: "chars" });
        // let subHeadSplit = new SplitText(subHeadRef.current, { type: "chars" });


        const headerSplit = new SplitText(headerRef.current, {});
        const subHeadSplit = new SplitText(subHeadRef.current, {});


        // Change SplitText to SplitLetter, animate from splitletter

        tl.fromTo(
            headerSplit.chars,
            { opacity: 0, y: -40, x: -5, rotate: -8 },
            { opacity: 1, y: 0, x: 0, stagger: .05, rotate: 0, delay: .5 }
        );
        tl.fromTo(
            subHeadSplit.chars,
            { opacity: 0, y: 20, x: -2, rotate: -2 },
            { opacity: 1, y: 0, x: 0, stagger: .05, rotate: 0 },
            "<"
        );
        tl.fromTo(
            imgRef.current,
            { opacity: 0, y: 400, scale: .4 },
            { opacity: 1, scale: 1, y: 0 },
            "-=.3"
        );
        tl.fromTo(
            socialIconsRef.current,
            { opacity: 0, y: 40, scale: .4 },
            { opacity: 1, scale: 1, y: 0 },
            "<"
        )
    }, []);




    return <Section
        id="hero-section"
        className="h-[95vh] flex flex-col justify-center items-center gap-16"
    >
        <div className='w-full flex flex-col justify-start items-center lg:items-start gap-16 mb-16'>
            <h1
                className='flex flex-row gap-1 sm:gap-2 text-2xl sm:text-4xl md:text-center md:text-5xl lg:text-transparent lg:text-stroke lg:text-7xl xl:text-[5.5rem] 2xl:text-[7rem] m-0'
                ref={headerRef}
            >
                Front-end_Developer_
            </h1>
            <h2
                className='flex flex-row gap-1 sm:gap-2 text-xl tracking-wide sm:tracking-tight md:text-center xl:gap-4 m-0 md:text-3xl xl:text-4xl 2xl:text-5xl'
                ref={subHeadRef}
            >Łukasz_Tryczyński_</h2>
            <SocialIcons ref={socialIconsRef} />
        </div>
        <div className="w-full flex flex-row justify-center lg:justify-end items-start" >
            {/* <HeroNav /> */}
            <img
                src={featuredImage}
                width='500'
                ref={imgRef}
                className='w-full lg:w-1/2 md:-mt-8 rounded-full p-2 shadow-xl '
            />
        </div>

    </Section>
};

export default HeroSection;