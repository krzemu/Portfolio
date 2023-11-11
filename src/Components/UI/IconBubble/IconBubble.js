


const IconBubble = (props) => {


    return (
        <div className='w-6 h-6 bg-slate-800 p-3 sm:p-4 rounded-full cursor-pointer flex justify-center items-center box-content '>
            {props.children}
        </div>
    )
};

export default IconBubble;