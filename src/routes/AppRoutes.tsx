import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/layouts/NavBar";
import Home from "@/pages/Home";
import Actions from "@/pages/Actions";
import HowToParticipate from "@/pages/HowToParticipate";
import Ranking from "@/pages/Ranking";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/how-to-participate" element={<HowToParticipate />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
