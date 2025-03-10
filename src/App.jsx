import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { AnimatePresence } from "framer-motion";
import { useContextProvider } from "./utils/GlobleContextProvider";
import gsap from "gsap";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Maintenance from "./pages/maintenance"
import Carrier from "./pages/Carrier"


//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Quote from "./pages/Quote";

// Components
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cursor from "./components/CustomCursor";

//Css
import "./App.scss";
import Preloader from "./components/Preloader";
import Services from "./pages/Services";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const { locoScroll, setLocoScroll, setCursorSettings } = useContextProvider();
  const location = useLocation();
  const AppRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        smoothTouch: false,
        autoResize: true,
      },
    });

    setLocoScroll(locomotiveScroll);

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    const observer = new ResizeObserver(refreshScrollTrigger);
    observer.observe(AppRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = (target) => {
    if (locoScroll)
      locoScroll.scrollTo(target, {
        options: {
          immediate: true,
        },
      });
  };

  useEffect(() => {
    setCursorSettings({
      size: 1,
      isSticky: false,
      color: "transparent",
      isBlending: true,
      text: "",
      border: "#00000057",
    });

    setTimeout(() => {
      scrollTo("top");
    }, 600);
  }, [location.pathname]);

  return (
    <div ref={AppRef}>
      <ToastContainer />
      <Cursor />
      <Navbar />
      <Preloader />
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/Careers" element={<Carrier />} />

        </Routes>
      </AnimatePresence>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </div>
  );
}

export default App;
