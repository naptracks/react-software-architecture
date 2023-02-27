import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About.js";
import { Articles } from "./pages/Articles.js";
import { Home } from "./pages/Home.js";

function App() {
  console.log(window.location.href)
  return (
    <>
  
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

  
    </>
  );
}

export default App;
