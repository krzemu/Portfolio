import { useRef, useState } from 'react';
import { gsap } from 'gsap';

import Card from '../../../UI/Card/Card';
import IconPopup from '../../../Icons/IconPopup';

import IconGithub from '../../../Icons/IconGithub';
import IconCodepen from '../../../Icons/IconCodepen';



const ProjectCard = ({ title, desc, href, tags, className, thumbnail }) => {
    const [stateTooltip, setStateTooltip] = useState(false);
    const actionRef = useRef(null);
    const cardRef = useRef(null);


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

    return (
        <Card
            className={`bg-slate-900 flex flex-col items-start gap-8 ${className ? className : ''}`}
            onMouseEnter={onEnterCard}
            onMouseLeave={onLeaveCard}
            ref={cardRef}
        >
            <div className=' px-3 pt-3 rounded-t-md'>
                <img src={thumbnail} width='500' height='300' className='w-full rounded-t-md' />
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
        </Card>
    )
};

export default ProjectCard;