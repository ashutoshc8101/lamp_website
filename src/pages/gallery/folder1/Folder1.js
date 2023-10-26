import './folder1.css';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import img1 from '../../../assets/folder1/1.jpeg';
import img2 from '../../../assets/folder1/2.jpeg';
import img3 from '../../../assets/folder1/3.jpeg';
import img4 from '../../../assets/folder1/4.jpeg';
import img5 from '../../../assets/folder1/5.jpeg';
import img6 from '../../../assets/folder1/6.jpeg';
import img7 from '../../../assets/folder1/7.jpeg';
import v1 from '../../../assets/folder1/8.mp4';
import v2 from '../../../assets/folder1/9.mp4';

function Folder1() {
    const onInit = () => {};

  return <div className="container gallery-container">
    <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgVideo]}>
        <a href={img1}>
            <img alt="img1" src={img1} />
        </a>
        <a href={img2}>
            <img alt="img2" src={img2} />
        </a>
        <a href={img3}>
            <img alt="img3" src={img3} />
        </a>
        <a href={img4}>
            <img alt="img4" src={img4} />
        </a>
        <a href={img5}>
            <img alt="img5" src={img5} />
        </a>
        <a href={img6}>
            <img alt="img6" src={img6} />
        </a>
        <a href={img7}>
            <img alt="img7" src={img7} />
        </a>
    </LightGallery>
  </div>;
}

export default Folder1;
