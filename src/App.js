import './App.css';
import Navbar from './Home-Components/Navbar';
import Home from './Home-Components/Home';
import Project from './Project-Components/ProjectPage';
import  {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes><Route exact path="/" element={<Home/>}/></Routes>
    <Routes><Route exact path="/projects/:id" element={<Project/>}/></Routes>
    </>
  );
}

export default App;
