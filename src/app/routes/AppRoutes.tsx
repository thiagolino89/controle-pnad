import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";

import DashboardPage from "../../features/dashboard/DashboardPage";
import MunicipiosPage from "../../features/municipios/MunicipiosPage";
import UpasPage from "../../features/upas/UpasPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        }
      />

      <Route
        path="/municipios"
        element={
          <MainLayout>
            <MunicipiosPage />
          </MainLayout>
        }
      />

      <Route
        path="/upas"
        element={
          <MainLayout>
            <UpasPage />
          </MainLayout>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}