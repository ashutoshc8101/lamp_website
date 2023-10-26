import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import './team.css';

import { Link, Outlet } from 'react-router-dom';

function Team() {
  return <>
  <Header></Header>
    <div className="publications row">
      <div className="col-xl-2 col-md-3 col-12 sidenav">
        <ul class="list-group">
          <li class="list-group-item">
            <Link to={`/team/lab-head`}>Lab Head</Link>
          </li>
          <li class="list-group-item">
            <Link to={`/team/phd-scholars`}>Phd Scholars</Link>
          </li>
          <li class="list-group-item">
            <Link to={`/team/jrf`}>JRFs</Link>
          </li>
          <li class="list-group-item">
            <Link to={`/team/interns`}>Interns</Link>
          </li>
        </ul>
      </div>
      <div className="col-xl-10 col-md-9 col-12 outlet text-justify">
        <Outlet />
      </div>
    </div>
    <Footer></Footer>
  </>;
}

export default Team;