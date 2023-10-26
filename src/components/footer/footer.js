import './footer.css';
import { Link } from 'react-router-dom';
import fbIcon from '../../assets/icons/facebook.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedInIcon from '../../assets/icons/linkedin.svg';
import threadsIcon from "../../assets/icons/threads.svg";
import instagram from '../../assets/icons/instagram.svg';
import youtube from '../../assets/icons/youtube.svg';

function Footer() {
  return <div>
    <div className="row footer">
      <div className="col-sm-4">
        <div class="footer-heading">Contact Details</div>
        Laboratory for Advanced Manufacturing and Processing<br />
        Dept of Mechanical Engineering<br />
        Indian Institute of Technology Jammu<br />
        Jagti, NH-44 , PO Nagrota<br />
        Jammu - 181 221 J&K,  India
      </div>
      <div className="col-sm-4 useful-links">
        <div class="footer-heading">Useful Links</div>
        <div class="links">
          <Link to={`/about`}>About Us</Link>
          <Link to={"/team/team"}>Team</Link>
          <Link to={"/publications/research-papers"}>Publications</Link>
        </div>
      </div>
      <div className="col-sm-4 flex-fill">
        <div class="footer-heading">Social Details</div>
        <a href="https://www.facebook.com/profile.php?id=61551059153623" rel="noreferrer" target="_blank">
          <img src={fbIcon} alt="facebook icon" className="socialIcon"></img>
        </a>
        <a href="https://twitter.com/LampResearch" rel="noreferrer" target="_blank">
          <img src={twitterIcon} alt="twitter icon" className="socialIcon"></img>
        </a>
        <a href="https://www.linkedin.com/in/lamp-iit-jammu-48486128b/" rel="noreferrer" target="_blank">
          <img src={linkedInIcon} alt="linked icon" className="socialIcon"></img>
        </a>
        {/* <a href="mailto:shiva.sekar@iitjammu.ac.in">
          <img src={envelopeIcon} alt="mail icon" className="socialIcon"></img>
        </a> */}
        <a href="https://www.instagram.com/lamp_research/" rel="noreferrer" target="_blank">
          <img src={instagram} alt="instagram" className="socialIcon"></img>
        </a>
        <a href="https://www.threads.net/@lamp_research" rel="noreferrer" target="_blank">
          <img src={threadsIcon} alt="threads" className="socialIcon"></img>
        </a>
        <a href="https://www.youtube.com/channel/UCQ0xEyMmFR7nm1i-LzSfazw" rel="noreferrer" target="_blank">
          <img src={youtube} alt="youtube" className="socialIcon"></img>
        </a>
      </div>
      {/* <div className="col-sm-3">
        <img src={footerImage} className="footer-images" alt="azadi ka mahostav" />
      </div> */}
    </div>
    <div className="copyright">
      Copyright © 2023 Laborartory for Advanced Manufacturing and Processing, IIT JAMMU all rights reserved.
    </div>
  </div>;
}

export default Footer;
