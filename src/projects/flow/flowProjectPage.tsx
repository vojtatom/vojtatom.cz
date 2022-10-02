import { ProjectPostPage } from "../../ProjectPostPage";
import imgflow from "./images/flow.png";
import imgwholeimgtop from "./images/wholeimgtop.png";
import imgrenderer from "./images/renderer.png";
import imgpipeline from "./images/pipeline.png";
import imgmediumA from "./images/mediumA.png";
import imgmediumB from "./images/mediumB.png";
import imgmediumC from "./images/mediumC.png";
import imgglC from "./images/glC.png";
import imgglA from "./images/glA.png";
import imgglB from "./images/glB.png";



export function FlowProjectPage() {
    return (<ProjectPostPage clickableImages>
        <h1>Flow</h1>
        <p className="subtitle">Vector field visualization for web and distributed systems</p>
        <p>The project was developed as a bachelor thesis at FIT CTU in Prague in cooperation with ASU CAS. The goal was to <strong>develop a distributed framework</strong> for <strong>visualization of vector field data</strong>, the main focus was the visualization of <strong>plasma flow near solar surface</strong>. The design of the project focuses on physical accuracy and clarity of the visualization, performance, and also portability. The prototype was implemented using web technologies (JavaScript and WebGL) and aims at distributed systems, such as SAGE2.</p>
        <div className="projectItems">
            <dl className="staff">
                <dt>supervisor</dt>
                <dd>Radek Richtr</dd>
                <dt>in cooperation with</dt>
                <dd><a href="https://www.asu.cas.cz/~sdsa/svanda.html">Michal Švanda</a></dd>
                <dd><a href="https://www.asu.cas.cz">ASU CAS</a></dd>
            </dl>
            <ul className="links">
                <li>links</li>
                <li><a href="https://dspace.cvut.cz/handle/10467/83382">thesis</a></li>
            </ul>
        </div>
            <div className="images">
                <img src={imgflow} alt="flow" />
                <img src={imgwholeimgtop} alt="flow" />
                <img src={imgrenderer} alt="flow" />
                <img src={imgpipeline} alt="flow" />
                <img src={imgmediumA} alt="flow" />
                <img src={imgmediumB} alt="flow" />
                <img src={imgmediumC} alt="flow" />
                <img src={imgglC} alt="flow" />
                <img src={imgglA} alt="flow" />
                <img src={imgglB} alt="flow" />
            </div>

    </ProjectPostPage>);
}