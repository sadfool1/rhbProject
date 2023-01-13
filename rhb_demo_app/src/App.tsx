import './App.css';
import SideNav from "./components/SideNav/SideNav.component"
import HomePage from './components/HomePage/HomePage.component';
import React from "react";


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <SideNav />
          {/* <HomePage /> */}
        </div>
        <div className="col-span-4">
          <HomePage />
        </div>
      </div>
  </div>
  );
}

export default App;
