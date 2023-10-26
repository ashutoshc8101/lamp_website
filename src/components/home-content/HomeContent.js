import './homeContent.css';
import lab1 from '../../assets/images/Lab1.jpg';
import labHead from '../../assets/images/lab-head.jpeg';

function HomeContent() {
  return <div className="container text-justify">
    <div className="row">
      <div className="col-sm-6">
        <div className="content-group">
          <h1>Mission</h1>
          <p>Mission of the lab is to use advanced manufacturing techniques like additive manufacturing and
laser surface processing to address industrial problems. By extracting the advantages of the non-
conventional techniques in depth, research is being done in the aspect of design, manufacturing,
materials science and material processing.</p>
        </div>

        <div className="content-group">
          <h1>Vision</h1>
          <p>Vision of the lab is to develop different types of indigenous machine set-ups, out of which the self-
sustaining prowess will be the highest level of achievement. In addition, the developed machines will
be beneficial to address existing and even non-existing problems the research and industrial
community is about to face.</p>
        </div>

        <div className="content-group">
          <h1>Goal</h1>
          <p>The lab primarily focusses on coming up with maverick facilities synchronized with additive
manufacturing and materials processing, which can primarily pave way for path breaking research
and addressing long lasting problems of industry are benefitted. The lab consistently keeps working
in the mentioned points as the primary goal.</p>
        </div>
      </div>
      <div className="col-sm-6">
        <img src={lab1} className="lab-description-image" alt="lab description" />
      </div>
    </div>
    <div className="margin-block" />
    <div className="row">
      <div className="col-sm-6">
        <div className="content-group">
          <h1>Message from the lab head</h1>
          <blockquote class="blockquote font-italic">
            "Laboratory for Advanced Manufacturing and Processing, IIT Jammu is a young lab, which is
consistently working and steadily progressing with novel ideas in the line of additive manufacturing
and laser materials processing. Both additive manufacturing and laser materials processing are fields
of interest in the research and industrial community. We are actively contributing in the mentioned
verticals and we are addressing industrial problems immediately with our indigenously developed
experimental set ups and machines. I invite all to feel free in getting touch with us, to initiate our
collaboration and attain mutual growth"
          </blockquote>
        </div>
      </div>

      <div className="col-sm-6 align-center">
        <img src={labHead} className="home-lab-head-image" alt="lab head" />
        <div className="bold-text">
          <b>Dr. Shiva S</b><br />
          Assistant Professor<br />
          Laboratory for Advanced Manufacturing and Processing<br />
          Dept of Mechanical Engineering<br />
          Indian Institute of Technology Jammu
        </div>
      </div>
      {/* <div className="col-sm-2"></div> */}
    </div>
  </div>;
}

export default HomeContent;
