import { useRef, useState } from 'react';
import { gsap } from 'gsap-trial';

import Card from '../../../../UI/Card/Card';
import IconPopup from '../../../../Icons/IconPopup';

import classes from './ProjectCard.module.css';
import IconGithub from '../../../../Icons/IconGithub';
import IconCodepen from '../../../../Icons/IconCodepen';



const ProjectCard = ({ title, desc, href, tags, className }) => {
    const [stateTooltip, setStateTooltip] = useState(false);
    const actionRef = useRef(null);
    const onEnterTag = ({ target }) => {
        gsap.to(target, { backgroundColor: target.getAttribute('data-color') });
    }
    const onLeaveTag = ({ target }) => {
        gsap.to(target, { backgroundColor: 'transparent' });
    }
    const onEnterCard = ({ target }) => {
        console.log(target);
        gsap.to(target, { backgroundColor: '#1b1e2b99' });
    }
    const onLeaveCard = ({ target }) => {
        gsap.to(target, { backgroundColor: '#1b1e2b66' });
    }

    const onShowTooltip = (e) => {
        setStateTooltip(true);
    }

    const onHideTooltip = (e) => {
        setStateTooltip(false);
    }


    console.log(title, desc, href, tags);
    let renderedTags = tags.map((item, i) => (<span key={i} onMouseEnter={onEnterTag} onMouseLeave={onLeaveTag} data-color={item.c}>{item.t}</span>))
    let renderedClass = `${classes['projects-card']} ${className ? className : ''}`;

    return (
        <Card className={renderedClass} onMouseEnter={onEnterCard} onMouseLeave={onLeaveCard}>
            <div className={classes['card-meta']}>
                <div className={classes['card-meta-inner']}>
                    <h3>{title}</h3>
                    <div className={classes['card-desc']}>
                        {desc}
                    </div>
                </div>
                <div className={classes.actions} ref={actionRef} onMouseLeave={onHideTooltip} onMouseEnter={onShowTooltip}>
                    <IconPopup href={href} />
                    {!stateTooltip ? '' : (
                        <div className={classes['action__tooltip']}>
                            <span><IconGithub /></span>
                            <span><IconCodepen /></span>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes['card-tag']} >
                {renderedTags}
            </div>
        </Card>
    )
};

export default ProjectCard;