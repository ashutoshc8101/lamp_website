import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import { Link, Outlet } from 'react-router-dom';

function Gallery() {

  return <>
    <Header />
    <div className="row folder-container">
      <div className="col-xl-2 col-md-3 sidenav">
        <ul class="list-group">
          <li class="list-group-item">
            <Link to={`/gallery`}>Image Gallery</Link>
          </li>
          <li class="list-group-item">
            <Link to={`/gallery/video`}>Video Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="col-xl-10 col-md-9">
        <Outlet />
      </div>
    </div>
    <Footer />
  </>
}

export default Gallery;
