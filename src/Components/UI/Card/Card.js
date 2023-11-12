import { forwardRef } from "react";


const Card = forwardRef(function (props, ref) {
    return (
        <div
            className={`h-max rounded-xl shadow-xl ${props.className ? props.className : ''}`}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
            ref={ref}
        >
            {props.children}
        </div>
    )
})

export default Card;