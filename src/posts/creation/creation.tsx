import { ProjectPostPage } from "../../ProjectPostPage";

import imgSit from "./images/sit.png";
import imgLittleStory from "./images/17s.png";
import imgLittleStory2 from "./images/2s.png";
import imgLittleStory3 from "./images/4.jpg";
import imgLittleStory4 from "./images/19.jpg";
import imgLittleStory5 from "./images/20s.png";
import imgLittleStory6 from "./images/22s.png";
import imgProjects from "./images/walk.gif";
import imgProjects2 from "./images/run.gif";
import imgProjects3 from "./images/bird1.png";
import imgProjects4 from "./images/wing2small.png";
import imgMoonlight from "./images/moonligh4.png";
import imgMoonlight2 from "./images/bridge2.jpg";
export function CreationPostPage() {

    return (
        <ProjectPostPage clickableImages title="vojtatom - creation station">
            <h1>Teenage years of my creation station</h1>
            <p className="subtitle">by Vojtěch Tomas, 2010-2015, my history of 3D graphics</p>

            <p>The first time I worked with 3D graphics, I was maybe 14 or 15 years old. I was using my dad's notebook with an old ATI graphics card, and I dove into the 3D world with <a href="https://blender.org">Blender</a>, which looked very different at that time.</p>

            <div className="images">
                <img src={imgSit} alt="tabi" />
            </div>
            <p className="figureDescription">A frame from long forgotten project...</p>

            <h2>Groteskování, where it all begun</h2>
            <p>A year later after I discovered Blender, I turned 16, and I made my first animation called "Groteskování" as a weekend project. To keep the record complete, bellow is the original clip.</p>

            <div className="video-box">
                <div className="video">
                    <iframe src="https://player.vimeo.com/video/433765979" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </div>
            <p className="figureDescription">Groteskování, 2011</p>
            <p>I had been spending every Friday at a local art school for well over 8 years at that time. When I showed the animation to my art teacher (sending greetings to Mrs. Krhánková, what a wonderful lady), she encouraged me to send my weekend project to a competition of public art schools (OČI DOKOŘÁN 2011). If you're not familiar with the way these competitions work, the projects are evaluated by judges on local, regional, and national levels.</p>
            <p>Long story short, the video got through into the national round and also got into the selection of <a href="https://www.zusmsol.cz/docs/multimedialni-tvorba-vybrane-prispevky.pdf">15 clips presented and discussed publicly with the judges</a>, which is basically the highest you can get.</p>

            <p>Shortly after that, I got a very inspiring email from Maria Procházková, one of the judges in the national round, we exchanged a couple of messages. Honestly, I had no idea what to do at that time, I was barely 16. I got invited for a visit to <a href="https://www.upp.cz">UPP</a> and I did not go, which, seeing it now, wasn't exactly a top smart decision (closeted and quirky 16yo me was really unsure about anything).</p>

            <p>A couple of months passed, and I sent the same project to <a href="http://www.animanie.cz">Animanie</a>, a festival of animated movies based in Pilsen. <a href="http://www.filmdat.cz/souteze.php?detail=339&oceneni">The project won another award</a>, and I realized something was up.</p>

            <h2>Little Story</h2>

            <p>Two years later, I was finishing Little Story - another animation. It was a story about a lonely and misunderstood artist who longs for appreciation and wants to get his pictures into the gallery (art imitating life?).</p>
        <div className="imageGrid">
            <img src={imgLittleStory} alt="little story"/>
            <img src={imgLittleStory2} alt="little story"/>
        </div>
            
        <p>The artist is looking for the right topic for his new fantastic masterpiece; he eventually finds it; however, everything turns out differently than he planned.</p>

        <div className="imageGrid">
                <img src={imgLittleStory3} alt="little story"/>
                <img src={imgLittleStory4} alt="little story"/>
        </div>

        <p>It was probably the biggest project I have ever worked on at that time - it consumed hundreds or maybe even thousands of hours. I learned many things, including the fact that I suck at writing scripts, and you always need someone who makes sure you don't get sidetracked. The film could have been easily two or three minutes long and contain the same amount of material; however, I got carried away and produced this 12-minute "masterpiece".</p>

            <div className="video-box">
                <div className="video wide">
                    <iframe src="https://player.vimeo.com/video/100252108" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </div>
            <p className="figureDescription">Little Story, 2014</p>

            <p>A little something from the project's cover letter:</p>
        <p className="cite">I tried to tell a story. I wanted to make everything look like one stream of feelings and decisions. The process of creation is something unrepeatable. It's a drama, a fight, a game with thousand twists, it's a rise and a fall at the same time. You always feel like you're doing something revolutionary, something amazing. One day, the work is done, and only the author can be its judge. It could be an artwork - nice, indeed - which will vanish like it has never been finished. Or it's a piece, which was created with courage and which means something to its author. That is the masterpiece people will admire.</p>

        <div className="imageGrid">
            <img src={imgLittleStory5} alt="little story"/>
            <img src={imgLittleStory6} alt="little story"/>
        </div>

        <p>I tried my luck and submitted the film to Animanie film festival again. <a href="http://www.filmdat.cz/souteze.php?detail=518&oceneni">It landend me with Special Jury Award</a> for "the image clarity, composition, and lighting which made each frame into a picture of its own".</p>

        <p>All of the animations I've ever made were created, edited, and produced using Blender exclusively. <a href="https://conference.blender.org/2020-la/">Each year, there is a Blender conference</a>, which includes a Blender-based film festival Suzanne Awards. In 2014 I submitted Little Story, and somehow the film got nominated for the Best Short Film award and was screened in Amsterdam in October 2014. <a href="https://youtu.be/W4gMn9h2b4E?t=557">There is a video on Youtube of someone bashing my name during the final ceremony.</a> Also, Ton Roosendaal (<a href="https://en.wikipedia.org/wiki/Benevolent_dictator_for_life">BDFL</a> of Blender) saw at least a couple of seconds of the film (yay).</p>

        <div className="outputs">
            <div className="imageGrid">
                    <img src={imgProjects} alt="moonlight"/>
                    <img src={imgProjects2} alt="moonlight"/>
            </div>
            <p className="figureDescription">Walking and running test animation, one of the unfinished projects</p>
            <div className="imageGrid">
                    <img src={imgProjects3} alt="hummingbird"/>
                    <img src={imgProjects4} alt="hummingbird"/>
            </div>
            <p className="figureDescription">Photorealistic rendering examples, hummingbird project, FIT CTU course semestral work</p>
        </div>

        <h2>Around 2015</h2>
        <p>Almost two years later, in 2015, I went to study software engineering and computer graphics at FIT CTU in Prague. In 2016, <a href="https://www.youtube.com/watch?v=YOjU5ECgynE">I managed to create a short, silly animation</a> inspired by the environment I was living and working in. It's mostly a product of my frustration caused by one or two university courses.</p>

            <div className="video-box">
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YOjU5ECgynE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <p className="figureDescription">Programming according to Wagner, 2016</p>
        <p>Since then, I attempted to get back to making animations on several occasions, but the projects I've started are still waiting for someone to pick them up. Currently, I help with a graphics course at FIT CTU, which includes 3D modeling, and honestly, I'm happily returning to the roots, where it all originally started. </p>
            <div className="imageGrid">
                    <img src={imgMoonlight} alt="moonlight"/>
                    <img src={imgMoonlight2} alt="moonlight"/>
            </div>
            <p className="figureDescription">Project moonlight (unfinished)</p>

        </ProjectPostPage>
    );
}