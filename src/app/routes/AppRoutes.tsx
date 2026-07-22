import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import ProtectedRoute from "../../routes/ProtectedRoute";

import DashboardPage from "../../features/dashboard/DashboardPage";
import MunicipiosPage from "../../features/municipios/MunicipiosPage";
import UpasPage from "../../features/upas/UpasPage";
import LoginPage from "../../features/auth/pages/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/municipios"
        element={
          <ProtectedRoute>
            <MainLayout>
              <MunicipiosPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/upas"
        element={
          <ProtectedRoute>
            <MainLayout>
              <UpasPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}