import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { PhotographyPage } from "./pages/PhotographyPage";
import { FilmsPage } from "./pages/FilmsPage";
import { NotFoundPage } from "./pages/NotFoundPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/photography" element={<Layout><PhotographyPage /></Layout>} />
        <Route path="/films" element={<Layout><FilmsPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/editorial" element={<Layout><PhotographyPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
