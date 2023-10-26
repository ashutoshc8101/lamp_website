import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookChapter from './pages/publications/components/BookChapter';
import ConferencePaper from './pages/publications/components/ConferencePaper';
import ResearchPaper from './pages/publications/components/ResearchPaper';
import About from './pages/About'
import Team from './pages/team/Team';
import Contact from './pages/contact/Contact';
import Publications from './pages/publications/Publications';
import Gallery from './pages/gallery/Gallery';
import GalleryFolder1 from './pages/gallery/folder1/Folder1';
import Explorer from './pages/gallery/explorer/Explorer';
import Research from './pages/research/Research';
import ErrorPage from './components/error/Error';
import LabHead from './pages/team/lab-head';
import TeamImage from './pages/team/team-image';
import PhdScholars from './pages/team/phd-sholars';
import Intern from './pages/team/intern'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import JRF from './pages/team/jrf';
import VideoGallery from './pages/gallery/video-gallery/video-gallery';
import VideoExplorer from './pages/gallery/video-explorer/video-explorer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />}>
        <Route path="team" element={<TeamImage />} />
        <Route path="lab-head" element={<LabHead />} />
        <Route path="phd-scholars" element={<PhdScholars />} />
        <Route path="jrf" element={<JRF />} />
        <Route path="interns" element={<Intern />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/publications" element={<Publications />}>
        <Route path="research-papers" element={<ResearchPaper />} />
        <Route path="book-chapters" element={<BookChapter />} />
        <Route path="conference-papers" element={<ConferencePaper />} />
      </Route>
      <Route path="/research" element={<Research />} />
      <Route path="/gallery" element={<Gallery />}>
        <Route path="" element={<Explorer />} />
        <Route path="folder1" element={<GalleryFolder1 />} />
        <Route path="video" element={<VideoExplorer />} />
        <Route path="video-gallery" element={<VideoGallery />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
