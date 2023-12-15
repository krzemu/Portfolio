import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import Card from '../../../UI/Card/Card';
import IconPopup from '../../../Icons/IconPopup';

import IconGithub from '../../../Icons/IconGithub';
import IconCodepen from '../../../Icons/IconCodepen';



const ProjectCard = ({ title, desc, href, tags, className, image }) => {
    const [stateTooltip, setStateTooltip] = useState(false);
    const [videoHoverState, setVideoHoverState] = useState(false);
    const actionRef = useRef(null);
    const cardRef = useRef(null);
    const videoRef = useRef(null);
    const imgRef = useRef(null);
    const imgWrapperRef = useRef(null);

    // useEffect(() => {
    //     videoRef.current.src = video;
    // }, []);


    const onEnterTag = ({ target }) => {
        gsap.to(target, { backgroundColor: target.getAttribute('data-color') });
    }
    const onLeaveTag = ({ target }) => {
        gsap.to(target, { backgroundColor: 'transparent' });
    }
    const onEnterCard = ({ target }) => {
        gsap.to(cardRef.current, { backgroundColor: '#141f38' });
    }
    const onLeaveCard = ({ target }) => {
        gsap.to(cardRef.current, { backgroundColor: '#0f172a' });
    }

    const onShowTooltip = (e) => {
        setStateTooltip(true);
    }

    const onHideTooltip = (e) => {
        setStateTooltip(false);
    }


    let renderedTags = tags.map((item, i) => (
        <span
            key={i}
            className='border border-slate-400 p-2 rounded-md shadow-md cursor-pointer'

            onMouseEnter={onEnterTag}
            onMouseLeave={onLeaveTag}
            data-color={item.c}
        >
            {item.t}
        </span>

    ))

    const onMouseEnterHandler = (e) => {
        // setVideoHoverState(true);

    }
    const onMouseLeaveHandler = (e) => {
        // setVideoHoverState(false);
    }

    const imgHoverTimeline = gsap.timeline({
        paused: true
    })
    imgHoverTimeline.fromTo(
        imgRef.current,
        { y: 0 },
        { y: () => (-imgRef.current.clientHeight), duration: 10 }
        // **********************
        // **********************
        // **********************
        // imgWrapperRef.current.clientHeight not found GSAP
        // Need to set new y
    );

    const imgMouseEnterHander = (e) => {
        // videoRef.current.play();
        imgHoverTimeline.progress(0);
        imgHoverTimeline.play();

    }
    const imgMouseLeaveHander = (e) => {
        // videoRef.current.pause();
        // setTimeout(() => {
        //     videoRef.current.currentTime = 0;
        // }, 50)'
        imgHoverTimeline.pause();
        imgHoverTimeline.progress(0);

    }

    return (
        <Card
            className={`bg-slate-900 flex flex-col items-start gap-8 ${className ? className : ''}`}
            onMouseEnter={onEnterCard}
            onMouseLeave={onLeaveCard}
            ref={cardRef}
        >
            <div
                className='px-3 mt-3 rounded-t-md h-96 overflow-hidden'
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                ref={imgWrapperRef}
            >
                {/* <video
                    width="500"
                    className="w-full h-auto rounded-xl"
                    muted
                    loop
                    ref={videoRef}
                    onMouseEnter={videoMouseEnterHander}
                    onMouseLeave={videoMouseLeaveHander}
                /> */}
                <img
                    src={image}
                    onMouseEnter={imgMouseEnterHander}
                    onMouseLeave={imgMouseLeaveHander}
                    ref={imgRef}
                />

            </div>
            <div className="flex flex-col px-6">
                <div className="flex flex-col items-start gap-8">
                    <h3 className='text-3xl'>{title}</h3>
                    <div className="text-lg">
                        {desc}
                    </div>
                </div>
                <div
                    className="w-16 rounded-xl absolute top-4 right-4 bottom-auto left-auto bg-transparent" // actions
                    ref={actionRef}
                    onMouseLeave={onHideTooltip}
                    onMouseEnter={onShowTooltip}
                >
                    <div className='bg-slate-800/60 w-max p-3 rounded-full'>
                        <IconPopup href={href} className="text-3xl" />

                    </div>
                    {!stateTooltip ? '' : (
                        <div className=" w-32 h-16 absolute top-3 right-5 bottom-0 left-auto m-auto flex flex-row justify-center items-center bg-transparent shadow-md rounded-2xl">
                            <span
                                className='flex w-16 h-16 justify-center items-center transition bg-slate-900/60 hover:bg-slate-900/80 cursor-pointer backdrop-blur-sm relative rounded-l-xl'
                            >
                                <IconGithub />
                            </span>
                            <span
                                className='flex w-16 h-16 justify-center items-center transition bg-slate-900/60 hover:bg-slate-900/80 cursor-pointer backdrop-blur-sm rounded-r-xl relative'
                            >
                                <IconCodepen />
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-row bg-transparent gap-4 px-6 pb-8" >
                {renderedTags}
            </div>
        </Card >
    )
};

export default ProjectCard;