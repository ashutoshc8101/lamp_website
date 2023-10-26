import labHead from '../../assets/images/lab-head-2.jpeg'
import './lab-head.css';

function LabHead() {
  return <>
    <div>
      <h1 className="team-headline">Lab Head</h1>
      <div className="row lab-head-profile padding">
        <div className="col-sm-3">
          <img src={labHead} className="lab-head-image" alt="lab head" />
        </div>
        <div className="col-sm-9">
          <h4>Dr. Shiva S</h4>
          <p>Assistant Professor,<br />
          Laboratory for Advanced Manufacturing and Processing,<br />
          Department of Mechanical Engineering<br />
          Indian Institute of Technology Jammu</p>
        </div>

      </div>
        <hr />
        <h4>Education Qualification</h4>

        <div className="lab-head-profile">
          <ul>
            <li>
              PhD - Mechanical Engineering, Indian Institute of Technology Indore.
            </li>
            <li>
              M.E - Production Engineering, Thiagarajar College of Engineering, Anna University Tirunelveli.
            </li>
            <li>
              B.E - Mechanical Engineering, Raja College of Engineering and Technology, Anna University Chennai.
            </li>
          </ul>
        </div>

        <hr />
        <h4>Professional Experience</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Position</th>
              <th>Affliation</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assistant Professor</td>
              <td>Department of Mechanical Engineering, IIT Jammu</td>
              <td>September 2018 - till date</td>
            </tr>
            <tr>
              <td>Senior Project Officer</td>
              <td>Metallurgical and Materials Engineering, IIT Madras</td>
              <td>December 2017 - September 2018</td>
            </tr>
          </tbody>
        </table>

        <div className="row bottom-row">
          <div className="col-sm-6">
            <h4>Research Expertise</h4>
            <div className="lab-head-profile sized-box">
              <ul>
                <li>Additive Manufacturing</li>
                <li>Laser Materials Processing</li>
                <li>Spray Techniques</li>
                <li>Shape Memory Alloys</li>
                <li>Smart Materials</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <h4>Membership</h4>
            <div className="lab-head-profile sized-box">
              <ul>
                <li>Life Member, Indian Lasor Association (ILA)</li>
                <li>Life Member, Indian Institute of Metals (IIM)</li>
                <li>Life Member, Powder Metallurgical Association of India (PMAI)</li>
                <li>Life Member, Indian Institute of Welding (IIW)</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </>;
}

export default LabHead;