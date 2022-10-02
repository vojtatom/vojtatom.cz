import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectPost.css";

interface ProjectPageProps {
    children: React.ReactNode | React.ReactNode[];
    clickableImages?: boolean;
}

export function ProjectPostPage(props: ProjectPageProps) {
    React.useEffect(() => {
        if (props.clickableImages) {
            let imgs = document.getElementsByTagName("img");
            for (let i of imgs) {
                i.onclick = () => {
                    let s = document.getElementsByTagName("body")[0];

                    let frame = document.createElement('div');
                    frame.classList.add('img-frame');

                    frame.onclick = () => {
                        frame.parentElement!.removeChild(frame);
                    }

                    let image = document.createElement('img');
                    image.src = i.src;

                    frame.appendChild(image);
                    s.appendChild(frame);
                }
            };
        }
    }, [props.clickableImages]);

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <div id="postProjectHeader">
                <Link to="/">&#8592; back to portfolio</Link>
            </div>
            <div id="projectPost" className={props.clickableImages ? "clickableImages" : ""}>
                {props.children}
            </div>
            <div id="footer">
                &copy; {new Date().getFullYear()} vojtatom.cz
            </div>
        </div>
    )
}