"use client"
import './header.css';
import Image from 'next/image'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
 function toggleMenu() {   
    const navbarMenu = $('.mobile-navbar-menu');  
          navbarMenu.slideToggle(300); // 300 milliseconds for the animation duration 
}

  return (
    <header>
      <div className="header_container">
        <div className="contact_bar">        
            <div className="contact_bar_column"><FontAwesomeIcon icon={faEnvelope} style={{paddingRight:'3px'}}/>info@minditsystems.com</div>
            <div className="contact_bar_column"><FontAwesomeIcon icon={faLocationDot} style={{paddingRight:'3px'}}/>1603 Capital Avenue, Suite 310 A181, Cheyenne, WY 82001, US</div>
            <div className="contact_bar_column">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="contact_bar_column">
            <Image
              src="/india_flag.png"
              alt="india_flag"
              className='flag_icon'
              width={24}
              height={24}
              style={{width: 'auto', height: 'auto'}}
              priority
            />
            +91 730 742 7777</div>
            <div className="contact_bar_column"> 
            <Image
              src="/usa_flag.png"
              alt="usa_flag"
              className='flag_icon'
              width={24}
              height={24}
              style={{width: 'auto', height: 'auto'}}
              priority
            />+1 415 707 0591</div>         
        </div>
        <div className='nav_container'>
           
        <nav className="navbar">
        <div className="navbar-logo">
        <Image
              src="/logo-MindIT.webp"
              alt="usa_flag"
              className='heading_logo'
              width={120}
              height={50}
              priority
              style={{width:'auto', height:'auto'}}
            />
        </div>
        <ul className="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">MindIT</a></li>
        </ul>
        <ul className="mobile-navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="navbar-toggle">
            <button id="toggle-btn" onClick={toggleMenu}>&#9776;</button>
        </div>
    </nav>
    </div>
      </div>
    </header>
  );
}
