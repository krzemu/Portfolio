import classes from './Card.module.css';

const Card = (props) => {
    let renderedClass = `${classes.card} ${props.className ? props.className : ''}`;
    return (
        <div
            className={renderedClass}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default Card;