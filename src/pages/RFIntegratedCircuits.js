import React, { useState, useEffect } from "react";
import { Cpu, Zap, Settings, X, ZoomIn, Satellite } from "lucide-react";


// Import images
import GanMMICEnclosure from "../assets/ResearchArea/Gan_MMIC_in_Enclosure.png";
import GaN_MMIC_on_Testing from "../assets/ResearchArea/GaN_MMIC_on(testing).png";
import C_Ku_Ultra_Wideband_PA from "../assets/ResearchArea/C-Ku Band Ultra Wideband MMIC PA.png";
import Ku_Band_MMIC_PA from "../assets/ResearchArea/Ku Band MMIC PA.png";
import SiGePA from "../assets/Technology/SiGe_PA_Chip.png";
import CMOS from "../assets/ResearchArea/cmos.png";
import ClassEPA from "../assets/ResearchArea/Class E Power Amplifier Chip.png";


// ================= STICKY NAVIGATION =================
const StickyNavigation = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: "top", label: "Overview", icon: Satellite },
    { id: "gan", label: "GaN Based MMIC", icon: Zap },
    { id: "silicon", label: "Silicon Based RFIC", icon: Cpu }
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
          <Cpu className="w-6 h-6" />
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


const RFIntegratedCircuits = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("top");


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "gan", "silicon"];
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


  const sections = [
    {
      id: "gan",
      title: "R&D on GaN Based MMIC",
      icon: Zap,
      text: "Gallium Nitride (GaN) technology represents the cutting edge of high-power, high-frequency semiconductor applications. Our GaN MMIC development focuses on creating robust, efficient power amplifiers capable of operating at extreme conditions. These monolithic microwave integrated circuits deliver exceptional power density and thermal performance, making them ideal for 5G infrastructure, satellite communications. Our comprehensive GaN MMIC portfolio includes ultra-wideband power amplifiers spanning C-band to Ku-band frequencies.",
      images: [
         { src: C_Ku_Ultra_Wideband_PA, alt: "C-Ku Band Ultra Wideband MMIC PA", label: "GaN MMIC Tapeout" },
              { src: Ku_Band_MMIC_PA, alt: "Ku Band MMIC PA", label: "GaN MMIC on carrier plate" },
        { src: GaN_MMIC_on_Testing, alt: "GaN MMIC on Testing", label: "GaN MMIC on Test Jig" },
        { src: GanMMICEnclosure, alt: "GaN MMIC in Enclosure", label: "GaN MMIC on Module" },
       
   
      ],
      theme: {
        bg: "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50",
        accent: "text-emerald-700",
        border: "border-emerald-200",
        button: "bg-emerald-600 hover:bg-emerald-700",
        glow: "shadow-emerald-200/50"
      }
    },
    {
      id: "silicon",
      title: "R&D on Silicon Based RFIC",
      icon: Cpu,
      text: "Our silicon-based RF integrated circuits encompass advanced SiGe BiCMOS and CMOS technologies, delivering cost-effective, scalable, and high-performance RF solutions. These integrated circuits combine the benefits of both technologies to provide comprehensive solutions for broadband communication, satellite systems, and commercial wireless applications where integration, efficiency, and cost-effectiveness are key requirements.",
      subsections: [
        {
          title: "SiGe BiCMOS based RFIC",
          text: "Our Silicon-Germanium (SiGe) BiCMOS power amplifiers represent a breakthrough in millimeter-wave circuit design. Featuring a fully integrated, inductor-less architecture, these chips deliver exceptional performance while maintaining cost-effectiveness. The advanced SiGe technology enables high-frequency operation with superior noise characteristics and power efficiency.",
          images: [
            { src: SiGePA, alt: "SiGe PA Chip", label: "SiGe Power Amplifier Chip" }
          ]
        },
        {
          title: "CMOS based RFIC",
          text: "Complementary Metal-Oxide-Semiconductor (CMOS) technology forms the backbone of modern digital and mixed-signal circuits. Our CMOS implementations emphasize scalability, ultra-low power consumption, and high integration density. These solutions are perfect for IoT applications, mobile communications, and battery-powered devices where efficiency is paramount.",
          images: [
            { src: CMOS, alt: "CMOS Technology", label: "CMOS Circuit Design" },
            { src: ClassEPA, alt: "Class E Power Amplifier Chip", label: "Class E Power Amplifier" }
          ],
          commonCaption: "CMOS Circuit Implementation"
        }
      ],
      theme: {
        bg: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
        accent: "text-blue-700",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
        glow: "shadow-blue-200/50"
      }
    }
  ];


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


  const ImageGallery = ({ images, theme, showIndividualLabels = true }) => {
    const getGridClass = (count) => {
      if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
      if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8";
      if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6";
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    };


    return (
      <div className={`grid ${getGridClass(images.length)} mt-10`}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`group relative overflow-hidden rounded-2xl ${theme.border} border-2 cursor-pointer transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl ${theme.glow} bg-white`}
          >
            {/* Image Container with Consistent Aspect Ratio */}
            <div className="relative bg-gray-50 p-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ minHeight: '200px', maxHeight: '400px' }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-4 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </div>


            {/* Individual Label - only show if showIndividualLabels is true */}
            {showIndividualLabels && (
              <div className="p-4 bg-white border-t border-gray-100">
                <h3 className={`font-semibold text-sm ${theme.accent} text-center leading-tight`}>
                  {image.label}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };


  const SubsectionImages = ({ subsection, theme, index }) => (
    <div className="mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-white/80 shadow-xl">
      <div className="flex items-center gap-6 mb-8">
        <div className={`p-4 rounded-2xl ${theme.button} shadow-xl transform hover:scale-110 transition-transform duration-300`}>
          <Settings className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h4 className={`text-3xl lg:text-4xl font-extrabold ${theme.accent} mb-3 drop-shadow-lg`}>
            {subsection.title}
          </h4>
          <div className={`h-1.5 w-24 ${theme.button} rounded-full shadow-md`} />
        </div>
      </div>
      <p className="text-gray-700 text-lg mb-10 leading-relaxed">
        {subsection.text}
      </p>
      <ImageGallery 
        images={subsection.images} 
        theme={theme} 
        showIndividualLabels={!subsection.commonCaption} 
      />
      {subsection.commonCaption && (
        <div className="mt-8 text-center">
          <div className={`inline-block px-8 py-4 bg-gradient-to-r ${theme.button} text-blue-800 text-xl font-bold rounded-2xl shadow-xl`}>
            {subsection.commonCaption}
          </div>
        </div>
      )}
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Sticky Navigation */}
      <StickyNavigation activeSection={activeSection} />

      {/* Main Content - Added padding for desktop nav */}
      <div className="lg:ml-80 lg:mr-8">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          {/* Header */}
          <header id="top" className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced Semiconductor Technology
                </span>
              </div>
            </div>


            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Radio Frequency Integrated Circuits (Semiconductor IC Design)
              </span>
            </h1>


            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Design and development of cutting-edge RF integrated circuits using advanced semiconductor technologies for next-generation applications
            </p>


            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </header>


          {/* Technology Sections */}
          <div className="space-y-24">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`relative overflow-hidden rounded-3xl ${section.theme.bg} ${section.theme.border} border-2 shadow-xl hover:shadow-2xl transition-all duration-500`}
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
                      <div className={`p-4 rounded-2xl ${section.theme.button} shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-3xl lg:text-4xl font-bold ${section.theme.accent} mb-3`}>
                          {section.title}
                        </h2>
                        <div className={`h-1 w-20 ${section.theme.button} rounded-full`} />
                      </div>
                    </div>


                    {/* Content */}
                    <div className="mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed max-w-5xl">
                        {section.text}
                      </p>
                    </div>


                    {/* Images for GaN section or Subsections for Silicon */}
                    {section.images ? (
                      <ImageGallery images={section.images} theme={section.theme} />
                    ) : (
                      <div className="space-y-20">
                        {section.subsections?.map((subsection, subIndex) => (
                          <SubsectionImages
                            key={subIndex}
                            subsection={subsection}
                            theme={section.theme}
                            index={subIndex}
                          />
                        ))}
                      </div>
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
              Innovating at the intersection of semiconductor technology and RF engineering
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


export default RFIntegratedCircuits;
