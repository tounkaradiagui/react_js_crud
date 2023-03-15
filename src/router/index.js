import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import About from '../pages/About.js';
import Student from "../pages/Student.js";
import StudentCreate from "../pages/StudentCreate.js";


function MyRouter(){
    return (
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/students" element={ <Student/>} />

            <Route path="/students/create" element={ <StudentCreate/>} />
        </Routes>
    )
}

export default MyRouter;