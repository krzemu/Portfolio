// icon:angle-right | Unicons https://iconscout.com/unicons | Iconscout

function IconAngleRight(props) {
    return (
        <a href={props.href} target="_blank" rel="nofollow noopener noreferrer">
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                <path d="M9.9 17.2c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l3.5-3.5-3.5-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3z" />
            </svg>
        </a>
    );
}

export default IconAngleRight;
