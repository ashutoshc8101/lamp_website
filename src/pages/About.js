import Header from "../components/header/Header";
import Footer from "../components/footer/footer.js";
import './about.css';

import aboutLeft from '../assets/images/about_left_fixed.jpg';
import aboutRight from '../assets/images/about_right_fixed.jpg';
import services from '../assets/images/Services.jpg';
import AboutImage from '../assets/images/about.jpg';

function About() {
  return <>
    <Header />
    <div className="content">
        <div className="row">
          <div className="col-sm-4 image-container">
            <img src={aboutLeft} className="about-left" alt="about left" />
          </div>
          <div className="col-sm-4">
            <img src={AboutImage} alt="about" className="about-image" />
          </div>
          <div className="col-sm-4 image-container">
            <img src={aboutRight} className="about-right" alt="about right" />
          </div>
        </div>
        <div className="row about-content">
          <center>
            <div className="col-sm-8">
              <h1 className="about-heading">About Us</h1>
              <p className="description">
                LAMP (Laboratory for Advanced Manufacturing and Processing) is an industry-focused Applied Research and Development facility based at Indian Institute of Technology Jammu.
                It provides innovative materials engineering solutions for research and industrial partners seeking assistance on materials-related issues that cannot be solved by utilizing their inbuilt resources.
              </p>

              <p className="details">
                LAMP was incepted in 2019, and has also become a leading lab in the institute with state of art research facility in additive manufacturing and materials processing, currently assisting projects of various national labs and industries from wide-ranging sectors.
                LAMP holds an impeccable record of accomplishing projects on time. LAMP’s unique strength lies in its ability to anticipate, understand, and respond quickly and professionally to funding agency and industry needs by providing competitive customized solutions and, more importantly, acting as a one-stop shop for getting the job done.
              </p>

              <h2 className="services-container">Services</h2>
              <img src={services} alt="services" className="services-image" />
              </div>
            </center>
        </div>
      </div>
    <Footer />
  </>
}

export default About;
