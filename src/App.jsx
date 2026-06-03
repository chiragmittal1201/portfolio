import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Perspective = lazy(() => import("./pages/Perspective"));
const Projects = lazy(() => import("./pages/Projects"));
const BeyondCode = lazy(() => import("./pages/BeyondCode"));
const Capabilities = lazy(() => import("./pages/Capabilities"));

function Loading() {
  return (
    <div className="h-screen w-screen bg-[#0B0008] flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perspective" element={<Perspective />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/beyond-code" element={<BeyondCode />} />
        <Route path="/capabilities" element={<Capabilities />} />
      </Routes>
    </Suspense>
  );
}