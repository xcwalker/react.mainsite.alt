import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="posts">
            <Route index element={<Navigate to="/posts/browse" />} />
            <Route path="browse" element={<span>Temp</span>} />
            <Route path=":id" element={<span>Temp</span>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
