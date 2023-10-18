
function IconPopup(props) {
    return (
        <svg
            viewBox="0 0 800 1000"
            fill="currentColor"
            height="1em"
            width="1em"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            <path d="M700 100c28 0 51.667 9.667 71 29s29 43 29 71v400c0 26.667-9.667 50-29 70s-43 30-71 30H300c-26.667 0-50-10-70-30s-30-43.333-30-70V198c0-26.667 9.667-49.667 29-69s43-29 71-29h400m0 500V200H300v400h400M100 500v300h300v100H100c-26.667 0-50-10-70-30S0 826.667 0 800V500h100" />
        </svg>
    );
}

export default IconPopup;
