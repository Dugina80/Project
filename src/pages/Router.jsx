import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Schedule from "./Schedule";
import Contacts from "./Contacts";
import PhotoPage from "./Gallery/PhotoPage";
import VideoPage from "./Gallery/VideoPage";
import GeneralLayout from "../layouts/GeneralLayout";
import Trainers from "./Trainers";




const renderWithLayout = (Component, Layout = GeneralLayout) => (
    <Layout>
      <Component/>
    </Layout>
  );


const Router = () => (
    <Routes>
         <Route path="/" element={renderWithLayout(HomePage)}/>
        <Route path="aboutUs" element={renderWithLayout(AboutUs)}/>
        <Route path="schedule" element={renderWithLayout(Schedule)}/>
       <Route path="trainers" element={renderWithLayout(Trainers)}/>
        <Route path="gallery/photos" element={renderWithLayout(PhotoPage)} />
        <Route path="gallery/videos" element={renderWithLayout(VideoPage)} />
        <Route path="contacts" element={renderWithLayout(Contacts)}/>
    </Routes>
);

export default Router;


