import "./About.css"
import logo from "./assets/logo.svg"


export function About() {
    return (
        <div className="headerContainer">
            <div className="headerBar">
            <img src={logo} alt="vojtatom pic" className="logo"/>
            <div className="headerTexts">
                <h1>Vojtěch Tomas</h1>
                <div className="subtitle"><a href="mailto:hello@vojtatom.cz">hello@vojtatom.cz</a>, Vojta <span className="it">[voy-tah]</span></div>
                <div className="links">
                    <a href="https://github.com/vojtatom">github</a>
                    <a href="https://www.linkedin.com/in/vojtatom/">linkedin</a>
                    <a href="https://www.twitter.com/vojtatom/">twitter</a>
                </div>
            </div>
            </div>
        </div>
    );
}