import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Signup from './Signup';
import Java from './Java';
import Python from './Python';
import Digital from './Digital';
import Powerbi from './Powerbi';
import About from './Components/About';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Login from './Components/Login';
import Favourite from './Favourite';
import Logout from './Logout';
import Changepassword from './Changepassword';
import Profilesetting from './Profilesetting';
import Recommended from './Recommended';
import Mycourses from './Mycourses';
import Tsignup from './Tsignup';
import Tlogin from './Tlogin';
import Tdashboard from './Tdashboard';
import Teacher1 from './Teacher1';
import Teacher2 from './Teacher2';
import Teacher3 from './Teacher3';
import Teacher4 from './Teacher4';
import Teacher5 from './Teacher5';
import Teacher6 from './Teacher6';
import Taddcourse from './Taddcourse';
import Tmycourse from './Tmycourse';
import Tchangepassword from './Tchangepassword';
import Tprofile from './Tprofile';
import Tlagout from './Tlagout';
import Tuser from './Tuser';
import Courses from './Courses';
import Seeall from './Seeall';
import Popularseeall from './Popularseeall';
import Cybersecurity from './Cybersecurity';
import Aws from './Aws';
import Logoutone from './Logoutone';
import Logouttwo from './Logouttwo';
import Professorseeall from './Professorseeall';
import Dblogout from './Dblogout';



function App() {
  return (
    <Router>
      <Header />
      

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="java" element={<Java/>}/>
        <Route path="python" element={<Python/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Digital' element={<Digital/>}/>
        <Route path='Powerbi' element={<Powerbi/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Favourite' element={<Favourite/>}/>
        <Route path='Logout' element={<Logout/>}/>
        <Route path='Changepassword' element={<Changepassword/>}/>
        <Route path='Profilesetting' element={<Profilesetting/>}/>
        <Route path='Recommended' element={<Recommended/>}/>
        <Route path='Mycourses' element={<Mycourses/>}/>
        <Route path="Tsignup" element={<Tsignup/>} />
        <Route path="Tlogin" element={<Tlogin/>} />
        <Route path="Tdashboard" element={<Tdashboard/>}/>
        <Route path="Teacher1" element={<Teacher1/>}/>
        <Route path="Teacher2" element={<Teacher2/>}/>
        <Route path="Teacher3" element={<Teacher3/>}/>
        <Route path="Teacher4" element={<Teacher4/>}/>
        <Route path="Teacher5" element={<Teacher5/>}/>
        <Route path="Teacher6" element={<Teacher6/>}/>
        <Route path="Taddcourse" element={<Taddcourse/>}/>
        <Route path="Tmycourse" element={<Tmycourse/>}/>
        <Route path="Tchangepassword" element={<Tchangepassword/>}/>
        <Route path="Tprofile" element={<Tprofile/>}/>
        <Route path="Tlagout" element={<Tlagout/>}/>
        <Route path="Tuser" element={<Tuser/>}/>
        <Route path="Courses" element={<Courses/>}/>
        <Route path="Seeall" element={<Seeall/>}/>
        <Route path="Popularseeall" element={<Popularseeall/>}/>
        <Route path="Cybersecurity" element={<Cybersecurity/>}/>
        <Route path="Aws" element={<Aws/>}/>
        <Route path="Logoutone" element={<Logoutone/>}/>
        <Route path="Logouttwo" element={<Logouttwo/>}/>
        <Route path="Professorseeall" element={<Professorseeall/>}/>
        <Route path="Dblogout" element={<Dblogout/>}/>
        

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
