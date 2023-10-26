import teamImage from '../../assets/images/Team.jpg'

function TeamImage() {
  return <>
    <div>
      <h1 className="team-headline">Team</h1>
      <center>
        <img src={teamImage} alt="team" className="team-image" />
      </center>
    </div>
  </>;
}

export default TeamImage;