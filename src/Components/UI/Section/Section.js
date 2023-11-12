import { forwardRef } from 'react';

const Section = forwardRef(function Section(props, ref) {

    return (
        <div
            className={`w-full min-h-[95svh] relative flex flex-col items-center py-16 shadow-lg ${props.className ? props.className : ''}`}
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onMouseMove={props.onMouseMove}
            ref={ref}
        >
            <div className='w-4/5 h-full'>
                {props.children}
            </div>
        </div>
    )
});

export default Section;