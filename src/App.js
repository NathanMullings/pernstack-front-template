import  React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';
import { fetchUserDetails } from './actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const dispatch = useDispatch();
  const  user  = useSelector(state => state.auth.user);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

 

  React.useEffect(() => {
    dispatch(fetchUserDetails());
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/project"
          element={
            <PrivateRoute>
              <ProjectPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
