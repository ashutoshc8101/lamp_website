import './contact.css';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer';
import iitjammu from '../../assets/images/iitjammu-front.jpg'

function Contact() {
  return <>
    <Header></Header>
    <div className="row">
        <div class="contact-content col-sm-4">
          <h3>Contact Details</h3>
          Dr. Shiva S<br />
          Assistant Professor<br />
          Laboratory for Advanced Manufacturing and Processing<br />
          Dept of Mechanical Engineering<br />
          Indian Institute of Technology Jammu <br />
          Email: <a href="mailto:shiva.sekar@iitjammu.ac.in">shiva.sekar@iitjammu.ac.in</a><br />
          Phone: 0191-257-1233
        </div>
        <div className="col-sm-8 iitjammu-image-container">
          <img src={iitjammu} className="iitjammu-image" alt="iit jammu" />
        </div>
      </div>
    <Footer></Footer>
  </>;
}

export default Contact;
