import intern1 from '../../assets/images/jrf/intern1.jpeg';

function Intern() {
  return <center>
    <h2>Interns</h2>
    <div className="row scholar-images-row">
      <div className="col-sm-12">
      <img src={intern1} className="scholar-image" alt="team" />
        <h3>Mr. Sudhanshu Gangwar, IIT Mandi</h3>
        <h5>Under RISE Internship Programme</h5>
      </div>
    </div>
  </center>;
}

export default Intern;
