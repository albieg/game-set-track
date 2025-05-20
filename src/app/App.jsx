import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import NotFoundPage from  "../../views/NotFoundPage"
import HomePage from "../../views/HomePage";
import LoginPage from "../../views/LoginPage";
import ProtectedRoutes from "../utils/ProtectedRoutes";



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
         </Route>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
