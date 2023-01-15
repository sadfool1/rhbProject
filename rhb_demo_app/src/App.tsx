import React from "react";
import './App.css';
import SideNav from "./components/SideNav/SideNav.component"
import HomePage from './components/HomePage/HomePage.component';
import * as ROUTES from "./components/constants/router.constants"

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Analytics from './components/Analytics';
import Transactions from './components/Transactions';
import Accounts from './components/Accounts';
import Budget from './components/Budget';
import Settings from './components/Settings';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <SideNav />
          </div>
          <div className="col-span-4 mainbody">
            <Routes>
              <Route path={"/"} element={<HomePage />}></Route>
              <Route path={"/home"} element={<HomePage />}></Route>
              <Route path={ROUTES.ANALYTICS} element={<Analytics />}>  </Route>
              <Route path={ROUTES.TRANSACTIONS} element={<Transactions />}>  </Route>
              <Route path={ROUTES.ACCOUNTS} element={<Accounts />}>  </Route>
              <Route path={ROUTES.BUDGET} element={<Budget />}>  </Route>
              <Route path={ROUTES.SETTINGS} element={<Settings />}>  </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
