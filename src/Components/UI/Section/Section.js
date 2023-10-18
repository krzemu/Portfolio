import { forwardRef } from 'react';
import classes from './Section.module.css';

const Section = forwardRef(function Section(props, ref) {

    const renderedClass = `${classes.section} ${props.className ? props.className : ''}`;

    return (
        <div
            className={renderedClass}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onMouseMove={props.onMouseMove}
            ref={ref}
        >
            <div className={classes['section__inner']}>
                {props.children}
            </div>
        </div>
    )
});

export default Section;