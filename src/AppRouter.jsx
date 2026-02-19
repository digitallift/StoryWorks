import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// Lazy load pages
const Homepage = lazy(() => import("./Pages/homepage.jsx"));
const Aboutpage = lazy(() => import("./Pages/aboutpage.jsx"));
const Contactpage = lazy(() => import("./Pages/contactpage.jsx"));
const Servicespage = lazy(() => import("./Pages/servicespage.jsx"));
const Loginpage = lazy(() => import("./Pages/loginpage.jsx"));

// Better Loader Component
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CircularProgress size={50} thickness={4} />
    </Box>
  );
};

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
