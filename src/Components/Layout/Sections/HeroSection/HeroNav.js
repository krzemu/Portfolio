import Card from "../../../UI/Card/Card";


export default function HeroNav(){
    const menuItems = ['Start', 'Projects', 'About me', 'Contact'];
    const renderedItems = menuItems.map(item => (
        <div 
        key={item}
        className='bg-slate-700/2 w-full py-2 px-4 flex flex-row justify-start items-center cursor-pointer rounded-xl before:w-4 before:h-4 before:bg-slate-700/60 before:rounded-full before:block before:mr-8 before:transition-all '
        >
            {item}
        </div>

    ));
    
    return (
        <Card className='mt-16 p-4 bg-slate-700/20'>
            <h3 className='text-2xl text-white pl-4'>Navigation</h3>
            <div className='flex flex-col items-start justify-start gap-4 py-4'>
                {renderedItems}
            </div>
        </Card>
    )
}