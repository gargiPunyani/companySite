import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./hooks/scrollToTop";
import AboutUs from "./pages/AboutUs";
import BlogLayout from "./pages/BlogLayout";
import Blogs from "./pages/blogs";
import ContactUs from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import IndustryLayout from "./pages/IndustryLayout";
import OurTeam from "./pages/OurTeams";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServicesLayout from "./pages/ServicesLayout";
import ServicesPage from "./pages/ServicesPage";
import TermsAndConditions from "./pages/TermsAndCondition";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/tnc" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/industries/:industry" element={<IndustryLayout />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:service" element={<ServicesLayout />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<BlogLayout />} />
            <Route path="/team" element={<OurTeam />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
