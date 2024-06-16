import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TestPage from '../pages/dash/teste';
import LoanSimulatorPage from '../pages/loanSimulator/loanPage';
import LoginPage from '../pages/login';
import ConsortiumPage from '../pages/consortiumSimulator/ConsortiumPage';
import FinancingPage from '../pages/financingSimulator/financingPage';
import LoanRequestPage from '../pages/loanRequest/loanRequestPage';
import LoanOpportunitiesPage from '../pages/loanOportunities/loanOportunitiesPage'; // Corrigido o caminho da nova página
import MainLayout from '../utils/MainLayout';
import { useAuth } from './AuthContext';
import Register from '../pages/register';
import Profile from '../pages/profile';
import HomePage from '../pages/home/homePage';
import AdminPage from '../pages/admin';

const Private = ({ Item }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Item /> : <Navigate to="/login" />;
};

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Private Item={HomePage} />} />
                <Route path="/teste" element={<Private Item={TestPage} />} />
                <Route path="/loan-simulator" element={<Private Item={LoanSimulatorPage} />} />
                <Route path="/consortium" element={<Private Item={ConsortiumPage} />} />
                <Route path="/financing" element={<Private Item={FinancingPage} />} />
                <Route path="/loan-request" element={<Private Item={LoanRequestPage} />} />
                <Route path="/loan-opportunities" element={<Private Item={LoanOpportunitiesPage} />} /> {/* Nova rota */}
                <Route path="/profile" element={<Private Item={Profile} />} />
                <Route path="/admin" element={<Private Item={AdminPage} />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
