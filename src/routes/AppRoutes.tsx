import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HeaderFooterOutlet from "./HeaderFooterOutlet";
import Loading from "../components/Loading";

const LazyHome = lazy(() => import("../pages/HomePage"));
const LazyAboutUs = lazy(() => import("../pages/AboutUsPage"));
const LazyContactUs = lazy(() => import("../pages/ContactUsPage"));
const LazyFeedBack = lazy(() => import("../pages/FeedBackPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooterOutlet />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyHome />
            </Suspense>
          }
        />

        <Route
          path="/about-us"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAboutUs />
            </Suspense>
          }
        />

        <Route
          path="/feedback"
          element={
            <Suspense fallback={<Loading />}>
              <LazyFeedBack />
            </Suspense>
          }
        />

        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<Loading />}>
              <LazyContactUs />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
