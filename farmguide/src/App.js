import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AdminHome from './DotNetComponent/AdminHome';
import FarmGuideHomePage from './DotNetComponent/FarmGuideHome';
import FarmerHome from './DotNetComponent/FarmerHome';
import WholesalerHome from './DotNetComponent/WholesalerHome';
import NavigationBar from './DotNetComponent/NavigationBar';
import WholesalerRegistration from './DotNetComponent/WholesalerRegistration';
import FarmerRegistration from './DotNetComponent/FarmerRegistration';
import LoginComponent from './DotNetComponent/LoginPage';
import LogoutComponent from './DotNetComponent/LogoutPage';
import AboutUs from './DotNetComponent/AboutusComponent';
import ContactUs from './DotNetComponent/ContactComponent';
import Footer from './DotNetComponent/FooterComponent';




function App() {

  return (
    <div className="App">
      <header>
        <NavigationBar />
        <Routes>
            <Route path="/" element ={<FarmGuideHomePage />}></Route>
            <Route path="/home" element ={<FarmGuideHomePage />}></Route>
            <Route path="/login" element ={<LoginComponent />}></Route>
            <Route path="/farmer/registration" element ={<FarmerRegistration />}></Route>
            <Route path="/wholesaler/registration" element ={<WholesalerRegistration />}></Route>
            <Route path="/farmer/home" element ={<FarmerHome />}></Route>
            <Route path="/wholesaler/home" element ={<WholesalerHome />}></Route>
            <Route path="/admin/home" element ={<AdminHome />}></Route>
            <Route path="/logout" element={<LogoutComponent />}></Route>
            <Route path="/aboutus" element ={<AboutUs />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            
            </Routes>
        </header>
      {/* <footer className='footertag'>
      <p style={{color:'black'}}>Copyright ©FarmGuide</p>
    </footer> */}
    <Footer />
    </div>
  );
}

export default App;