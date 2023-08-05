import React from "react";
import { BrowserRouter as Router, Route, Routes , Navigate } from "react-router-dom";
import LoginAdmin from "./Component/View/Login/Login";
import Dashboard from "./Component/View/Dashboard/Dashboard";
import BlogPage from "./Component/View/Blog/Blog";
import DetailPage from "./Component/View/Blog/Detail";
import ArsipPage from "./Component/View/Dashboard/Arsip";
import Home from "./Component/View/LandingPage/Home";
import Sejarah from "./Component/View/LandingPage/SejarahNu";
import PostingArtikel from "./Component/View/Dashboard/Posting";
import DetailNotFound from "./Component/View/LandingPage/Nothing";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login-admin" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/sejarah-nu" element={<Sejarah />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="/posting-artikel" element={<PostingArtikel />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<DetailNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
