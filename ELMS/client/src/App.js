import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import EmployeeDash from "./pages/EmployeeDash"
import AdminDash from "./pages/AdminDash"
import ManageLeave from "./pages/ManageLeave"
import LeaveRequestForm from "./pages/LeaveRequestForm"
import ViewBalances from "./pages/ViewBalances"
import ViewHistory from "./pages/ViewHistory"
import CompanyRules from "./pages/CompanyRules"

import HomeNavbar from "./components/HomeNavbar"
import DashNavbar from "./components/DashNavbar"
import Footer from "./components/Footer"

import "./style/HomeNavbar.css"
import "./style/Footer.css"
import "./style/DashNavbar.css"
import "./style/AdminNavbar.css"
import "./style/ManageLeave.css"
import "./style/LeaveRequestForm.css"
import "./style/ViewBalances.css"
import "./style/ViewHistory.css"
import "./style/AdminDash.css"
import "./style/EmployeeDash.css"
import "./style/Home.css"
import "./style/About.css"
import "./style/CompanyRules.css"
import "./style/Register.css"
import "./style/Login.css"

import { Helmet } from 'react-helmet';


const HomeLayout = () => {
  return (
    <>
      <HomeNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

const DashLayout = () => {
  return (
    <>
      <DashNavbar />
      <Outlet />
    </>
  );
};

const AdminDashLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      }, {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "/",
    element: <DashLayout />,
    children: [
      {
        path: "/employeeDash",
        element: <EmployeeDash />
      },
      {
        path: "/adminDash",
        element: <AdminDash />
      },
      {
        path: "/manageLeave",
        element: <ManageLeave />
      },
      {
        path: "/companyRules",
        element: <CompanyRules />
      },
      {
        path: "/request-leave",
        element: <LeaveRequestForm />
      },
      {
        path: "/view-balances",
        element: <ViewBalances />
      },
      {
        path: "/view-history",
        element: <ViewHistory />
      },]
  },
  {
    path: "/",
    element: <AdminDashLayout />,
    children: [
      {
        path: "/adminDash",
        element: <AdminDash />
      },
      {
        path: "/manageLeave",
        element: <ManageLeave />
      },
      {
        path: "/companyRules",
        element: <CompanyRules />
      },
      {
        path: "/request-leave",
        element: <LeaveRequestForm />
      },
      {
        path: "/view-balances",
        element: <ViewBalances />
      },
      {
        path: "/view-history",
        element: <ViewHistory />
      },]
  },
]);

function App() {
  const [loggedInEmployeeId, setLoggedInEmployeeId] = useState(null);

  const handleLogin = (employeeId) => {
    setLoggedInEmployeeId(employeeId);
  };

  return (
    <div className='App'>
      {/* {loggedInEmployeeRole === 'Manager' ? <AdminNavbar /> : <DashNavbar />} */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        />
      </Helmet>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </div>
  );
}

export default App;