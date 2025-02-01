import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


/*---- All lazy import so that page download in client system only when redirected -----*/
//pages
const Home = lazy(() => import('./pages/Home'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

//admin pages
const AdminDashbord = lazy(() => import('./admin/AdminDashbord'));
import ChatList from './chatbox/ChatList';
import Blog from './components/blogs/Blog';

const Dashboard = lazy(() => import('./pages/Dashboard'));

// Layouts
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const Error = lazy(() => import('./Error'));

import { ToastContainer } from 'react-toastify';
import LazyLoader from './utils/LazyLoader';
import { AuthProvider } from './contexts/AuthContext';
import AuthWrapper from './routes/AuthWrapper';
import HomeLayout from './layouts/HomeLayout';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <ToastContainer position='top-right' autoClose={3000} /> {/* Global Toast Container */}
          <Routes>
            {/* Home Pages */}
            <Route exact path='/' element={
              <Suspense fallback={<LazyLoader />}>
                <HomeLayout />
              </Suspense>
            }>
               <Route index element={<Home />} />
               <Route exact path='blogs' element={<Blogs/>}/>
            </Route> {/* Home pages end */} 
           

            {/* For Dashboard */}
            <Route exact path='/dasboard/' element={
              <Suspense fallback={<LazyLoader />}>
                <AuthWrapper>
                  <DashboardLayout />
                </AuthWrapper>
              </Suspense>
            }>
              <Route index element={<Dashboard />} />
            </Route>
            {/* ----- Dashboard Layout End------------*/}


            {/* For admin Dashboard */}
            <Route exact path='/admin/' element={
              <Suspense fallback={<LazyLoader />}>
                <AuthWrapper>
                  <AdminLayout />
                </AuthWrapper>
              </Suspense>
            }>
              <Route index element={<AdminDashbord />} />
              <Route path='chat' element={<ChatList />} />
              <Route path='blog' element={<Blog />} />
            </Route>

            {/* For login */}
            <Route exact path='/login' element={
              <Suspense fallback={<LazyLoader />} >
                <Login />
              </Suspense>
            } />
            {/* For Signup */}
            <Route exact path='/signup' element={
              <Suspense fallback={<LazyLoader />} >
                <Signup />
              </Suspense>
            } />

            {/* For Error */}
            <Route path='*' element={<Error />} />

          </Routes>

        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
