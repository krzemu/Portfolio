import { useRef } from 'react';

import Section from "../UI/Section/Section";


export default function HeroSection() {
    const sectionRef = useRef();

    console.log(sectionRef);
    return (
        <Section ref={sectionRef}>Hello world</Section>
    );
};