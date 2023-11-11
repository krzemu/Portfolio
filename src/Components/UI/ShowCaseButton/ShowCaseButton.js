import classes from './ShowCaseButton.module.css';

const ShowCaseButton = (props) => {
    const renderedClass = `${classes.button} ${props.className ? props.className : ''}`;

    return (
        <button
            className={renderedClass}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default ShowCaseButton;