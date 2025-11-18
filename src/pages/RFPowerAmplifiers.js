import React, { useState, useEffect } from "react";
import { X, ZoomIn, Zap, Satellite, Cpu, Wifi, ChevronDown, Radio, Antenna, MapPin, Plane, Brain } from "lucide-react";


// Import all assets

import classE from "../assets/Technology/Class_E.png";
import classF from "../assets/Technology/Class_F.jpg";
import classD from "../assets/Technology/Class_D.png";
import Class_E_Continuum from "../assets/Technology/Class_E_Continuum.png";
import Class_F_Continuum from "../assets/Technology/Class_F_Continuum.png";
import Class_BJ_Continuum from "../assets/Technology/Class_BJ_Continuum.png";
import Extended_Class_BJ from "../assets/Technology/Extended_Class_BJ.png";
import Extended_Class_F_Conti from "../assets/Technology/Extended_Class_F_Conti.png";
import Extended_Class_E_Conti from "../assets/Technology/Extended_Class_E_Conti.png";
import Level_6_3 from "../assets/ResearchArea/6-3 Level  transformation with measurement.png";


import Type_2_Sequential_operation_img from "../assets/Technology/Type_2_Sequential_operation_img.png";
import Device_size_optimisation from "../assets/Technology/Device_size_optimisation.png";
import New_Load_Combiners from "../assets/ResearchArea/New_Load_Combiners.png";


import Outphasing_Amplifier_Implemented_top_view from   "../assets/ResearchArea/Outphasing_Amplifier_Implemented_top_view.png";
import Outphasing_Amplifier_Implemented from "../assets/ResearchArea/Outphasing_Amplifier_Implemented.png";

import Chireix_outphasing_power_aplifier from "../assets/Technology/Chireix_outphasing_power_aplifier.png";

import Digitizing_PA from "../assets/ResearchArea/Digitizing the Power Amplifiers.png";
import DSM_Modulation from "../assets/ResearchArea/Delta Sigma Based Modulation.png";


// ================= IMAGE MODAL =================
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};


// ================= IMAGE GALLERY =================
const ImageGallery = ({ images = [], theme = {} }) => {
  const [selectedImage, setSelectedImage] = useState(null);


  const getGridClass = (count) => {
    if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
    if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
  };


  if (!images || images.length === 0) return null;


  return (
    <>
      <div className={`grid ${getGridClass(images.length)} mt-10`}>
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
                style={{ minHeight: "200px", maxHeight: "400px" }}
              />


              <div className="absolute inset-4 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </div>


            {image.label && (
              <div className="p-4 bg-white border-t border-gray-100">
                <h3 className={`font-semibold text-sm ${theme.accent} text-center leading-tight`}>
                  {image.label}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>


      <ImageModal
        src={selectedImage?.src}
        alt={selectedImage?.alt}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};


// ================= STICKY NAVIGATION =================
const StickyNavigation = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: "top", label: "Overview", icon: Satellite },
    { id: "waveform-engineering", label: "Waveform Engineering", icon: Zap },
    { id: "wireless-base-station", label: "Wireless Base Station", icon: Wifi },
    { id: "chireix-outphasing", label: "Chireix Outphasing", icon: Radio },
    { id: "multilevel-modulation", label: "Multilevel Modulation", icon: Cpu }
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
      <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
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
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-500"}`} />
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
          <Wifi className="w-6 h-6" />
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


// ================= MAIN COMPONENT =================
const RFPowerAmplifiers = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll spy effect - Fixed to properly detect sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "top",
        "waveform-engineering",
        "wireless-base-station",
        "chireix-outphasing",
        "multilevel-modulation"
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

  // Define research areas with their themes and images/subsections
  const researchAreas = [
    {
      id: "waveform-engineering",
      title: "R&D on Waveform Engineering Based Power Amplifiers",
      icon: Zap,
      content:
        "Revolutionary techniques that transcend traditional narrow-band limitations, achieving unprecedented efficiency and multi-octave bandwidth. We pioneer the move beyond discrete class-mode operations toward a dynamic 'continuum' of operation, enabling real-time adaptation to varying signal characteristics and environmental conditions.",
      subsections: [
        {
          title: "Switch Mode & Harmonic Terminated Power Amplifiers",
          description: "High-efficiency amplifier topologies that utilize switching operation and harmonic termination techniques.",
          images: [
             { src: classD, alt: "Class D Power Amplifier", label: "Class D Power Amplifier" },
            { src: classE, alt: "Class E Power Amplifier", label: "Class E Power Amplifier" },
            { src: classF, alt: "Class F Power Amplifier", label: "Class F Power Amplifier" }
           
          ]
        },
        {
          title: "Wideband Continuum Class Architectures",
          description: "Advanced amplifier designs that enable seamless operation across a continuum of classes for wideband performance.",
          images: [
            { src: Class_E_Continuum, alt: "Class E Continuum PA", label: "Class E Continuum Architecture" },
            { src: Class_F_Continuum, alt: "Class F Continuum PA", label: "Class F Continuum Architecture" },
            { src: Class_BJ_Continuum, alt: "Class B/J Continuum PA", label: "Class B/J Continuum Architecture" }
          ]
        },
        {
          title: "Multi-Octave Power Amplifiers",
          description: "Extended performance amplifiers capable of operating across multiple octaves with maintained efficiency.",
          images: [
            { src: Extended_Class_E_Conti, alt: "Extended Class E PA", label: "Extended Class E Multi-Octave PA" },
            { src: Extended_Class_F_Conti, alt: "Extended Class F PA", label: "Extended Class F Multi-Octave PA" },
            { src: Extended_Class_BJ, alt: "Extended Class B/J PA", label: "Extended Class B/J Multi-Octave PA" }
          ]
        }
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
      id: "wireless-base-station",
      title: "R&D on Wireless Base Station Power Amplifiers",
      icon: Wifi,
      content:
        "Next-generation power amplifiers for 4G/5G/6G base stations featuring advanced Doherty and Outphasing architectures. Combining high-efficiency device architectures with innovative load-combining and sequential operation strategies to deliver state-of-the-art base station power amplifiers.",
      subsections: [
        {
          title: "Multi-Band & Wideband Doherty Power Amplifiers",
          description:
            "Exploring multi-band and wideband Doherty amplifier architectures for higher efficiency and linearity.",
          subpoints: [
            {
              title: "3-Stage Doherty Power Amplifier",
              description: "Advanced 3-stage Doherty power amplifier design enabling higher efficiency and linearity across wide bandwidths.",
              images: [
                { src: Device_size_optimisation, alt: "3-Stage Doherty PA", label: "Optimized Device Implementation" }
              ]
            },
            {
              title: "Sequential 3-Stage Doherty Power Amplifier",
              description: "Sequential 3-stage Doherty architecture with improved back-off efficiency and extended dynamic range.",
              images: [
                { src: Type_2_Sequential_operation_img, alt: "Sequential 3-Stage Doherty PA", label: "Sequential Operation Hardware" }
              ]
            },
            {
              title: "New Load Combiners based Doherty PA",
              description: "Innovative load-combining topology for efficient multi-band Doherty power amplifier operation.",
              images: [
                { src: New_Load_Combiners, alt: "New Load Combiner", label: "Advanced Load Combiners" }
              ]
            }
          ]
        }
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
      id: "chireix-outphasing",
      title: "R&D on Chireix Outphasing Power Amplifiers",
      icon: Radio,
      content:
        "Exploring advanced Chireix outphasing architectures to achieve superior efficiency and linearity for next-generation wireless systems. By optimizing load modulation and combining techniques, these architectures significantly improve efficiency across wide bandwidths, making them ideal for 5G/6G base station and high-power RF transmitter applications.",
      images: [
        { src: Outphasing_Amplifier_Implemented, alt: "Chireix Outphasing Amplifier Front View", label: "Chireix Outphasing PA - Front View" },
        { src: Outphasing_Amplifier_Implemented_top_view, alt: "Chireix Outphasing Amplifier Top View", label: "Chireix Outphasing PA - Top View" },
        { src: Chireix_outphasing_power_aplifier, alt: "R&D on Chireix Outphasing Schematic", label: "Chireix Outphasing Architecture" }
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
      id: "multilevel-modulation",
      title: "R&D on Multilevel Delta-Sigma Modulation",
      icon: Cpu,
      content:
        "Advanced digital RF power amplification using multi-level delta-sigma modulation (ML-DSM) to enable highly efficient power amplification with digital precision. Our test bed demonstrates the practical implementation of these techniques for next-generation wireless systems.",
      images: [
        { src: Level_6_3, alt: "ML-DSM Test Bed", label: "Multilevel Delta-Sigma Modulation Test Bed" },
        { src: DSM_Modulation, alt: "Delta Sigma Modulation", label: "Delta Sigma Modulation Principles" },
        { src: Digitizing_PA, alt: "Digitizing Power Amplifiers", label: "Digital Power Amplifier Architecture" }
      ],
      theme: {
        bg: "bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50",
        accent: "text-violet-800",
        border: "border-violet-300",
        button: "bg-violet-600 hover:bg-violet-700",
        glow: "shadow-violet-200"
      }
    }
  ];


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
                  RF Research & Development
                </span>
              </div>
            </div>


            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Advanced RF Power Amplifiers and Transmitters
              </span>
            </h1>


            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Cutting-edge research and development in high-efficiency power amplifier technologies for next-generation wireless systems.
            </p>


            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>


          </header>


          {/* Research Areas */}
          <div className="space-y-24">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <section
                  key={area.id}
                  id={area.id}
                  className={`relative overflow-hidden rounded-3xl ${area.theme.bg} ${area.theme.border} border-2 shadow-xl hover:shadow-2xl transition-all duration-500`}
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
                      <div className={`p-4 rounded-2xl ${area.theme.button} shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-3xl lg:text-4xl font-bold ${area.theme.accent} mb-3`}>
                          {area.title}
                        </h2>
                        <div className={`h-1 w-20 ${area.theme.button} rounded-full`} />
                      </div>
                    </div>


                    {/* Content */}
                    <div className="mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed max-w-5xl">
                        {area.content}
                      </p>
                    </div>


                    {/* Subsections for Waveform Engineering */}
                    {area.id === "waveform-engineering" && (
                      <div className="space-y-12">
                        {area.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="bg-white/50 rounded-2xl p-6">
                            <h3 className={`text-xl font-semibold text-center ${area.theme.accent} mb-4`}>
                              {subsection.title}
                            </h3>
                            {subsection.description && (
                              <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
                                {subsection.description}
                              </p>
                            )}
                            <ImageGallery images={subsection.images} theme={area.theme} />
                          </div>
                        ))}
                      </div>
                    )}


                    {/* Wireless Base Station special nested rendering */}
                    {area.id === "wireless-base-station" && (
                      <div className="space-y-12">
                        {area.subsections.map((sub, si) => (
                          <div key={si} className="bg-white/60 rounded-2xl p-6">
                            <h3 className={`text-2xl font-bold text-center ${area.theme.accent} mb-6`}>
                              {sub.title}
                            </h3>
                            {sub.description && (
                              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                                {sub.description}
                              </p>
                            )}


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {sub.subpoints.map((point, pi) => (
                                <div key={pi} className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col">
                                  <h4 className={`text-lg font-semibold text-center ${area.theme.accent} mb-4`}>
                                    {point.title}
                                  </h4>
                                  {point.description && (
                                    <p className="text-gray-600 text-center mb-4">
                                      {point.description}
                                    </p>
                                  )}
                                  <ImageGallery images={point.images} theme={area.theme} />
                                </div>
                              ))}
                            </div>


                          </div>
                        ))}
                      </div>
                    )}


                    {/* Regular subsections for other areas */}
                    {area.id !== "waveform-engineering" && area.id !== "wireless-base-station" && (
                      area.subsections ? (
                        area.subsections.map((sub, idx) => (
                          <div key={idx} className="mb-8">
                            <h3 className={`text-xl font-semibold text-center ${area.theme.accent} mb-4`}>
                              {sub.title}
                            </h3>
                            {sub.description && (
                              <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
                                {sub.description}
                              </p>
                            )}
                            {sub.images && <ImageGallery images={sub.images} theme={area.theme} />}
                          </div>
                        ))
                      ) : (
                        area.images && <ImageGallery images={area.images} theme={area.theme} />
                      )
                    )}
                  </div>
                </section>
              );
            })}
          </div>


          {/* Footer */}
          <div className="mt-24 text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg">
              Pioneering the future of RF power amplification technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RFPowerAmplifiers;
