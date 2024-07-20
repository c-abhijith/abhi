import React,{useState} from 'react'
import "./Header.css"

export default function Header() {
    const[Toggle,showMenu]=useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo active-link'>Abhijith </a>
            
            <div className={Toggle? "nav__menu show-menu":"nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item" onClick={()=> showMenu(!Toggle)}>
                        <a href="#about" className='nav__link active-link'>
                        <i class="uil uil-document-layout-left nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item" onClick={()=> showMenu(!Toggle)}>
                        <a href="#skills" className='nav__link active-link'>
                        <i class="uil uil-cog nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item" onClick={()=> showMenu(!Toggle)} >
                        <a href="#project" className='nav__link active-link'>
                        <i class="uil uil-rocket nav__icon"></i>Projects
                        </a>
                    </li>

                    <li className="nav__item" onClick={()=> showMenu(!Toggle)}>
                        <a href="#qualification" className='nav__link active-link'>
                        <i class="uil uil-file-minus-alt nav__icon"></i>Qulificcation
                        </a>
                    </li>


                    <li className="nav__item" onClick={()=> showMenu(!Toggle)}>
                        <a href="#certificate" className='nav__link active-link'>
                        <i class="uil uil-trophy nav__icon"></i>Certificates
                        </a>
                    </li> 

                    <li className="nav__itemn" onClick={()=> showMenu(!Toggle)}>
                        <a href="#contact" className='nav__link active-link'>
                        <i class="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>
                <i class='uil uil-times nav__close' onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={()=> showMenu(!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>

    </header>
  )
}
