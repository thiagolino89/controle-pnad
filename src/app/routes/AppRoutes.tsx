import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import DashboardPage from "../../features/dashboard/DashboardPage";
import MunicipiosPage from "../../features/municipios/MunicipiosPage";

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

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}