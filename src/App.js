import { 
  AboutMe,
  Home,
  Publications,
  ReasearchandTech,
  TeamAndMembers,
  TrainingAndWorkshops,
  IndustryCorner,
  StudentCorner,
  Contact,
  RFPowerAmplifiers,
  RFIntegratedCircuits,
  TurnkeySolutions
} from "./pages";

import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header } from "./components";
// import ScrollToContent from "./components/ScrollToContent";

function App() {
  const location = useLocation();

  // Routes without top padding
  const noPaddingRoutes = ["/", "/student-corner", "/industry-corner", "/technology"];
  const isNoPadding = noPaddingRoutes.includes(location.pathname);

  // Footer should NOT appear on Home
  const hideFooterRoutes = ["/"]; 
  const isFooterHidden = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Header />

      {/* Main content with conditional padding */}
      <div className={isNoPadding ? "" : "pt-20 lg:pt-20"}>
        {/* <ScrollToContent /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/research-technology" element={<ReasearchandTech />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/training-workshops" element={<TrainingAndWorkshops />} />
          <Route path="/team-members" element={<TeamAndMembers />} />
   
          {/* <Route path="/technology" element={<Technology />} /> */}
          <Route path="/industry-corner" element={<IndustryCorner />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/rf-power-amplifiers" element={<RFPowerAmplifiers />} />
          <Route path="/rf-integrated-circuits" element={<RFIntegratedCircuits />} />
          <Route path="/turnkey-solutions" element={<TurnkeySolutions />} />
        </Routes>
      </div>

      {/* Show Footer only if route not in hideFooterRoutes */}
      {!isFooterHidden && <Footer />}
    </div>
  );
}

export default App;
