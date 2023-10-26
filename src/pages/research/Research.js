import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/Image1.jpg'
import Image2 from '../../assets/images/Image2.jpg';
import Image3 from '../../assets/images/Image3.png';

import img1 from '../../assets/images/research/1.png';
import img2 from '../../assets/images/research/2.png';
import img3 from '../../assets/images/research/3.jpg';
import './research.css';

function Research() {
  return <>
    <Header />
      <Carousel fade className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block"
            src={Image1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Image2}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Image3}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <div className="research-content">
        <div className="row">
          <div className="col-sm-5">
            <img src={img1} alt="research" className="research-image" />
          </div>
          <div className="col-sm-7">
            <h3>Additive Manufacturing of Functionally Graded Materials</h3>
            <p className="research-synopsis">
              In nuclear reactors, reprocessing of used nuclear fuel is done to recover uranium and
              plutonium from it. The material faces extreme environmental conditions in these reprocessing
              tanks, like high temperatures and corrosion. A single material is not suitable for the
              fabrication of a whole reprocessing unit and requires the use of several materials at a different
              location with different properties. Conventional joining, such as welding, is not preferred as it
              may result in many failures such as leakage and delamination, in such extreme conditions.
              Using functionally graded materials (FGM) may be an appropriate solution for this problem.
              In our work, CMT-WAAM is chosen to be the fabrication of this FGM (Metal 1 + interlayer
              + Metal 2).
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7">
            <h3>Additive Manufacturing of Mechanical Components</h3>
            <p className="research-synopsis">
              Additive manufacturing (AM)  has recently attracted the attention of strategic areas due to the freedom of creating the component anytime with fewer resources.
              Hence, with greater deposition rates, the component fabrication through wire arc additive manufacturing (WAAM) can be accomplished in the minimum possible time.
              Therefore, the intent behind the present research work is to check the feasibility of employing WAAM in fabricating defense components.
              Taking into view the working conditions and standard properties specified by DRDO, two types of materials are used in the current study i.e. ER110SG and SS410.
              The very first step involved is to understand the relation of process parameters in terms of bead characteristics like bead height and width.
              Since in the present case, the end requirement is to fabricate 9 mm internal diameter gun barrel.
              Therefore, the selection of parameters is made to minimize material removal during post processing.
              In the preliminary stage, a single layer of circular beads (7 mm internal diameter) are deposited using different combination of travel speed and wire feed speed.
              A set of feasible parameters (WFS, TS) are selected and six gun barrels are fabricated using WAAM technique with the build height of 130 mm.
              In the subsequent step, the mechanical properties of these barrels will be tested.
              The one barrel out of six, having superior properties will be considered for further analysis.
            </p>
          </div>
          <div className="col-sm-5">
            <img src={img2} alt="research" className="research-image margin-top" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5">
            <img src={img3} alt="research" className="research-image" />
          </div>
          <div className="col-sm-7">
            <h3>Atmospheric Plasma Sprayed High Entropy Alloy</h3>
            <p className="research-synopsis">
              The primary objective of the work is to coat the metals used to manufacture aerospace
              components, like stellite, with two different types of wear-resistant high entropy alloy (HEA)
              to improve the quality and functionality of the components. AlCoCrFeNiTi equiatomic HEA
              is a promising option among the high entropy alloy for its ability to be an excellent wear-
              resistant material. Also, FeCoCrNiW 0.3 +5% C is a newly discovered HEA with good wear
              resistance. Similarly, in thermal spray coating methodologies, atmospheric plasma spraying
              (APS) is opted to coat both high entropy alloys on stellite substrate.
              APS facilitates high particle velocity at higher process temperatures resulting in a defect-free
              and dense deposition. APS enables various advantages compared to conventional coating
              techniques, such as a wide range of spray material, higher performance and lower cost, on-
              site work, the ability to coat the complex shape and protection from wear, corrosion, erosion
              and oxidation. A novel methodology of laser surface processing is to be carried out to
              improve the surface properties of the deposited HEA coatings. The coated substrate is
              subjected to structural, morphological and mechanical characterizations to test the wear
              resistance capacity pre and post-laser surface processing. However, the thermal stability of
              both the developed HEAs is crucial at the elevated temperature. The thermal stability of both
              deposited coatings is investigated using heat treatment.
            </p>
          </div>
        </div>
      </div>
    <Footer />
  </>
}

export default Research;
