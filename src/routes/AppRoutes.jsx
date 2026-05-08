import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "../Layouts/MainLayout";
import Loading from "../Components/Loading";

const HomePage = lazy(() => import("../pages/HomePage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ElectricalPage = lazy(() => import("../pages/ElectricalPage"));
const ConstructionPage = lazy(() => import("../pages/ConstructionPage"));
const SolarPanelsPage = lazy(() => import("../pages/SolarPanelsPage"));
const ProjectViewPage = lazy(() => import("../pages/ProjectViewPage"));
const SingleProjectPage = lazy(() => import("../pages/SingleProjectPage"));
const TermsPage = lazy(() => import("../pages/TermsPage"));
const RenovationPage = lazy(() => import("../pages/RenovationPage"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/electrical" element={<ElectricalPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/solar-panels" element={<SolarPanelsPage />} />
            <Route path="/projectview" element={<ProjectViewPage />} />
            <Route path="/renovation" element={<RenovationPage />} />

            <Route
              path="/projectviewshow/:projectTitle"
              element={<SingleProjectPage />}
            />
            <Route path="/terms" element={<TermsPage />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
