import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import App from './App';
import { MatchesProvider } from './contexts/MatchesContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <MatchesProvider>
        <App />
        </MatchesProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
