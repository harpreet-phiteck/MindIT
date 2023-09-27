import './web_services.css';
export default function Web_services() {
  return (
    <section className="web_services">
      <div className="web_services_container">
        <div className="web_services_wrapper">
          <div className="web_services_heading">
            <h2>Services we provide for Web Development</h2>
            <span style={{textTransform:'uppercase',color:'#666'}}>that you can avail for your projects</span>
          </div>
          <div className="web_services_description">
            <p style={{fontSize:'min(20px, 6vw)',fontWeight:'300'}}>
            Get the best in class Web App Development services from a team of experienced professionals
            </p>
            <p style={{fontSize:'14px'}}>
            We at Mind IT® provide the best in class Web App Development Services created using the latest technology as per the industry standard within the budget limits given to us by our clients.
            </p>
          </div>
          <div className="our_services_container">
                <h3>Our services include:</h3>
                <div className="services_list">
                    <div className="service_list_left">
                    <ul>
                        <li>E-learning</li>
                        <li>Educational</li>
                        <li>E-commerce</li>
                        <li>CMS Services</li>
                    </ul>
                    </div>
                    <div className="service_list_right">
                        <ul>
                        <li>Customer portal</li>
                        <li>Admin Portal</li>
                        <li>Enterprise Portals</li>
                        <li>Custom Web Application Development</li>
                        </ul>
                    </div>
                </div>
          </div>
          <div className='services_btn_container'>
            <a href='#' className='services_btn'>
              OUR SERVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
