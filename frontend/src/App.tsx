import React from 'react';
import './App.css';
import AuthScreen from './components/AuthScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PhotographerDashboard from './components/PhotographerDashboard';
import PurchasedImages from './components/PurchasedImages';
import UserDashboard from './components/UserDashboard';
import Layout from './components/Layout';

const App = () => {
  // const { isAuthenticated, role, login, logout } = useAuth();
  const isAuthenticated: Boolean = true;
  let role: String = 'user';

  if (!isAuthenticated) {
    // If not logged in, show the authentication screen
    return <AuthScreen />;
  }
  return (
    <Router>
      <Routes>
        {role === 'user' && (
          <>
            <Route
              path="/"
              element={
                <Layout role="user">
                  <UserDashboard />
                </Layout>
              }
            />
            <Route
              path="/purchased"
              element={
                <Layout role="user">
                  <PurchasedImages />
                </Layout>
              }
            />
            <Route
              path="/:photographerName"
              element={
                <Layout role="user">
                  <UserDashboard />{' '}
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout role="user">
                  <Navigate to="/" replace />{' '}
                </Layout>
              }
            />
          </>
        )}
        {role === 'photographer' && (
          <>
            <Route
              path="/"
              element={
                <Layout role="photographer">
                  <PhotographerDashboard /> /
                </Layout>
              }
            />
            <Route
              path="/upload"
              element={
                <Layout role="photographer">
                  <PhotographerDashboard />{' '}
                </Layout>
              }
            />
            <Route
              path="/payment-method"
              element={
                <Layout role="photographer">
                  <PhotographerDashboard />{' '}
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout role="photographer">
                  <Navigate to="/" replace />{' '}
                </Layout>
              }
            />
          </>
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
