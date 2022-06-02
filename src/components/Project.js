import React from 'react';
import project1 from '../img/1.png'
import project2 from '../img/2.png'
import project3 from '../img/3.png'
import project4 from '../img/4.png'
import project5 from '../img/5.png'
import project6 from '../img/6.jpg'

function Project() {
  return (
    <div>
      <div id="projects" className="projects-area">
        <h2 className='projectsName'>PROJECTS</h2>
        <br />


        {/* first project */}

        <h3>Sub-o-Matic (Full-Stack)</h3>
        <a>
          <img src={project1} alt='project' width="600px" height="400px"/>
        </a>
        <div className="buttons">
          <a href="https://github.com/tellez215/subscribe-o-matic" style={{ color: 'rgb(230, 133, 54)', margin: '20px' }}>Github</a>
          <a href="https://subscribe-o-matic.herokuapp.com/" style={{ color: 'rgb(255, 255, 255)' }}>Visit Site</a>
        </div>
      </div>


      {/* second project */}

      <div id="projects" className="projects-area">
        <h3>Employee-Tracker (Back-End)</h3>
        <a>
          <img src={project2} width="400px" height="300px" />
        </a>
        <div className="buttons">
          <a href="https://github.com/tellez215/Employee-Tracker" style={{ color: 'rgb(230, 133, 54)', margin: '20px' }}>Github</a>
          <a href="#" style={{ color: 'rgb(255, 255, 255)' }}>Visit Site</a>
        </div>
      </div>


      {/* third project */}

      <div id="projects" className="projects-area">
        <h3>E-Commerce Store (Back-End)</h3>
        <a>
          <img  src={project3} width="400px" height="300px" />
        </a>
        <div className="buttons">
          <a href="https://github.com/tellez215/E-Commerce_Back-End" style={{ color: 'rgb(230, 133, 54)', margin: '20px' }}>Github</a>
          <a href="#" style={{ color: 'rgb(255, 255, 255)' }}>Visit Site</a>
        </div>
      </div>


      {/* fourth */}

      <div id="projects" className="projects-area">
        <h3>I'm Hangry! (Front-End)</h3>
        <a>
          <img src={project4} width="400px" height="300px" />
        </a>
        <div className="buttons">
          <a href="https://github.com/tellez215/im-hangry" style={{ color: 'rgb(230, 133, 54)', margin: '20px' }}>Github</a>
          <a href="https://tellez215.github.io/im-hangry/" style={{ color: 'rgb(255, 255, 255)' }}>Visit Site</a>
        </div>
      </div>


      {/* fifth */}

      <div id="projects" className="projects-area">
        <h3>J.A.T.E. (Full-Stack)</h3>
        <a>
          <img src={project5} width="400px" height="300px" />
        </a>
        <div className="buttons">
          <a href="https://github.com/tellez215/Text-EditorPWA" style={{ color: 'rgb(230, 133, 54)', margin: '20px' }}>Github</a>
          <a href="https://lit-sands-37415.herokuapp.com/" style={{ color: 'rgb(255, 255, 255)' }}>Visit Site</a>
        </div>
      </div>


      {/* sixth */}
       
      <div id="projects" className="projects-area">
        <h3>Social Network (Back-End)</h3>
        <a>
          <img src={project6} width="400px" height="300px" />
        </a>
        <div className="buttons">
          <a href="https://github.com/tellez215/Social-NetworkAPI" style={{ color: 'rgb(230, 133, 54)', margin: '20px' }}>Github</a>
          <a href="#" style={{ color: 'rgb(255, 255, 255)' }}>Visit Site</a>
        </div>
      </div>
    </div>

  );
}

export default Project;