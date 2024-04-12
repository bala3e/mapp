import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import Header from "./Header";
import ProfileFilter from "./ProfileFilter";


export default function App() {
 
  return (
    <>
    <Header/>
    
  
    <Routes>
    <Route  path="/" element={<ProfileFilter/>} />
        <Route  path="/create-profile" element={<Profile />} />
        <Route  path="/profile-list" element={<ProfileFilter />} />
        {/* <Route  path="/profile" element={<Profile />} /> */}
       
      </Routes>
         </>
  );
}

