import Avatar from '../img/user2.png'

function About () {
    return (
        <div className='about-area'>
                <img src={Avatar} alt='logo' ></img>
                <h1>ABOUT ME</h1>

                <p className='about-text'>Hello! My name is Christian Tellez and I am currently a student at UC Berkley's Full Stack Software Development Program. I'm extremely passionate about learning everything there is about Software Development and have learned to work using a growth
                    mindset which took time for me do . Currently creating multiple projects that I have done using the current programming languages : HTML, CSS and JavaScript. I will continue to create these projects as my program advances and will implement
                    more languages as we continue on. At the end of my time at UC Berkley, I would want to look for a paid internship or a Junior Software Developer position. I'm excited for what the future holds and will continue to futher my knowledge and create
                    more projects as the time comes. Feel free to check out my projects with links to them down below and if you'd like to contact me , my information to my Github and LinkedIn at the bottom of the page!</p>

            </div>
    );
}

export default About;