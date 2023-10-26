import jrf1 from '../../assets/images/jrf/jrf1.jpeg';
import jrf2 from '../../assets/images/jrf/jrf2.jpeg';
import jrf3 from '../../assets/images/jrf/jrf3.jpeg';

function JRF() {
  return <center>
    <h2>JRFs</h2>
    <div className="row scholar-images-row">
      <div className="col-sm-4">
      <img src={jrf1} className="scholar-image" alt="team" />
        <h3>Mr. Mohd. Rafiq Parry</h3>
      </div>
      <div className="col-sm-4">
        <img src={jrf2} className="scholar-image" alt="team" />
        <h3>Mr. Chandra Kumar</h3>
      </div>
      <div className="col-sm-4">
        <img src={jrf3} className="scholar-image" alt="team" />
        <h3>Mr. K. Ponnarasan</h3>
      </div>
    </div>
  </center>;
}

export default JRF;
