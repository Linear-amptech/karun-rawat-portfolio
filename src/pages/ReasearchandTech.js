import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Cpu,
  SatelliteDish,
  Signal,
  Shield,
  SmartphoneNfc,
  Waves,
  CircuitBoard,
  Settings,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

// Research Area Images
import rfPowerAmplifierImg from "../assets/Home/RF_wireless.png";
import rfIntegratedCircuitsImg from "../assets/Home/RFIC (2).jpeg";
import turnKeySolutionsImg from "../assets/Home/turn_key_solution.jpeg";

//collaboratos
import franciscoFalcone from '../assets/Research & Tech/francisco-falcone.png.webp';
import ghannouchi from '../assets/Research & Tech/Ghannouchi-Photo.jpg';
import helaoui from '../assets/Research & Tech/M.Helaoui.jfif';
import roblin from '../assets/Research & Tech/Patrick.Roblin_cropped.jpg';
import chen from '../assets/Research & Tech/Wenhua_Chen.jpg';

const ResearchandTech = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeSection, setActiveSection] = useState("research-area");
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    // Animate header on mount
    const t = setTimeout(() => setIsHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Reveal research cards when they enter viewport OR when section becomes active
  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll("[data-card-id]");
      if (!cards.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("data-card-id");
            if (entry.isIntersecting && id) {
              setVisibleCards((prev) => new Set([...prev, id]));
            }
          });
        },
        { threshold: 0.1, rootMargin: "50px" }
      );

      cards.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, [activeSection]);

  // NEW: Make all research cards visible immediately when research-area is active
  useEffect(() => {
    if (activeSection === "research-area") {
      // Show all research cards immediately
      const allCardIds = researchAreas.map(area => String(area.id));
      setVisibleCards(new Set(allCardIds));
    }
  }, [activeSection]);

  const sections = [
    { id: "research-area", label: "Research Areas", icon: "🔬" },
    { id: "collaborators", label: "Collaborators", icon: "🤝" },
    { id: "facilities", label: "Research Facilities", icon: "🏢" },
    { id: "projects", label: "Projects & Funding", icon: "💰" }
  ];

  const ongoingProjects = [
    {
      title:
        "Development of high-efficiency C-Band Power Amplifier Units",
      duration: "2024-2026",
      role: "PI",
      sponsor: "Government of India"
    },
    
    {
      title:
        "Development of On-Demand Single Photon Emitters, Single Photon Avalanche Detectors, High-Frequency Devices Units",
      duration: "2025-2030",
      role: "PI",
      sponsor: "QMD Foundation, National Quantum Mission (DST)"
    },
    {
      title:
        "Development of digital predistortion technique for linearization of high-power amplifier in VHF/UHF",
      duration: "2023-2026",
      role: "PI",
      sponsor: "BARC, DAE, (Government of India)"
    },
    {
      title: "Design and Development of New Prototype for RIS-aided Communication",
      duration: "2022-2026",
      role: "CI",
      sponsor: "IIITB COMET Foundation"
    },
    {
      title: "AI for Sanskrit, Uttarakhand Sanskrit University",
      duration: "2022-2026",
      role: "CI",
      sponsor: "Govt. of Uttarakhand"
    },
    {
      title: "National Centre for Honey Authentication and Food Safety",
      duration: "2024-2026",
      role: "CI",
      sponsor: "Dept. Hydrology, I.I.T Roorkee"
    }
  ];

const completedProjects = [
  {
    title:
      "Design of Airborne Power Amplifiers for L-band and UHF frequency range.",
    duration: "2020-2022",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title:
      "Nonlinear GaN HEMT Device Characterization for Power Amplifier Design and Implementation at X-Band frequencies.",
    duration: "2019-2022",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title:
      "Wideband Gallium Nitride Based Outphasing Power Amplifier for Upcoming 5G Wireless Transmitters",
    duration: "2019-2022",
    role: "PI",
    sponsor: "Extra Mural (SERB Government of India)"
  },
  {
    title:
      "Broad-Band Gallium Nitride Based Doherty Power Amplifier for Efficient Amplification of High Crest Factor Signals",
    duration: "2014-2017",
    role: "PI",
    sponsor: "SERB, Government of India"
  },
  {
    title:
      "The infrastructural grant under the Visvesvaraya PhD Scheme for Electronics and IT.",
    duration: "2016-2020",
    role: "PI",
    sponsor: "DeitY, Government of India"
  },
  {
    title:
      "Consultancy project \"Experiments development for Software defined radio SDR-Lab\"",
    duration: "2014",
    role: "PI",
    sponsor: "Amitec Electronics Ltd., New Delhi"
  },
  {
    title:
      "Consultancy project \"RF Power Amplifier Design based on SSPL GaN Devices\"",
    duration: "2016-2018",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title:
      "Training to BEL on \"Efficient and Linearized Power Amplifier and Transmitters RF Power Amplifier\"",
    duration: "2018-2019",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title: "Training to BEL on \"GaN based MMIC PA Design\"",
    duration: "2019",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title:
      "GIAN Course on RF Power Amplifier Design and Integration for 4G/5G Applications",
    duration: "2017",
    role: "PI",
    sponsor: "MHRD, Government of India"
  },
  {
    title:
      "Study of Design Feasibility for High Power GaN-based Power Amplifier at Ku-Band in Hybrid MIC Technology",
    duration: "2017-2019",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title:
      "Study and Design Challenges in GaN MMIC-based Power Amplifier at Ku-Band",
    duration: "2017-2020",
    role: "PI",
    sponsor: "Government of India"
  },
  {
    title:
      "Radio Frequency Power Amplifier Design & Distortion Mitigation for Energy and Spectrum Efficient 5G Wireless Transmitters",
    duration: "2019-2021",
    role: "PI",
    sponsor: "SPARC (MHRD, Government of India)"
  }
];

  const researchAreas = [
    {
      id: 1,
      title: "Advanced Radio Frequency Power Amplifier & Wireless Transmitters",
      description:
        "Research on advanced power amplifier architectures, waveform engineering, and transmitter solutions for next-generation wireless communication systems.",
      image: rfPowerAmplifierImg,
      gradient: "from-blue-600 via-cyan-500 to-teal-400",
      bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
      link: "/rf-power-amplifiers",
      icon: <SatelliteDish className="w-6 h-6" />,
      tags: ["5G/6G", "Power Amplifiers", "Wireless"]
    },
    {
      id: 2,
      title: "Radio Frequency Integrated Circuits (Semiconductor IC Design)",
      description:
        "Design and development of RF integrated circuits using GaN, SiGe BiCMOS, and CMOS technologies for high-frequency applications.",
      image: rfIntegratedCircuitsImg,
      gradient: "from-purple-600 via-pink-500 to-rose-400",
      bgGradient: "from-purple-50 via-pink-50 to-rose-50",
      link: "/rf-integrated-circuits",
      icon: <CircuitBoard className="w-6 h-6" />,
      tags: ["GaN", "SiGe BiCMOS", "CMOS"]
    },
    {
      id: 3,
      title: "Turn-Key Solutions for Wireless Systems",
      description:
        "End-to-end solutions including RIS, SDR, active antennas, RF location finding, LoRa, drone detection, and AI integration for wireless systems.",
      image: turnKeySolutionsImg,
      gradient: "from-emerald-600 via-green-500 to-lime-400",
      bgGradient: "from-emerald-50 via-green-50 to-lime-50",
      link: "/turnkey-solutions",
      icon: <Settings className="w-6 h-6" />,
      tags: ["AI/ML", "RIS", "SDR"]
    }
  ];

const collaborators = [
  { 
    name: "Prof. Fadhel Ghannouchi", 
    institution: "University of Calgary, Canada",
    image: ghannouchi
  },
  { 
    name: "Prof. M. Helaoui", 
    institution: "University of Calgary, Canada",
    image: helaoui
  },
  { 
    name: "Prof. Patrick Roblin", 
    institution: "Ohio State University, USA",
    image: roblin
  },
  { 
    name: "Prof. Wenhua Chen", 
    institution: "Tsinghua University, Beijing, China",
    image: chen
  },
  { 
    name: "Prof. Francisco Falcone", 
    institution: "Universidad Publica de Navarra, UPNA, Spain",
    image: franciscoFalcone
  }
];

  const facilities = [
    {
      title: "High Power Nonlinear Device Characterization & Modeling (GaN HEMT)",
      equipment:
        "Focus Load Pull & Software, Auriga Pulsed-IV system, Keysight Vector Network Analyzer, Cascade Probe Station, Focus Test-Jigs"
    },
    {
      title: "On-Chip Characterization up to 67 GHz",
      equipment:
        "Keysight Nonlinear Vector Network Analyzer (X-Parameter features), Cascade Probe Station"
    },
    {
      title: "Wireless Communication Test-Bed up to 6 GHz",
      equipment:
        "Keysight Vector Signal Analyzer, Keysight Vector Signal Generator, Keysight Power Supplies, Analog Device ZC706 & AD9371 Software Design Radio (SDR) setup, Alterra Stratix-II GX"
    },
    {
      title: "High Power Device Characterization & Modeling",
      equipment:
        "Bias dependent s-parameters measurement, Nonlinear De-embedding/embedding, nonlinear vector network analysis, Large Signal Modeling (Angelov Model for GaN HEMT Design)"
    }
  ];

  const ProjectTable = ({ title, projects }) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-blue-900 mb-6">{title}</h3>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border border-blue-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 border-r border-blue-200">
                Project Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 border-r border-blue-200">
                Duration & Role
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                Sponsored By
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-200">
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-blue-50/30 transition-colors duration-200">
                <td className="px-6 py-4 text-gray-800 border-r border-blue-200">{project.title}</td>
                <td className="px-6 py-4 text-gray-700 border-r border-blue-200">
                  <div className="text-sm">
                    <div className="font-medium">{project.duration}</div>
                    <div className="text-blue-600">Role: {project.role}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{project.sponsor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-blue-200 rounded-lg p-4 hover:shadow-sm hover:bg-blue-50/20 transition-all duration-200">
            <h4 className="font-semibold text-blue-900 mb-3">{project.title}</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Duration:</span>
                <span className="text-sm font-medium text-gray-800">{project.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Role:</span>
                <span className="text-sm font-medium text-blue-600">{project.role}</span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <span className="text-sm text-gray-600">Sponsored by:</span>
                <p className="text-sm font-medium text-gray-800 mt-1">{project.sponsor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ResearchItem = ({ item, index, type }) => {
    if (type === "research") {
      return (
        <Link to={item.link} key={item.id}>
          <div
            data-card-id={String(item.id)}
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-white/50 transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] ${
              visibleCards.has(String(item.id)) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-40`}></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8">
              {/* Header: Icon + Tags */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                <div className={`p-4 bg-gradient-to-r ${item.gradient} rounded-2xl text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white font-medium shadow-sm opacity-90`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-slate-900 transition-colors">
                {item.title}
              </h3>

              {/* Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-slate-800" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 text-sm sm:text-base">
                {item.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-2 text-slate-500 text-sm"></div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold group-hover:text-slate-900 transition-colors text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-110 transition-transform duration-500"></div>

            {/* Shine sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>
        </Link>
      );
    }

    return (
      <div className="group flex items-start gap-4 p-4 hover:bg-gradient-to-r from-blue-50 to-white rounded-lg transition-all duration-300">
        <div className="flex-shrink-0 mt-1">
          {type === "collaborator" && (
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">🤝</div>
          )}
          {type === "facility" && (
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">🏢</div>
          )}
        </div>
        <div className="flex-grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-2">
            {item.title || item.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
            {item.description || item.institution || item.equipment}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div id="main-content" className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Animated Header */}
      <div className="pt-24 pb-12 px-4">
        <div className="text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-4 transition-all duration-1000 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Research & Development
          </h1>
          <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 px-4 transition-all duration-1000 delay-150 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Innovative research initiatives and cutting-edge development projects
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isHeaderVisible ? "opacity-100 w-24" : "opacity-0 w-0"
          }`}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-12 bg-white rounded-xl p-1 shadow-md border border-blue-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-medium ${
                activeSection === section.id
                  ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              <span className="text-base sm:text-lg">{section.icon}</span>
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{section.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden mb-16">
          {/* Research Areas Section */}
          <div className={`transition-all duration-500 ease-in-out ${
            activeSection === "research-area" 
              ? "block p-4 sm:p-6 md:p-8" 
              : "hidden"
          }`}>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Research Areas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl">
              {researchAreas.map((area, index) => (
                <ResearchItem key={`research-${area.id}`} item={area} index={index} type="research" />
              ))}
            </div>
          </div>

{/* Collaborators Section */}
<div className={`transition-all duration-500 ease-in-out ${
  activeSection === "collaborators" 
    ? "block p-4 sm:p-6 md:p-8" 
    : "hidden"
}`}>
  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-blue-100">
    <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-400 rounded-full"></div>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">International Collaborators</h2>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
    {collaborators.map((collaborator, index) => (
      <div 
        key={`collab-${index}`}
        className="flex flex-col items-center text-center group"
      >
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
          <img 
            src={collaborator.image} 
            alt={collaborator.name}
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-base text-gray-800 mb-2 px-2">
          {collaborator.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed px-2">
          {collaborator.institution}
        </p>
      </div>
    ))}
  </div>
</div>
          {/* Research Facilities Section */}
          <div className={`transition-all duration-500 ease-in-out ${
            activeSection === "facilities" 
              ? "block p-4 sm:p-6 md:p-8" 
              : "hidden"
          }`}>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-400 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Research Facilities</h2>
            </div>
            <div className="grid gap-2">
              {facilities.map((facility, index) => (
                <ResearchItem key={`facility-${index}`} item={facility} index={index} type="facility" />
              ))}
            </div>
          </div>

          {/* Projects & Funding Section */}
          <div className={`transition-all duration-500 ease-in-out ${
            activeSection === "projects" 
              ? "block p-4 sm:p-6 md:p-8" 
              : "hidden"
          }`}>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Projects & Funding</h2>
            </div>

            {/* Funding Summary */}
            <div className="mb-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">External Funding Generated</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-700">
                approx.
                <span className="font-bold text-blue-800">₹3037.89 Lakhs</span>
                <span className="text-gray-600"> (~ USD: 3.56 M)</span> have been generated from various sponsors for research projects and consultancy work as Principle Investigators (PIs) as well as Co-Investigators (CIs).
              </p>
            </div>

            {/* Projects Tables */}
            <ProjectTable title="Ongoing Projects" projects={ongoingProjects} />
            <ProjectTable title="Completed Projects" projects={completedProjects} />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-xs sm:text-sm pb-8 px-4">
          <p>For more information about our research initiatives, please contact our research office.</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchandTech;
