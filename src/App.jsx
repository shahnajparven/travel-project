import { Suspense } from "react";
import Home from "./pages/Home";
import Spinner from "./component/Spinner";
import { Route, Routes } from "react-router-dom";
import NotFound from "./component/NotFound";
import MainContent from "./pages/MainContent";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
