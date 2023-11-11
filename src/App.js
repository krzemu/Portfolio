import { Fragment, useState } from 'react';
import Header from './Components/Layout/Header/Header';

import './App.css'
import HeroSection from './Components/Layout/Sections/HeroSection/HeroSection';
import ProjectsSection from './Components/Layout/Sections/ProjectsSection/ProjectsSection';
import AboutMeSection from './Components/Layout/Sections/AboutMe/AboutMeSection';
export default function App() {
    const [viewportSection, setViewportSection] = useState(0);


    return (
        <Fragment>
            <Header />
            <HeroSection />
            <ProjectsSection />
        </Fragment>
    );
}