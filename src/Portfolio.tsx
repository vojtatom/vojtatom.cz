import { About } from './portfolio/About';
import { Projects } from './portfolio/Projects';
import { WhatIDo } from './portfolio/WhatIDo';
import "./Portfolio.css";


export function Portfolio() {

  return (
    <div id="portfolio">
        <About />
        <div className="centered">
          <WhatIDo />
          <Projects />
        </div>
        <div id="footer">
            &copy; {new Date().getFullYear()} vojtatom.cz
          </div>
    </div>
  )
}

