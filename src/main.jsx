import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'
import App from './app/App'




ReactDOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
