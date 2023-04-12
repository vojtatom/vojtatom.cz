import { About } from './portfolio/About';
import { Projects } from './portfolio/Projects';
import { WhatIDo } from './portfolio/WhatIDo';
import { Helmet } from 'react-helmet';

export function Portfolio() {
    return (
        <div id="portfolio">
            <Helmet>
                <meta charSet="utf-8" />
                <title>vojtatom - portfolio</title>
            </Helmet>
            <About />
            <div className="centered">
                <WhatIDo />
                <Projects />
            </div>
            <div id="footer">&copy; {new Date().getFullYear()} vojtatom.cz</div>
        </div>
    );
}
