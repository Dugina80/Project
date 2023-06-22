import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Contacts from "./Contacts";

import GeneralLayout from "../layouts/GeneralLayout";



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
        <Route path="gallery" element={renderWithLayout(Gallery)}/>
        <Route path="contacts" element={renderWithLayout(Contacts)}/>
    </Routes>
);

export default Router;


