import { forwardRef } from 'react';


import IconBubble from '../UI/IconBubble/IconBubble';
import Codepen from '../Icons/IconCodepen';
import Linkedin from '../Icons/IconLinkedin';
import Github from '../Icons/IconGithub';


const SocialIcons = forwardRef(function SocialIcons(props, ref) {
    // const socialIconsRef = React.useRef();

    return (
        <div ref={ref} className="flex flex-row gap-4 box-content" >
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