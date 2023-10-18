import { forwardRef } from 'react';


import IconBubble from '../UI/IconBubble/IconBubble.js';
import Codepen from '../Icons/IconCodepen.js';
import Linkedin from '../Icons/IconLinkedin.js';
import Github from '../Icons/IconGithub.js';

import classes from './SocialIcons.module.css';

const SocialIcons = forwardRef(function SocialIcons(props, ref) {
    // const socialIconsRef = React.useRef();

    return (
        <div ref={ref} className={classes['social-icons']} >
            <IconBubble>
                <Codepen width="2rem" height="2rem" />
            </IconBubble>

            <IconBubble>
                <Linkedin width="2rem" height="2rem" />
            </IconBubble>

            <IconBubble>
                <Github width="2rem" height="2rem" />

            </IconBubble>
        </div>
    );

})

export default SocialIcons;