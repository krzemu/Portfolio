import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function AboutMeSection({ content }) {
    const [contentState, setContentState] = useState(content);
    const AboutMeCardRef = Array(contentState.length).fill(useRef(null));
    console.log(AboutMeCardRef);
    // useLayoutEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: AboutMeCardRef[0].current,
    //             start: 'top top',
    //             end: '10%',
    //             scub: 1,
    //             markers: true,
    //         },
    //         defaults: {
    //             duration: .3
    //         }
    //     });

    //     // OGarnąc animacje na tablicy Ref ref.current.

    //     tl.fromTo(currRef, { opacity: 0, y: 100, scale: .7 }, { opacity: 1, y: 0, scale: 1, });

    // }, []);

    const renderedData = contentState.map((item, i) => {
        const { title, content, dateStart, dateEnd } = item;
        // const date = new Date();
        return (
            <li className="relative flex flex-row mb-6 sm:mb-0" key={title} ref={AboutMeCardRef[i]}>
                <div className="flex flex-col justify-center items-center">
                    <div className="hidden sm:flex h-full w-0.5 bg-gray-700 mb-4 py-8"></div>
                    <div className="z-10 flex items-center justify-center w-16 h-16  rounded-full ring-0 bg-blue-900/80 hover:dark:bg-blue-900/40 sm:ring-4 ring-gray-900 shrink-0">
                        <svg className="w-8 h-8 text-slate-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-0.5 h-full bg-gray-700 mt-4 py-8"></div>
                </div>
                <div className="mt-3 lg:max-w-lg flex flex-col justify-center gap-2 text-left ml-16">
                    <h3 className="text-2xl font-semibold text-white">{title}</h3>
                    <time className="block text-lg font-normal leading-non text-gray-400">{dateStart.toLocaleDateString()} - {dateEnd.toLocaleDateString()}</time>
                    <p className="text-lg font-normal text-gray-400">{content}</p>
                </div>
            </li>
        )
    })

    return (
        <div className="w-full flex justify-center">

            <ol className="items-center flex flex-col justify-center lg:w-max lg:py-16">

                {renderedData}
            </ol>
        </div>
    )
}