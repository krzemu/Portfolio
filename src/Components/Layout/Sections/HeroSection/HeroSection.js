import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import featuredImage from '../../../../Assets/featured_image.jpg';
import SocialIcons from '../../../SocialIcons/SocialIcons';
import Section from '../../../UI/Section/Section';

import SplitLetter from '../../../Misc/SplitLetter';

gsap.registerPlugin(SplitText);



const HeroSection = () => {

    const HeroRef = {
        headerRef: useRef(null),
        subHeadRef: useRef(null),
        imgRef: useRef(null),
        socialIconsRef: useRef(null),

    }
    const { headerRef, subHeadRef, imgRef, socialIconsRef } = HeroRef;

    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: .15 } });
        let headerSplit = new SplitText(headerRef.current, { type: "chars" });
        let subHeadSplit = new SplitText(subHeadRef.current, { type: "chars" });
        headerRef.textContnet = SplitLetter(headerRef.current.textContent);
        subHeadRef.textContent = SplitLetter(subHeadRef.current.textContent);
        console.log(headerRef);
        console.log(subHeadRef);

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
            { opacity: 0, y: 40, scale: .4 },
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
        className="flex flex-col justify-center items-center gap-16"
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
        <div className="w-full flex justify-center lg:justify-end items-end" >
            <img src={featuredImage} width='500' ref={imgRef} className='w-full md:w-1/2 rounded-full p-2 shadow-xl' />
        </div>

    </Section>
};

export default HeroSection;