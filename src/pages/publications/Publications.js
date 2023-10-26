import './publications.css';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/footer';

import { Link, Outlet } from 'react-router-dom';

function Publications() {

  return <>
    <Header></Header>
    <div className="publications row">
      <div className="col-xl-2 col-md-3 col-12 sidenav">
        <ul class="list-group">
          <li class="list-group-item">
            <Link to={`/publications/research-papers`}>Journals</Link>
          </li>
          <li class="list-group-item">
            <Link to={`/publications/book-chapters`}>Books Chapters</Link>
          </li>
          <li class="list-group-item">
            <Link to={`/publications/conference-papers`}>Conference Papers</Link>
          </li>
        </ul>
      </div>
      <div className="col-xl-8 col-md-9 col-12 outlet text-justify">
        <Outlet />
      </div>
    </div>
    <Footer></Footer>
  </>;
}

export default Publications;