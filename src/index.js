import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./legacypages/home"
import Projects from "./legacypages/projects"
import Members from "./legacypages/members";
import AboutUs from "./legacypages/about-us";
import NotFound from "./legacypages/not-found";
import {getAllMembers} from "./data/member";
import Member from "./legacypages/member";
import {getAllProjects} from "./data/project";
import Project from "./legacypages/project";
import Sitemap from "./legacypages/sitemap";
import {QueryClient, QueryClientProvider} from "react-query";
import Legal from "./legacypages/legal";

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                {/* Main legacypages */}
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/projects' element={<Projects/>}/>
                <Route exact path='/members' element={<Members/>}/>
                <Route exact path='/about-us' element={<AboutUs/>}/>
                <Route exact path='/legal' element={<Legal/>}/>

                {/* Member legacypages */}
                {getAllMembers().map(member => <Route exact path={member.getMemberURL()}
                                                      element={<Member member={member}/>}/>)}
                {getAllMembers().map(member => <Route exact path={member.pseudo}
                                                      element={<Navigate href={member.getMemberURL()} replace/>}/>)}

                {/* Projects legacypages */}
                {getAllProjects().map(project => <Route exact path={project.getProjectURL()}
                                                        element={<Project project={project}/>}/>)}
                {getAllProjects().map(project => <Route exact path={project.getURLFriendlyName()}
                                                        element={<Navigate href={project.getProjectURL()} replace/>}/>)}

                {/* Sitemap */}
                <Route exact path='/sitemap' element={<Sitemap/>}/>

                {/* 404 */}
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
