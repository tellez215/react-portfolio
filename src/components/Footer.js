import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
    return (
        <div>
            <h1 className="socials">Socials!</h1>
            <div className='socialIcons'>
            <a href="https://github.com/tellez215" ><BsGithub /></a>
            <a href="https://www.linkedin.com/in/christiantellez215/" ><BsLinkedin /></a>
            </div>
        </div>
    );
}

export default Footer;