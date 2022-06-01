import React,{useState} from 'react';
import About from './About'
import Contact from './Contact';
import Navigation from './Navigation.js'
import Project from './Project'



function Header() {
    const [page, setPage] = useState('about')
    function Render () {
        switch (page){
            case 'about':
                return <About/>
            case 'project':
                return <Project/>    
            case 'contact':
                return <Contact/>
        }
    }
    return (
        <div>
            <Navigation page = {page} setPage = {setPage} />
            <Render />                            
        </div>
    );
}

export default Header;