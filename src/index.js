import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home"
import Projects from "./pages/projects"
import Members from "./pages/members";
import AboutUs from "./pages/about-us";
import NotFound from "./pages/not-found";
import {getAllMembers} from "./data/member";
import Member from "./pages/member";
import {getAllProjects} from "./data/project";
import Project from "./pages/project";
import Sitemap from "./pages/sitemap";
import {QueryClient, QueryClientProvider} from "react-query";
import Legal from "./pages/legal";

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                {/* Main pages */}
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/projects' element={<Projects/>}/>
                <Route exact path='/members' element={<Members/>}/>
                <Route exact path='/about-us' element={<AboutUs/>}/>
                <Route exact path='/legal' element={<Legal/>}/>

                {/* Member pages */}
                {getAllMembers().map(member => <Route exact path={member.getMemberURL()}
                                                      element={<Member member={member}/>}/>)}
                {getAllMembers().map(member => <Route exact path={member.pseudo}
                                                      element={<Navigate to={member.getMemberURL()} replace/>}/>)}

                {/* Projects pages */}
                {getAllProjects().map(project => <Route exact path={project.getProjectURL()}
                                                        element={<Project project={project}/>}/>)}
                {getAllProjects().map(project => <Route exact path={project.getURLFriendlyName()}
                                                        element={<Navigate to={project.getProjectURL()} replace/>}/>)}

                {/* Sitemap */}
                <Route exact path='/sitemap' element={<Sitemap/>}/>

                {/* 404 */}
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
