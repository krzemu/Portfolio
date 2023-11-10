import { forwardRef } from 'react';

export default forwardRef(function Section(props, ref) {

    return (
        <section
            className={`min-h-screen bg-slate-900 text-white p-10 ${props.className ? props.className : ''}`}
            onClick={props.onClick}
            ref={ref}
        >
            {props.children}
        </section>
    )
})