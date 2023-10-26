import team1 from '../../assets/images/team/Himanshu.jpg';
import team2 from '../../assets/images/team/bunty.jpg';
import team3 from '../../assets/images/team/amrit.jpg';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


import Popover from 'react-bootstrap/Popover';
import LinkedInSvg from '../../assets/icons/linkedin_team.svg';
import GoogleScholarIcon from '../../assets/icons/google_scholar.png';
import FacebookIcon from '../../assets/icons/facebook_color.png';

import './phd-scholars.css';

const SocialPopover = (linkedIn, googleScholar, facebook) => {
  return <Popover id="popover-basic">
    <Popover.Body>
      <a href={linkedIn} rel="noreferrer" target="_blank">
        <img src={LinkedInSvg} alt="linkedIn" className="linkedIn-icon" />
      </a>
      <a href={googleScholar} rel="noreferrer" target="_blank">
        <img src={GoogleScholarIcon} alt="google scholar" className="google-scholar-icon" />
      </a>
      <a href={facebook} rel="noreferrer" target="_blank">
        <img src={FacebookIcon} alt="facebook" className="facebook-icon" />
      </a>
    </Popover.Body>
  </Popover>;
}


function PhdScholars() {
  return <center>
        <h2>PhD Scholars</h2>
        <div className="row scholar-images-row">
          <div className="col-sm-4">
            <OverlayTrigger trigger="hover" placement="right" overlay={SocialPopover(
              'https://www.linkedin.com/in/himanshu-kumar-b9184279/',
              'https://scholar.google.com/citations?user=S4Ux51oAAAAJ&hl=en',
              'https://www.facebook.com/anshu1274')}
              delay={{ hide: 3000 }}>
              <img src={team1} className="scholar-image" alt="team" />
            </OverlayTrigger>
            <h3>Mr. Himanshu Kumar</h3>
            <p className="align-left"><b>Title: </b>Development of high entropy alloys using atmospheric plasma spray</p>
          </div>
          <div className="col-sm-4">
            <OverlayTrigger trigger="hover" placement="right" overlay={SocialPopover(
              'https://www.linkedin.com/in/tomarb/',
              'https://scholar.google.com/citations?user=7J20k3QAAAAJ&hl=en',
              'https://www.facebook.com/tomarayu.06')}
              delay={{ hide: 3000 }}>
              <img src={team2} className="scholar-image" alt="team" />
            </OverlayTrigger>
            <h3>Mr. Bunty Tomar</h3>
            <p className='align-left'><b>Title:</b> Fabrication of functionally graded materials using wire arc additive manufacturing</p>
          </div>
          <div className="col-sm-4">
            <OverlayTrigger trigger="hover" placement="right" overlay={SocialPopover(
              'https://www.linkedin.com/in/amritbir-singh-692290176/',
              'https://scholar.google.com/citations?user=asgwX84AAAAJ&hl=en&authuser=1',
              'https://www.facebook.com/amritbir.singh.370')}
              delay={{ hide: 3000 }}>
              <img src={team3} className="scholar-image" alt="team" />
            </OverlayTrigger>
            <h3>Mr. Amritbir Singh</h3>
            <p className="align-left"><b>Title:</b> Fabrication of mechanical components using wire arc additive manufacturing</p>
          </div>
        </div></center>;
}

export default PhdScholars;
