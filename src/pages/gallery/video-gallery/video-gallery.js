import './video-gallery.css';

import v1 from '../../../assets/folder1/8.mp4';
import v2 from '../../../assets/folder1/9.mp4';

function VideoGallery() {

  return <div className="container gallery-container">
    <div>
        <video src={v1} controls />
    </div>
    <div>
        <video src={v2} controls />
    </div>
  </div>;
}

export default VideoGallery;
