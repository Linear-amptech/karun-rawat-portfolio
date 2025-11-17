import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SatelliteDish,
  CircuitBoard,
  Settings,
 
} from "lucide-react";
import Hero from "../components/Hero";

// Research Area Images
import rfPowerAmplifierImg from "../assets/Home/RF_wireless.png";
import rfIntegratedCircuitsImg from "../assets/Home/RFIC (2).jpeg";
import turnKeySolutionsImg from "../assets/Home/turn_key_solution.jpeg";

// Sponsor Logos
import DST from "../assets/Home/DST_logo.png";
import Wipro from "../assets/Home/Wipro_logo.png";
import GF from "../assets/Home/Global_Foundries_logo.png";

import AMP from "../assets/Home/Amp_logo.png";
import Keysight from "../assets/Home/KeySight_logo.png";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const [activeImageModal, setActiveImageModal] = useState(null);

  const researchAreas = [
    {
      id: 1,
      title: "Radio Frequency Power Amplifier & Wireless Transmitters",
      description:
        "Research on advanced power amplifier architectures, waveform engineering, and transmitter solutions for next-generation wireless communication systems.",
      image: rfPowerAmplifierImg,
      gradient: "from-blue-600 via-cyan-500 to-teal-400",
      bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
      link: "/rf-power-amplifiers",
      icon: <SatelliteDish className="w-6 h-6" />,
      tags: ["5G/6G", "Power Amplifiers", "Wireless"],
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
      tags: ["GaN", "SiGe BiCMOS", "CMOS"],
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
      tags: ["AI/ML", "IoT", "SDR"],
    },
  ];

  const sponsors = [
    { name: "DST", logo: DST },
    { name: "Wipro", logo: Wipro },
    { name: "Global Foundries", logo: GF },

    { name: "AMP", logo: AMP },
    { name: "Keysight", logo: Keysight },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => new Set([...prev, entry.target.dataset.cardId]));
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="main-content" className="min-h-screen text-slate-800">
      <Hero />
    </div>
  );
};

export default Home;