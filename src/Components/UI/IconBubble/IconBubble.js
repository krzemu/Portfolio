import classes from './IconBubble.module.css';



const IconBubble = (props) => {


    return (
        <div className={classes['icon-bubble']}>
            {props.children}
        </div>
    )
};

export default IconBubble;