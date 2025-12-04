import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/layouts/NavBar";
import { Footer } from "@/layouts/Footer";
import Home from "@/pages/Home";
import Actions from "@/pages/Actions";
import HowToParticipate from "@/pages/HowToParticipate";
import Ranking from "@/pages/Ranking";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import { PrivateRoute } from "@/routes/PrivateRoutes";
import Dashboard from "@/pages/Ranking";
import { AuthProvider } from "@/context/AuthContext";

export default function AppRoutes() {
  return (
    <AuthProvider>
        <Navbar />
        <div className="pt-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/how-to-participate" element={<HowToParticipate />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/ranking"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
    </AuthProvider>
  );
}
