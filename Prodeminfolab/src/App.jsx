import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from '../src/components/Navbar/Navbar';
import Ourwork from './pages/Ourwork/OurworkMission';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import OurworkImpact from './pages/Ourwork/OurworkImpact';
import Founder from './pages/OurPeople/Founder';
import Board from './pages/OurPeople/Board';
import Funder from './pages/OurPeople/Funder';
import OurProjects from './pages/OurProjects/OurProjects';
import About from './pages/ReportingRight/About';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/*' element={<NotFound />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/subscribe' element={<Footer />}/>
        <Route path='/ourwork-mission' element={<Ourwork />}/>
        <Route path='/ourwork-impact' element={<OurworkImpact />}/>
        <Route path='/ourpeople-founder' element={<Founder />}/>
        <Route path='/ourpeople-board' element={<Board />}/>
        <Route path='/ourpeople-funder' element={<Funder />}/>
        <Route path='/ourprojects' element={<OurProjects />}/>
        <Route path='/reportingright-about' element={<About />}/>
      </Routes>
      
    </div>
  )
}

export default App
