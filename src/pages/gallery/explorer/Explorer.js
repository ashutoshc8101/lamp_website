import folderIcon from '../../../assets/images/folder1.jpg';
import './explorer.css';
import { Link } from 'react-router-dom';

function Explorer() {

  return <div className="col-sm-4 folder">
      <Link to={`/gallery/folder1`}>
        <img src={folderIcon} alt="folder" className="folder-image" />
      </Link>
      <p>Lab Images</p>
    </div>
}

export default Explorer;
