import { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from "./Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/hi' element={<h1>Hi there !</h1>}/>
                <Route path = '/' element={<Home />}/>
                <Route path = '/movie/:tomato' element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
