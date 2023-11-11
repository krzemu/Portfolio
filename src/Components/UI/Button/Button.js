import classes from './Button.module.css';


const Button = (props) => {
    let classList = 'p-2 border-0 transition ease-out transtition-duration-300 text-xl rounded-xl relative cursor-pointer bg-transparent';
    const renderedClass = `${classList} ${props.className ? props.className : ''}`;

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