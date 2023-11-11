import { useRef, useState } from 'react';
import classes from './Header.module.css';

const headerList = [
    {
        title: 'Home',
        link: '#home'
    },
    {
        title: 'Projects',
        link: '#projects'
    },
    {
        title: 'Skill Tree',
        link: '#skilltree'
    },

    , {
        title: 'Contact',
        link: '#contact'
    },
    {
        title: 'About',
        link: '#about'
    }
]

const Header = () => {
    const [active, setActive] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const headerRef = useRef();

    // ------------TODOS------------
    // UseReducer should control the state of navbar
    // on Desktop nav is hide on hero section
    // on Mobile nav is float icon


    const renderedNav = headerList.map((item, i) => {
        return (
            <li
                className={activeNav === i ? classes.active : ''}
                onClick={() => setActiveNav(i)}
                key={i}
            // ref={headerNavRef[i]}
            >
                <a href={item.link}>{item.title}</a>
            </li>
        )
    })
    let renderedClasses = `${classes.header} ${active ? '' : classes.hidden}`;

    return (
        <header ref={headerRef} className={renderedClasses}>
            <nav>
                <ul className={classes['nav-list']}>
                    {renderedNav}
                </ul>
            </nav>
        </header>
    )
}


export default Header;