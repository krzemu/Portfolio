import classes from './Button.module.css';


const Button = (props) => {
    const renderedClass = `${classes.button} ${props.className ? props.className : ''}`;

    return (
        <button
            className={renderedClass}
            onClick={props.onClick}
            useRef={props.useRef}
        >
            {props.children}
        </button>
    )
}

export default Button;