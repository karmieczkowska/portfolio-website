import React from 'react';
import "./index.css"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import Success from './components/Success';
// import ProjectDisplay from './pages/ProjectDisplay';
import Header from './components/header/Header';
import Home from './components/home/Home';


const App = () => {
  return (
    // <Router>
    //   <div className="app">
    //     <Navbar />
    //     {/* <Routes>
    //       <Route path="/portfolio-website" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/project/:id" element={<ProjectDisplay />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/success" element={<Success />} />
    //     </Routes> */}
    //     <Home />
    //     <About />
    //     <Projects />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </Router>
    <>
    <Header />
    <main className='main'>
      <Home />
    </main>
    </>
  );
};

export default App;