import React from 'react';

function Project() {
    return (
        <div>
        <div id="projects" className="projects-area">
          <h2>PROJECTS</h2>
          <br />
          {/* first project */}
          <h3>Sub-o-Matic (Full-Stack)</h3>
          <a>
            <img src="./img/project 1.gif" />
          </a>
          <div className="buttons">
            <a href="https://github.com/tellez215/subscribe-o-matic" style={{color: 'rgb(255, 0, 0)', margin: '20px'}}> <i className="fa-brands fa-github" />Github</a>
            <a href="https://subscribe-o-matic.herokuapp.com/" style={{color: 'rgb(255, 255, 255)'}}>Visit Site</a>
          </div>
        </div>
        {/* second project */}
        <div id="projects" className="projects-area">
          <h3>Employee-Tracker (Back-End)</h3>
          <a>
            <img href="https://subscribe-o-matic.herokuapp.com/" src="./img/proj2.png" width="400px" height="300px" />
          </a>
          <div className="buttons">
            <a href="https://github.com/tellez215/Employee-Tracker" style={{color: 'rgb(255, 0, 0)', margin: '20px'}}> <i className="fa-brands fa-github" />Github</a>
            <a href="#" style={{color: 'rgb(255, 255, 255)'}}>Visit Site</a>
          </div>
        </div>
        {/* third project */}
        <div id="projects" className="projects-area">
          <h3>E-Commerce Store (Back-End)</h3>
          <a>
            <img href="https://subscribe-o-matic.herokuapp.com/" src="./img/ecom3.png" width="400px" height="300px" />
          </a>
          <div className="buttons">
            <a href="https://github.com/tellez215/E-Commerce_Back-End" style={{color: 'rgb(255, 0, 0)', margin: '20px'}}> <i className="fa-brands fa-github" />Github</a>
            <a href="#" style={{color: 'rgb(255, 255, 255)'}}>Visit Site</a>
          </div>
        </div>
      </div>
      
    );
}

export default Project;