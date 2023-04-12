import { Link } from 'react-router-dom';

interface ProjectProps {
    type: string;
    date: string;
    title: string;
    description?: string;
    image?: string;
    link: string;
    isFile?: boolean;
}

function ProjectWidget(props: ProjectProps) {
    return (
        <>
            {props.image && (
                <div
                    className="projectImage"
                    style={{
                        backgroundImage: `url(${props.image})`,
                    }}
                ></div>
            )}
            <div className="projectTexts">
                <div className="date">
                    {props.date} &#x2022; {props.type}
                </div>
                <h2>{props.title}</h2>
                {props.description && <p className="description">{props.description}</p>}
            </div>
        </>
    );
}

export function Project(props: ProjectProps) {
    return props.link.startsWith('http') || props.isFile ? (
        <a className="project" href={props.link} target="_blank" rel="noreferrer">
            <ProjectWidget {...props} />
        </a>
    ) : (
        <Link className="project" to={props.link}>
            <ProjectWidget {...props} />
        </Link>
    );
}
