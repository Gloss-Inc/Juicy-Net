import './App.scss';
import {BrowserRouter as Router, Outlet, Route, Routes} from "react-router-dom";
import React from "react";
import ProfilePage from "./pages/profile-page/ProfilePage";
import MainPage from "./pages/main-page/MainPage";
import ThreadsPage from "./pages/threads-page/ThreadsPage";
import RulesPage from "./pages/rules-page/RulesPage";
import HeroesPage from "./pages/heroes-page/HeroesPage";
import NotFound from "./pages/not-found-page/NotFound";
import Layout from "./components/Layout/Layout";
import Thread from "./components/thread/Thread";
import ForumPage from "./pages/forum-page/ForumPage";

function App() {
    return (
        <div className='App'>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<MainPage />}/>
                            <Route path="rules" element={<RulesPage/>}/>
                            <Route path="heroes" element={<HeroesPage/>}/>
                            <Route path="forum" element={<ForumPage/>} />
                            <Route path="forum/:category" element={<ThreadsPage/>}>
                                <Route path=":threadId" element={<Thread />} />
                            </Route>
                            <Route path="user" element={<Outlet/>}>
                                <Route index element={<NotFound />} />
                                <Route path=":username" element={<ProfilePage />} />
                            </Route>
                            <Route path="*" element={<NotFound/>} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
