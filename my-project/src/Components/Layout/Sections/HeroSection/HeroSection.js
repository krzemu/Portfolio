import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import featuredImage from '../../../../Assets/featured_image.jpg';
import SocialIcons from '../../../SocialIcons/SocialIcons';
import Section from '../../../UI/Section/Section';
import movieBg from '../../../../Assets/bg2.mp4';


import classes from './HeroSection.module.css';
import Button from '../../../UI/Button/Button';
gsap.registerPlugin(SplitText);



const HeroSection = () => {

    const HeroRef = {
        headerRef: useRef(null),
        subHedRef: useRef(null),
        imgRef: useRef(null),
        socialIconsRef: useRef(null),

    }
    const { headerRef, subHedRef, imgRef, socialIconsRef } = HeroRef;

    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: .15 } });
        let headerSplit = new SplitText(headerRef.current, { type: "chars" });
        let subHeadSplit = new SplitText(subHedRef.current, { type: "chars" });
        console.log(socialIconsRef.current);

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
        <div className='w-4/5 flex flex-col justify-start itemms-start gap-8 mb-16'>
            <h1
                className='text-2xl sm:text-3xl sm:text-transparent sm:text-stroke lg:text-6xl xl:text-[5.5rem] 2xl:text-8xl m-0'
                ref={headerRef}
            >
                Front-end_Developer_
            </h1>
            <h2
                className='flex flex-row gap-1 sm:gap-2 xl:gap-4 m-0 text-4xl'
                ref={subHedRef}
            >Łukasz_Tryczyński_</h2>
            <SocialIcons ref={socialIconsRef} />
            <Button>Yolo</Button>
        </div>
        <div className="w-full flex justify-end items-end" >
            <img src={featuredImage} width='250' ref={imgRef} />
        </div>

    </Section>
};

export default HeroSection;