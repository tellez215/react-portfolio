import React from 'react';

function Navigation(props) {
    function clickEvent(event) {
    props.setPage(event.target.id)
    }
    return(
        <div className='main-con'>
        <nav>
            <ul className='nav-area'>
                <li><a id='about'onClick={clickEvent} href="#">About Me</a></li>
                <li><a id='project'onClick={clickEvent} href="#">Portfolio</a></li>
                <li><a id='contact'onClick={clickEvent} href="#">Contact</a></li>
                <li><a href={process.env.PUBLIC_URL + 'resume.pdf'}>Resume</a></li>
            </ul>
        </nav>
    </div>
    );
}


export default Navigation;