import './intro.css'
import Image from 'next/image'
export default function Intro(){
    return(
    <section className="intro">
        <div className='intro_container'>       
        <div className="intro-column">
            <h1>Web Application Development</h1>
            <p>Get your application developed by the Leading Developers of 2023</p>
            <a href="#" className="btn">GET A FREE QUOTE</a>
        </div>
        <div className="intro-column">
        <Image
              src="/web-application-dev-banner.webp"
              alt="intro-image"
              className='intro-image'
              width={600}
              height={360}
              priority
            />
        </div>
        </div>
    </section>
    )
}