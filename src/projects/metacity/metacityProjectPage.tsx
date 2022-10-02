import { ProjectPostPage } from "../../ProjectPostPage";

import agentsImg from "./assets/agents.png";
import center2Img from "./assets/center2.png";
import dejviceUtilizationImg from "./assets/dejviceUtilization.png";
import lego3DImg from "./assets/lego3D.png";
import namirUtilizationImg from "./assets/namirUtilization.png";
import utilizationImg from "./assets/utilization.png";
import vyuzitiImg from "./assets/vyuziti.png";

import Thesis from "./assets/final.pdf";
import Presentaiton from "./assets/CESCG2022TOMAS.pdf";


export function MetacityProjectPage() {
    return (
        <ProjectPostPage clickableImages title="vojtatom - metacity">
            <h1>Metacity</h1>
            <p className="subtitle">Urban Data Processing and Visualization Toolkit</p>
            <p>This project was developed as a part of my Master Thesis. The outputs were published and presented at CESCG 2022.</p>
            <p>Urban data visualization plays a vital role in sustainable city evolution. In this project, we explore the applications of a modular urban data visualization system. The modular design allows extending the visualization system, which helps answer questions as they arise during problem exploration. The paper and the thesis further explore the role of visualization platforms in urban development.</p>
            <p>Technical topics such as possible geometry representations and ways to process large geospatial datasets are discussed. A simple and extensible styling language is proposed to enable visualization customization based on the object metadata.</p>
            <p>The system is available as two Python/C++ packages. The first package focuses on data processing, utilizing spatial and temporal acceleration data structures, while the second encapsulates a WebGL-based visualization application. An iterative qualitative user study validated the proposed solution's performance and accessibility.</p>

            <div className="projectItems">
                <dl className="staff">
                    <dt>supervisor</dt>
                    <dd>David Sedláček</dd>
                    <dt>chaos manager</dt>
                    <dd>Josef Kortan</dd>
                    <dt>Team Římská 12</dt>
                    <dd>Giang Chau Nguyenová</dd>
                    <dd>Jan Petýrek</dd>
                    <dd>Anna Moudrá</dd>
                </dl>
                <dl className="staff">
                    <dt>in cooperation with</dt>
                    <dd>Ira Winder</dd>
                    <dt>IPR Prague</dt>
                    <dd>Tomáš Hudeček</dd>
                    <dd>Annamária Bohuniczky</dd>
                    <dd>Jiří Čtyroký</dd>
                </dl>
                <ul className="links">
                    <li>links</li>
                    <li><a href="https://github.com/metacitytools">code</a></li>
                    <li><a href={Thesis} target="_blank">thesis</a></li>
                    <li><a href="https://cescg.org/cescg_submission/urban-data-visualization/">CESCG 2022 Paper</a></li>
                    <li><a href={Presentaiton}>CESCG 2022 Presentation</a></li>
                </ul>
            </div>

            <div className="images">
                <img src={utilizationImg} alt="Utilization" />
                <img src={agentsImg} alt="Agents" />
                <img src={dejviceUtilizationImg} alt="Praha Dejvice" />
                <img src={lego3DImg} alt="Lego 3D" />
                <img src={namirUtilizationImg} alt="Praha Náměstí Míru" />
                <img src={vyuzitiImg} alt="Vyuziti" />
                <img src={center2Img} alt="Praha Center" />
            </div>
        </ProjectPostPage>
    )
}