
import '../Services/Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/service_data';
import type { ServiceType } from '../../assets/service_data';
import arrow_icon from '../../assets/arrow_icon.svg';

function Services() {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="services-container">
        {Services_Data.map((service: ServiceType, index: number) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services_read-more">
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
