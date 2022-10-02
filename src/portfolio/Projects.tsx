import { Project } from "./Project";
import flowImg from "./assets/flow.png";
import metacityImg from "./assets/metacity.png";
import metacityServiceImg from "./assets/metacityService.png";
import flockingImg from "./assets/flocking.png";
import agentsPDF from "./assets/crowdsim.pdf";
import creationImg from "./assets/creation.png";
import { TimelineEvent } from "./Event";


export function Projects() {
    return (
        <div className="projects">
            <Project
                type="Tools"
                image={metacityServiceImg}
                date="2022&#8212;Today"
                title="Metacity Tools"
                description="Tools and services for urban data processing and visualization"
                link="https://metacity.cc"
            />
            <TimelineEvent
                title="Graduated from FEE CTU in Prague"
                date="2022"
            />
            <Project
                type="Thesis &amp; Paper"
                image={metacityImg}
                date="2022"
                title="Metacity"
                description="Urban data processing and visualization toolkit"
                link="/metacity"
            />
            <Project
                type="Course"
                date="2021&#8212;Today"
                title="NI-CCC"
                description="Computational art course I help with at FIT CTU"
                link="https://ni-ccc.github.io"
            />
            <Project
                type="Report"
                date="2020"
                title="Agent-based Simulation in Unreal Engine"
                link={agentsPDF}
                isFile
            />
            <Project
                type="Post"
                image={flockingImg}
                date="2020"
                title="Flocking"
                description="Exploring the flocking algorithm"
                link="/flocking"
            />
            <TimelineEvent
                title="Graduated from FIT CTU in Prague"
                date="2019"
            />
            <Project
                type="Thesis"
                image={flowImg}
                date="2019"
                title="Flow"
                description="Vector field visualization application"
                link="/flow"
            />
            <TimelineEvent
                title="Started studying at CTU in Prague"
                date="2015"
            />
            <Project
                type="Post"
                image={creationImg}
                date="2010&#8212;2015"
                title="Teenage years of my creation station"
                description="Brief history of me and 3D graphics in my pre-university years"
                link="/creationstation"
            />
            <TimelineEvent
                title="Beginning of the Universe"
                date="13.8 billion years ago"
            />
        </div>
    );
}