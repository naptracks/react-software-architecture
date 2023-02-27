import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About.js";
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter >
      <h1>Server-Side Rendering</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>

      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<About/>} path="/about" />
        <Route element={<Articles/>} path="/articles" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
