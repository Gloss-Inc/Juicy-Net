import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import ProfilePage from "./components/pages/profile-page/ProfilePage";
import MainPage from "./components/pages/main-page/MainPage";

function App() {
    return (
        <div className='App'>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
