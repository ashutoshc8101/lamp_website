import { Link } from 'react-router-dom';

import videoGalleryIcon from '../../../assets/images/video-gallery.png';

function VideoExplorer() {
  return <div className="col-sm-4 folder">
      <Link to={`/gallery/video-gallery`}>
        <img src={videoGalleryIcon} alt="folder" className="folder-image" />
      </Link>
      <p>Lab Videos</p>
  </div>
}

export default VideoExplorer;