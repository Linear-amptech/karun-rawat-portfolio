import React, {useEffect, useState } from "react";
import { X, Zap, Radio, Antenna, Wifi, MapPin, Plane, Brain, ZoomIn, Satellite } from "lucide-react";


// Import all images directly
import L_Band_Power_Amplifier from "../assets/Industry_corner/L-Band Power Amplifier (100W).png";
import UHF_SATCOM_Link_Power_Amplifier from "../assets/Industry_corner/UHF SATCOM LINK Power Amplifier.png";
import ris_implementation_scenario from "../assets/turn_key_solution/ris_implementation_scenario.png";
import ris_simulation_environment from "../assets/turn_key_solution/ris_simulation_environment.png";
import ris_fabricated_prototype from "../assets/turn_key_solution/ris_fabricated_prototype.png";
import sdr_dpd_setup from "../assets/turn_key_solution/sdr_dpd_setup.png";
import sdr_dpd_architecture from "../assets/turn_key_solution/sdr_dpd_architecture.png";
import active_antenna_power_combining_layout from "../assets/turn_key_solution/active_antenna_power_combining_layout.png";
import active_antenna_chip_transition from "../assets/turn_key_solution/active_antenna_chip_transition.png";

import lora_mesh_network_diagram from "../assets/turn_key_solution/lora_mesh_network_diagram.png";
import lora_asset_tracking from "../assets/turn_key_solution/lora_asset_tracking.png";
import lora_hardware_and_app from "../assets/turn_key_solution/lora_hardware_and_app.png";
import rf_location_digital_beamforming from "../assets/turn_key_solution/rf_location_digital_beamforming.png";
import rf_location_hardware_setup from "../assets/turn_key_solution/rf_location_hardware_setup.png";
import rf_drone_detection_mobile_setup from "../assets/turn_key_solution/rf_drone_detection_mobile_setup.jpg";
import rf_drone_detection_localization_result_1 from "../assets/turn_key_solution/rf_drone_detection_localization_result_1.png";
import rf_drone_detection_localization_result_2 from "../assets/turn_key_solution/rf_drone_detection_localization_result_2.png";
import ai_anpr_setup from "../assets/turn_key_solution/ai_anpr_setup.png";
import ai_anpr_pipeline from "../assets/turn_key_solution/ai_anpr_pipeline.png";
import ai_anpr_validation_results from "../assets/turn_key_solution/ai_anpr_validation_results.png";
import anetenna_Architecture from "../assets/turn_key_solution/Architecture of the proposed active matching integrated antenna..png";
import antenna_fabricated_prototype_AMN from "../assets/turn_key_solution/Fabricated prototype of the AMN-integrated antenna.png";
import Proposed_non_Foster from "../assets/turn_key_solution/Proposed non-Foster AMN de-embedded in the proposed monopole..png";


// ================= STICKY NAVIGATION =================
const StickyNavigation = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: "top", label: "Overview", icon: Satellite },
    { id: "Pa-Modules", label: "PA Modules", icon: Radio },
    { id: "ris", label: "RIS", icon: Zap },
    { id: "sdr", label: "SDR Solutions", icon: Radio },
    { id: "active-antenna", label: "Active Antennas", icon: Antenna },
    { id: "packaging", label: "Packaging", icon: Antenna },
    { id: "lora", label: "LoRa", icon: Wifi },
    { id: "rf-location", label: "RF Location", icon: MapPin },
    { id: "rf-drone", label: "RF Drone Detection", icon: Plane },
    { id: "ai", label: "AI Solutions", icon: Brain }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40 max-h-[90vh] overflow-y-auto">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-4 w-64">
          <div className="mb-4 pb-3 border-b border-gray-200">
            <h3 className="font-bold text-sm text-gray-700 uppercase tracking-wide">
              Navigation
            </h3>
          </div>
          
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left group ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-500"}`} />
                    <span className={`text-sm font-medium ${isActive ? "text-white" : ""}`}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Floating Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          <Zap className="w-6 h-6" />
        </button>

        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-4 w-64 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
              <h3 className="font-bold text-sm text-gray-700">Navigate</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsExpanded(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "hover:bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};


const solutionsData = [
  {
    id: "Pa-Modules",
    title: "R&D on Power Amplifier Modules",
    icon: Radio,
    content: "Featuring high-performance Power Amplifiers designed with industry-grade mechanical housing for superior reliability and robust operation in demanding environments.",
    images: [
      { src: L_Band_Power_Amplifier, alt: "L-Band Power Amplifier" },
      { src: UHF_SATCOM_Link_Power_Amplifier, alt: "UHF SATCOM Link Power Amplifier" },
    ],
    sharedLabel: "100 W Power Amplifiers with industry grade mechanical housing",
    theme: {
      bg: "bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200",
      accent: "text-amber-700",
      border: "border-amber-300",
      button: "bg-amber-600 hover:bg-amber-700",
      glow: "shadow-amber-200"
    }
  },
  {
    id: "ris",
    title: "R&D on RIS (Reconfigurable Intelligent Surfaces)",
    icon: Zap,
    content: "A new paradigm in wireless communications, Reconfigurable Intelligent Surfaces (RIS) create a Smart Radio Environment (SRE). These metasurfaces ensure a higher quality signal reaches receivers by intelligently modifying the channel environment itself, overcoming traditional limitations like signal scattering without the increased cost and complexity of new network protocols.",
    images: [
      { src: ris_implementation_scenario, alt: "RIS Implementation Scenario in 5G", label: "Implementation scenario of the RIS" },
      { src: ris_simulation_environment, alt: "RIS Simulation Environment", label: "Simulation Environment" },
      { src: ris_fabricated_prototype, alt: "Fabricated RIS Prototype", label: "Fabricated 8x8 Prototype" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50",
      accent: "text-sky-800",
      border: "border-sky-300",
      button: "bg-sky-600 hover:bg-sky-700",
      glow: "shadow-sky-200"
    }
  },
  {
    id: "sdr",
    title: "R&D on SDR Solutions",
    icon: Radio,
    content: "Software-Defined Radio (SDR) solutions featuring an advanced All-Programmable System-on-Chip (APSoC) based Digital Pre-Distortion (DPD) system. The architecture is capable of linearizing a 50W GaN Doherty Power Amplifier and includes modules for Inverse Modelling, Non-Linearity Correction, and a real-time RF Transceiver Interface.",
    images: [
      { src: sdr_dpd_setup, alt: "SDR DPD Lab Setup", label: "DPD System Testbed" },
      { src: sdr_dpd_architecture, alt: "SDR DPD System Architecture", label: "System Architecture" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50",
      accent: "text-indigo-800",
      border: "border-indigo-300",
      button: "bg-indigo-600 hover:bg-indigo-700",
      glow: "shadow-indigo-200"
    }
  },
  {
    id: "active-antenna",
    title: "R&D on Active Antennas",
    icon: Antenna,
    content: "Introducing an advanced active matching integrated antenna system designed for next-generation wireless applications. The architecture features an innovative Active Matching Network (AMN) seamlessly integrated with the antenna structure, enabling dynamic impedance tuning for optimal performance across wide frequency bands. The fabricated prototype demonstrates the effectiveness of the AMN integration, while the non-Foster AMN de-embedding in the monopole configuration highlights significant improvements in bandwidth and efficiency. This solution is ideal for applications demanding high adaptability and superior RF characteristics.",
    images: [
      { src: anetenna_Architecture, alt: "Architecture of the proposed active matching integrated antenna", label: "Active Matching Integrated Antenna Architecture" },
      { src: antenna_fabricated_prototype_AMN, alt: "Fabricated prototype of the AMN-integrated antenna", label: "Fabricated AMN-Integrated Antenna" },
      { src: Proposed_non_Foster, alt: "Proposed non-Foster AMN de-embedded in the proposed monopole", label: "Non-Foster AMN De-Embedded Monopole" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50",
      accent: "text-teal-800",
      border: "border-teal-300",
      button: "bg-teal-600 hover:bg-teal-700",
      glow: "shadow-teal-200"
    }
  },
  {
    id: "packaging",
    title: "R&D on Packaging",
    icon: Antenna,
    content: "Our packaging solutions are engineered to ensure the integrity and performance of high-frequency active antenna modules. The design emphasizes robust chip-to-PCB transitions and precise integration of critical components, safeguarding signal fidelity and minimizing losses. Advanced materials and layout strategies are employed to support thermal management and mechanical stability, making these packaging solutions ideal for demanding RF and microwave applications where reliability and efficiency are paramount.",
    images: [
      { src: active_antenna_power_combining_layout, alt: "Active Antenna Power Combining Layout", label: "2-Way Power Combiner" },
      { src: active_antenna_chip_transition, alt: "Active Antenna Chip to PCB Transition", label: "Chip-to-PCB Transition" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50",
      accent: "text-teal-800",
      border: "border-teal-300",
      button: "bg-teal-600 hover:bg-teal-700",
      glow: "shadow-teal-200"
    }
  },
  {
    id: "lora",
    title: "R&D on LoRa",
    icon: Wifi,
    content: "Robust LoRa (Long Range) mesh networking solutions designed for reliable, long-distance communication. The mesh algorithm intelligently manages network traffic to avoid packet collisions using Channel Activity Detection (CAD). To extend range, the system uses 'hopping' (rebroadcasting data), with a Time-To-Live (TTL) counter to prevent infinite loops. Ideal for asset tracking and connecting diverse devices.",
    images: [
      { src: lora_mesh_network_diagram, alt: "LoRa Mesh Network Diagram", label: "Mesh Network Topology" },
      { src: lora_asset_tracking, alt: "LoRa Asset Tracking System", label: "Asset Tracking Application" },
      { src: lora_hardware_and_app, alt: "LoRa Handheld Hardware and Application", label: "Handheld Device & App" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50",
      accent: "text-sky-800",
      border: "border-sky-300",
      button: "bg-sky-600 hover:bg-sky-700",
      glow: "shadow-sky-200"
    }
  },
  {
    id: "rf-location",
    title: "R&D on RF Location & Direction Finding",
    icon: MapPin,
    content: "RF localization is critical for modern security, from ensuring airspace safety against UAVs to tracking beacons. Advanced techniques like Digital Beamforming and Monopulse Tracking are employed for precise RF source localization. Once a target is acquired via beamforming, the monopulse technique is used for fine-grained tracking, reducing algorithmic complexity.",
    images: [
      { src: rf_location_digital_beamforming, alt: "Digital Beamforming Diagram", label: "Digital Beamforming" },
      { src: rf_location_hardware_setup, alt: "RF Location Finding Hardware Setup", label: "Direction Finding Array" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50",
      accent: "text-indigo-800",
      border: "border-indigo-300",
      button: "bg-indigo-600 hover:bg-indigo-700",
      glow: "shadow-indigo-200"
    }
  },
  {
    id: "rf-drone",
    title: "R&D on RF Drone Detection",
    icon: Plane,
    content: "A practical application of location-finding technology. The hardware features a uniform circular array (UCA) of wideband antennas mounted on a mobile platform. Field tests using a 300 MHz UCA successfully localized an RF emitter with an accuracy of approximately 10m x 10m, proving the concept's effectiveness for real-world drone detection scenarios.",
    images: [
      { src: rf_drone_detection_mobile_setup, alt: "RF Drone Detection Setup on a Car", label: "Mobile Detection Unit" },
      { src: rf_drone_detection_localization_result_1, alt: "Map showing drone localization result", label: "Localization Heatmap 1" },
      { src: rf_drone_detection_localization_result_2, alt: "Map showing another drone localization result", label: "Localization Heatmap 2" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50",
      accent: "text-slate-800",
      border: "border-slate-300",
      button: "bg-slate-600 hover:bg-slate-700",
      glow: "shadow-slate-200"
    }
  },
  {
    id: "ai",
    title: "R&D on AI (Artificial Intelligence)",
    icon: Brain,
    content: "Leveraging AI for an Automatic Number Plate Recognition (ANPR) system. An IP camera connected to a Jetson Xavier NX processing unit powers the system. The pipeline involves Image Acquisition, Number Plate Extraction, Pre-processing, and Character Recognition. Using the YOLOv5s model, the system demonstrates high accuracy in detecting license plates under various conditions.",
    images: [
      { src: ai_anpr_setup, alt: "AI ANPR Hardware Setup", label: "ANPR Hardware Setup" },
      { src: ai_anpr_pipeline, alt: "AI ANPR System Pipeline", label: "ANPR Pipeline" },
      { src: ai_anpr_validation_results, alt: "Validation results of YOLOv5s model for ANPR", label: "YOLOv5s Validation" },
    ],
    theme: {
      bg: "bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50",
      accent: "text-violet-800",
      border: "border-violet-300",
      button: "bg-violet-600 hover:bg-violet-700",
      glow: "shadow-violet-200"
    }
  },
];


const TurnkeySolutions = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "top",
        "Pa-Modules",
        "ris",
        "sdr",
        "active-antenna",
        "packaging",
        "lora",
        "rf-location",
        "rf-drone",
        "ai"
      ];
      
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const ImageModal = ({ image, onClose }) => (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" 
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        <div className="p-4">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{image.label}</h3>
          </div>
        </div>
      </div>
    </div>
  );


  const ImageGallery = ({ images, theme, sharedLabel }) => {
    const getGridClass = (count) => {
      if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
      if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8";
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    };

    return (
      <div className="mt-10">
        {/* Images grid */}
        <div className={`grid ${getGridClass(images.length)}`}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl ${theme.border} border-2 cursor-pointer transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl ${theme.glow} bg-white`}
            >
              <div className="relative bg-gray-50 p-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ minHeight: '200px', maxHeight: '400px' }}
                />
                <div className="absolute inset-4 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Only show image.label if sharedLabel is NOT provided */}
              {!sharedLabel && image.label && (
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className={`font-semibold text-sm ${theme.accent} text-center leading-tight`}>
                    {image.label}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* If sharedLabel is provided, show it ONCE below the grid */}
        {sharedLabel && (
          <div className="mt-6 text-center">
            <h3 className={`font-semibold text-base ${theme.accent}`}>
              {sharedLabel}
            </h3>
          </div>
        )}
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Sticky Navigation */}
      <StickyNavigation activeSection={activeSection} />

      {/* Main Content - Added padding for desktop nav */}
      <div id="main-content" className="lg:ml-80 lg:mr-8">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          {/* Header */}
          <header id="top" className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced Technology Solutions
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Turn-Key Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Innovative, end-to-end solutions for the most demanding wireless applications and next-generation systems.
            </p>
            
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </header>

          {/* Solutions */}
          <div className="space-y-24">
            {solutionsData.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <section
                  key={solution.id}
                  id={solution.id}
                  className={`relative overflow-hidden rounded-3xl ${solution.theme.bg} ${solution.theme.border} border-2 shadow-xl hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: '30px 30px'
                    }} />
                  </div>

                  <div className="relative p-8 lg:p-12">
                    {/* Section Header */}
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`p-4 rounded-2xl ${solution.theme.button} shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-3xl lg:text-4xl font-bold ${solution.theme.accent} mb-3`}>
                          {solution.title}
                        </h2>
                        <div className={`h-1 w-20 ${solution.theme.button} rounded-full`} />
                      </div>
                      <div className="hidden lg:block text-8xl font-bold text-black/5">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed max-w-5xl">
                        {solution.content}
                      </p>
                    </div>

                    {/* Images */}
                    <ImageGallery 
                      images={solution.images} 
                      theme={solution.theme} 
                      sharedLabel={solution.sharedLabel}
                    />
                  </div>
                </section>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-24 text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">
              Driving innovation in wireless communication technology
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};


export default TurnkeySolutions;
