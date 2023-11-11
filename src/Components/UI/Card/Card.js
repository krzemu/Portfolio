
const Card = (props) => {
    return (
        <div
            className={`w-full h-max shadow-xl rounded-xl ${props.className ? props.className : ''}`}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default Card;