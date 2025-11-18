import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Building2,
  Handshake,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Fabricated_Doherty_PA_50W from "../assets/Industry_corner/50_W_Fabricated_Doherty_PA.png";
import Fabricated_Doherty_PA_350 from "../assets/Industry_corner/350_W_Fabricated_Doherty_PA.png";
import Fabricated_prototype_550W from "../assets/Industry_corner/550_W_Fabricated_prototype.png";
import Generalized_Doherty_PA from "../assets/Industry_corner/Generalized_Doherty_PA.png";
import WAIT from "../assets/Industry_corner/WAIT (Warning Ahead of Intersections and Turns) System.png";
import Ultra_wideband_linearizer from "../assets/Industry_corner/Ultra-wideband linearizer (250 MHz BW) with.png";
import multi_generation from "../assets/Industry_corner/Multi-generation (2G, 3G, 4G), multi-standard (GSM, WCDMA, WiMAX, LTE) Modem.png";
import Wideband_highly_efficient_RF from "../assets/Industry_corner/Wideband highly efficient RF power amplifier module.png";



// Import sponsor logos
import DST from "../assets/Home/DST_logo.png";
import Wipro from "../assets/Home/Wipro_logo.png";
import GF from "../assets/Home/Global_Foundries_logo.png";
import AMP from "../assets/Home/Amp_logo.png";
import Keysight from "../assets/Home/KeySight_logo.png";

const industrySections = [
  {
    title: "Industry Collaboration & Tech Transfers",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
    content: [
      {
        heading: "Wipro Ltd.",
        text: "In partnership with Wipro, we have developed high-efficiency Doherty Power Amplifier prototypes for 5G bands (n8, n78, and n106). This collaboration aimed at industrial-grade performance in terms of spectral efficiency and compactness. Outcomes include 4 Patents (2 Indian, 2 US), 5 IEEE Conference Papers, and 2 Technology Transfers.",
        highlights: ["4 Patents", "5 IEEE Papers", "2 Tech Transfers"],
        images: [
          {
            src: Fabricated_Doherty_PA_50W,
            label: "50 W Fabricated Doherty PA",
          },
          {
            src: Fabricated_Doherty_PA_350,
            label: "350 W Fabricated Doherty PA",
          },
          {
            src: Fabricated_prototype_550W,
            label: "550 W Fabricated Prototype",
          },
          { src: Generalized_Doherty_PA, label: "Generalized Doherty PA" },
        ],
      },

      {
        heading: "Startup: Linear Amptech",
        text: "Linear Amptech is a spin-off commercializing our RF innovations. The startup offers wideband RF power amplifier modules (2G/3G/4G), ultra-wideband linearizers, custom modem platforms, traffic safety systems (WAIT), and consumer/enterprise RF front-ends.",
        highlights: ["Spin-off Startup", "Multi-Standard", "Commercial Ready"],
        images: [
          {
            src: Wideband_highly_efficient_RF,
            label:
              "Industry corner Wideband highly efficient RF power amplifier module",
          },
          {
            src: WAIT,
            label: "WAIT (Warning Ahead of Intersections and Turns) System",
          },
          {
            src: Ultra_wideband_linearizer,
            label: "Ultra-wideband linearizer (250 MHz BW) ",
          },
          {
            src: multi_generation,
            label:
              "Multi-generation (2G, 3G, 4G), multi-standard (GSM, WCDMA, WiMAX, LTE) Modem",
          },
        ],
      },
    ],
  },
  {
    title: "Opportunities for Industry Collaboration",
    icon: <Handshake className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
    content: [
      {
        heading: "How Industry Can Engage",
        text: "We offer tailored opportunities for industry partners across the RF and embedded systems value chain. These include: Collaborative R&D, Prototype Testing & Validation, Technology Transfer & Licensing, and Startup & Incubation Support.",
        highlights: [
          "Collaborative R&D",
          "Tech Transfer",
          "Incubation Support",
        ],
        images: [],
      },
    ],
  },
];

const sponsors = [
  { name: "DST", logo: DST },
  { name: "Wipro", logo: Wipro },
  { name: "Global Foundries", logo: GF },
  { name: "AMP", logo: AMP },
  { name: "Keysight", logo: Keysight },
];

const IndustryCorner = () => {
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsHeaderVisible(true), 100);
  }, []);

  const getImageGridClasses = (imageCount) => {
    if (imageCount === 0) return "";
    if (imageCount === 1) return "flex justify-center";
    if (imageCount === 2)
      return "grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto";
    if (imageCount === 3)
      return "grid grid-cols-1 md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto";
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center";
  };

  const renderContent = (contentArray) => (
    <div className="space-y-10">
      {contentArray.map((item, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-3 md:mb-0 group-hover:text-blue-600 transition-colors duration-300">
                {item.heading}
              </h4>
              {item.highlights && (
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {item.text}
            </p>

            {item.images.length > 0 && (
              <div
                className={`mt-8 ${getImageGridClasses(item.images.length)}`}
              >
                {item.images.map((img, j) => (
                  <div
                    key={j}
                    className="group/image cursor-pointer"
                    onClick={() => setActiveImageModal(img)}
                  >
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 border border-gray-200 transition-all duration-300 group-hover/image:shadow-lg group-hover/image:scale-105">
                      <div className="overflow-hidden rounded-lg bg-white p-2 shadow-sm">
                        <img
                          src={img.src}
                          alt={img.label || `${item.heading} ${j + 1}`}
                          className="w-full h-48 object-contain transition-all duration-300 group-hover/image:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-transparent group-hover/image:from-blue-600/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-blue-600 opacity-0 group-hover/image:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    {img.label && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-600 leading-relaxed text-center font-medium">
                          {img.label}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="main-content"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50"
    >
      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="text-center">
          <h1
  className={`block text-4xl md:text-5xl font-bold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mb-4 transition-all duration-1000 ${
    isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
          >
            Industry Partnerships
          </h1>
          <p
            className={`text-lg text-gray-600 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-150 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Strategic collaborations with leading organizations driving
            innovation in RF and embedded systems
          </p>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isHeaderVisible ? "opacity-100 w-24" : "opacity-0 w-0"
            }`}
          ></div>
          <div
            className={`flex flex-wrap justify-center gap-4 text-sm mt-8 transition-all duration-1000 delay-500 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Building2 className="w-4 h-4" /> Industry Collaboration
            </span>
            <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <Handshake className="w-4 h-4" /> Partnership Opportunities
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {industrySections.map((section, idx) => (
            <div key={section.title} className="group">
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r ${section.color} rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]`}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {section.title}
                      </h2>
                      <p className="text-white/80 mt-2">
                        {section.title === "Industry Collaboration & Tech Transfers" &&
                          "Strategic partnerships driving innovation"}

                        {section.title === "Opportunities to Industries" &&
                          "Pathways for industry engagement"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="mt-8">{renderContent(section.content)}</div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <section className="mt-20 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <div className="space-y-1 text-sm">
                <a
                  href="mailto:karun.rawat@ece.iitr.ac.in"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  karun.rawat@ece.iitr.ac.in
                </a>
                <a
                  href="mailto:karun.rawat.in@ieee.org"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  karun.rawat.in@ieee.org
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+911332284830"
                className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
              >
                +91 1332 228 4830
              </a>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-sm text-gray-600">
                Room 201 N, Dept. of ECE,
                <br />
                IIT Roorkee, Uttarakhand – 247667
              </p>
            </div>
          </div>
        </section>
        {/* Sponsors Section*/}
        <section className="mt-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Our Esteemed Partners
              </h2>
              <p className="text-lg text-slate-600">
                Collaborating with industry leaders and research organizations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {sponsors.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="group relative"
                  onMouseEnter={() => setHoveredSponsor(index)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                >
                  <div
                    className={`bg-white rounded-xl p-4 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                      hoveredSponsor === index ? "ring-2 ring-blue-500/20" : ""
                    }`}
                  >
                    <div className="h-16 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                      hoveredSponsor === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    {sponsor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
          <p className="text-gray-500 text-sm">
            Industry Corner • Bridging Research & Real-world Applications
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {activeImageModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <img
              src={activeImageModal.src}
              alt={activeImageModal.label}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            {activeImageModal.label && (
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {activeImageModal.label}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustryCorner;
