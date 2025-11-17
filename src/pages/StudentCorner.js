import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Cpu,
  Rocket,
  Award,
  TrendingUp,
  Settings,
  ChevronRight,
  ExternalLink,
  Users,
  Target,
  Lightbulb,
  Globe,
  Building,
  GraduationCap,
  BookOpen,
  Microscope,
  Wifi,
  CircuitBoard as Circuit,
  Activity,
  MousePointer,
  Book,
  Send,
  AlertCircle,

  ZoomIn,
  ChevronLeft,
  Quote
} from "lucide-react";

// Import logos for collaborators
import DST from "../assets/Home/DST_logo.png";
import Wipro from "../assets/Home/Wipro_logo.png";
import GF from "../assets/Home/Global_Foundries_logo.png";
import AMP from "../assets/Home/Amp_logo.png";
import Keysight from "../assets/Home/KeySight_logo.png";

// Import tools logos
import candence from "../assets/Student/cadence.png";
import empro from "../assets/Student/empro.svg";
import ANSYS_logo from "../assets/Student/ANSYS_logo.png";
import CST from "../assets/Student/CST.svg";
import comsol_logo from "../assets/Student/comsol-logo-130x20.png";
import mathworks_logo from "../assets/Student/mathworks-logo.svg";
// Import all images
import uhfPowerAmp from "../assets/ResearchArea/Ultra-Wideband UHF Power Amplifiers.png";
import levelTransformation from "../assets/ResearchArea/6-3 Level  transformation with measurement.png";
import outphasingAmp from "../assets/ResearchArea/Outphasing_Amplifier_Implemented.png";
import hardwareSetup from "../assets/ResearchArea/Hardware setup.png";


import vectorAnalyzer from "../assets/Industry_corner/Non-Linear Vector Network Analyzer.jpg";
import powerDevice from "../assets/Industry_corner/High Power Device Characterization.jpg";

export default function StudentProspectus() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Update active section based on scroll position
      const sections = [
        "hero",
        "benefits",
        "research",
        "ecosystem",
        "infrastructure",
        "cta",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Foster Innovation in Cutting-Edge Technologies",
      description:
        "Work on nationally significant projects from high-power GaN Power Amplifiers for 5G to Reconfigurable Intelligent Surfaces (RIS) for 6G and advanced millimeter-wave SiGe MMICs.",
      color: "from-yellow-400 to-orange-500",
      iconBg: "bg-gradient-to-br from-yellow-100 to-orange-100",
      stats: "6+ Active Projects",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hands-on Cutting-Edge RF Semiconductor Design",
      description:
        "Move beyond simulation with real experience designing custom MMIC using advanced processes like 130nm SiGe BiCMOS and 250nm GaN-on-SiC.",
      color: "from-blue-400 to-indigo-500",
      iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
      stats: "3 Fab Processes",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industry R&D Projects",
      description:
        "Gain invaluable experience through deep immersion in real-world projects. Strong collaboration with industry allows you to deliver complete, mission-critical systems.",
      color: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
      stats: "6 Industry Partners",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High-Impact Publications & Patents",
      description:
        "Contribute to research with publications in top-tier IEEE Journals & Conferences. We actively protect innovations with 4 patents already filed (2 US, 2 Indian).",
      color: "from-red-400 to-pink-500",
      iconBg: "bg-gradient-to-br from-red-100 to-pink-100",
      stats: "4 Patents Filed",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "From Lab to Market",
      description:
        "See your research make real-world impact. Our lab successfully spun off Linear-AmpTech.",
      color: "from-indigo-400 to-purple-500",
      iconBg: "bg-gradient-to-br from-indigo-100 to-purple-100",
      stats: "Startup",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Complete Design Cycle Experience",
      description:
        "Experience the full pipeline: from initial concept and simulation to fabrication, hands-on hardware testing, and system-level integration.",
      color: "from-purple-400 to-violet-500",
      iconBg: "bg-gradient-to-br from-purple-100 to-violet-100",
      stats: "Full Pipeline",
      hoverColor: "group-hover:shadow-purple-200",
    },
  ];

  const researchOptions = [
    {
      title: "Radio Frequency Power Amplifier & Wireless Transmitters",
      path: "/rf-power-amplifiers",
      description:
        "High-power GaN amplifiers, Doherty architectures, and Digital Pre-Distortion systems for 5G applications.",
      icon: <Zap className="w-10 h-10" />,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      stats: { power: "550W+", frequency: "C-Ku Band", efficiency: "65%+" },
      features: [
        "GaN Power Amplifiers",
        "Digital Pre-Distortion",
        "Doherty Architecture",
        "5G Applications",
      ],
    },
    {
      title: "Radio Frequency Integrated Circuits (Semiconductor IC Design)",
      path: "/rf-integrated-circuits",
      description:
        "Custom MMIC design using 130nm SiGe BiCMOS and 250nm GaN-on-SiC for millimeter-wave applications.",
      icon: <Cpu className="w-10 h-10" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      stats: {
        process: "130nm",
        frequency: "Ka/V Band",
        integration: "Full MMIC",
      },
      features: [
        "SiGe BiCMOS Design",
        "GaN-on-SiC MMICs",
        "Ka/V Band Circuits",
        "Custom IC Layout",
      ],
    },
    {
      title: "Turn-Key Solutions for Wireless Systems",
      path: "/turnkey-solutions",
      description:
        "Complete wireless systems from SATCOM modules to 6G-enabling Reconfigurable Intelligent Surfaces.",
      icon: <Globe className="w-10 h-10" />,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      stats: { systems: "100W+", applications: "SATCOM", technology: "6G RIS" },
      features: [
        "SATCOM Amplifiers",
        "RIS Prototypes",
        "Embedded Systems",
        "System Integration",
      ],
    },
  ];

  const equipment = [
    {
      category: "RF & Microwave Simulation",
      items: ["Keysight ADS", "Cadence Virtuoso", "EM simulation tools"],
      icon: <Circuit className="w-6 h-6" />,
    },
    {
      category: "Fabrication Facilities",
      items: ["In-house PCB prototyping", "Rapid development capabilities"],
      icon: <Microscope className="w-6 h-6" />,
    },
    {
      category: "High-Frequency Measurement",
      items: [
        "Non-Linear Vector Network Analyzers(NVNA)",
        "Spectrum Analyzers",
        "Vesctor Signal Analyzers(VSAs)",
        "Signal Generators",
        "Noise Figure Analyzers",
      ],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      category: "Active Antenna & RIS Characterization",
      items: ["Dedicated anechoic chamber", "Radiation pattern measurements"],
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      category: "High-Power Test Benches",
      items: [
        "High-voltage DC supplies",
        "200W attenuators",
        "Testing up to 550W+",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      category: "SoC & FPGA Development",
      items: ["Zynq APSoC platforms (ZC-706)", "RF transceivers (AD9371)"],
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  const skills = [
    {
      name: "Cadence Virtuoso",
      logo: candence,
      url: "https://www.cadence.com/en_US/home/tools/custom-ic-analog-rf-design/virtuoso.html",
      description: "Analog & RF IC design platform.",
      category: "IC Design",
      proficiency: 95,
    },
    {
      name: "Cadence Genus",
      logo: candence,
      url: "https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/synthesis/genus-synthesis-solution.html",
      description: "RTL synthesis tool.",
      category: "IC Design",
      proficiency: 90,
    },
    {
      name: "Cadence Innovus",
      logo: candence,
      url: "https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/physical-design/innovus-implementation-system.html",
      description: "Physical design system.",
      category: "IC Design",
      proficiency: 88,
    },
    {
      name: "ADS EMPro",
      logo: empro,
      url: "https://www.keysight.com/in/en/product/eesof-empro/3d-em-electromagnetic-simulation-software.html",
      description: "3D EM simulation for RF design.",
      category: "Simulation",
      proficiency: 92,
    },
    {
      name: "HFSS",
      logo: ANSYS_logo,
      url: "https://www.ansys.com/products/electronics/ansys-hfss",
      description: "Full-wave electromagnetic field simulation.",
      category: "Simulation",
      proficiency: 94,
    },
    {
      name: "CST Studio",
      logo: CST,
      url: "https://www.3ds.com/products-services/simulia/products/cst-studio-suite/",
      description: "3D EM simulation for high-frequency design.",
      category: "Simulation",
      proficiency: 87,
    },
    {
      name: "COMSOL",
      logo: comsol_logo,
      url: "https://www.comsol.com/",
      description: "Multiphysics simulation software.",
      category: "Simulation",
      proficiency: 85,
    },
    {
      name: "MATLAB",
      logo: mathworks_logo,
      url: "https://www.mathworks.com/products/matlab.html",
      description: "Numerical computing & algorithm prototyping.",
      category: "Programming",
      proficiency: 96,
    },
  ];
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [expandedSystem, setExpandedSystem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const collaborators = [
    {
      name: "DST",
      logo: DST,
      description: "Department of Science & Technology",
    },
    { name: "Wipro", logo: Wipro, description: "Technology Partner" },
    { name: "GlobalFoundries", logo: GF, description: "Semiconductor Foundry" },
    { name: "AMP", logo: AMP, description: "Industry Collaborator" },
    { name: "Keysight", logo: Keysight, description: "Test & Measurement" },
  ];

  const handleResearchClick = (path) => {
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  {
    /* gallery section*/
  }
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const equipmentData = [
    {
      src: vectorAnalyzer,
      title: "Non-Linear Vector Network Analyzer",
    },
    {
      src: powerDevice,
      title: "High Power Device Characterization",
    },
    {
      src: outphasingAmp,
      title: "Outphasing Amplifier Implementation",
    },
    {
      src: levelTransformation,
      title: "6-3 Level Transformation with Measurement",
    },
    {
      src: hardwareSetup,
      title: "Hardware Setup",
    },
    {
      src: uhfPowerAmp,
      title: "Ultra-Wideband UHF Power Amplifiers",
    },
  ];

  const openModal = (index) => {
    setSelectedImage(equipmentData[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % equipmentData.length
        : (currentIndex - 1 + equipmentData.length) % equipmentData.length;

    setCurrentIndex(newIndex);
    setSelectedImage(equipmentData[newIndex]);
  };

  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const alumni = [
    {
      name: "Dr. Y. Mary Asha Latha",
      degree: "PhD, 2021",
      institution: "IIT Roorkee",
      position: "Assistant Professor, IIT(ISM) Dhanbad",
      feedback: "The hands-on experience I gained was invaluable. The research environment pushed me to think critically and innovate. The mentorship I received helped shape my academic career.",
      gradient: "from-blue-50 to-indigo-50",
      iconGradient: "from-blue-400 to-indigo-500",
      textColor: "text-blue-700"
    },
    {
      name: "Dr. Nishant Kumar",
      degree: "PhD, 2021",
      institution: "IIT Roorkee",
      position: "Principal Engineer, Texas Instruments Bangalore",
      feedback: "The freedom to explore new ideas and direct path to commercialization through the lab was unique. The cutting-edge research facilities prepared me perfectly for industry challenges.",
      gradient: "from-green-50 to-emerald-50",
      iconGradient: "from-green-400 to-emerald-500",
      textColor: "text-green-700"
    },
    {
      name: "Avinash Singh",
      degree: "PhD, Ongoing",
      institution: "IIT Roorkee",
      position: "Global Foundries, Bangalore",
      feedback: "Working in this lab has given me exposure to real-world semiconductor challenges. The collaborative environment and state-of-the-art facilities have been instrumental in my growth.",
      gradient: "from-purple-50 to-pink-50",
      iconGradient: "from-purple-400 to-pink-500",
      textColor: "text-purple-700"
    },
    {
      name: "Dr. Ekta Aggrawal",
      degree: "PhD, 2021",
      institution: "IIT Roorkee",
      position: "IISc Bangalore",
      feedback: "The research methodology and experimental approach I learned here became the foundation of my academic pursuits. The lab's emphasis on innovation and excellence is unmatched.",
      gradient: "from-orange-50 to-red-50",
      iconGradient: "from-orange-400 to-red-500",
      textColor: "text-orange-700"
    },
    {
      name: "Dr. Sujata Ghosh",
      degree: "PhD, 2020",
      institution: "IIT Roorkee",
      position: "Global Foundries, Bengaluru",
      feedback: "The interdisciplinary approach and industry connections provided here made my transition to the semiconductor industry seamless. I'm grateful for the comprehensive training.",
      gradient: "from-cyan-50 to-blue-50",
      iconGradient: "from-cyan-400 to-blue-500",
      textColor: "text-cyan-700"
    },
    {
      name: "Dr. Hemant Kumar Singhal",
      degree: "PhD, 2020",
      institution: "IIT Roorkee",
      position: "Staff Engineer, Axiro Semiconductor, Bengaluru",
      feedback: "The practical problem-solving skills and deep technical knowledge I gained here have been pivotal in my professional journey. The lab truly bridges academia and industry.",
      gradient: "from-indigo-50 to-purple-50",
      iconGradient: "from-indigo-400 to-purple-500",
      textColor: "text-indigo-700"
    },
    {
      name: "Dr. Chetan Pathak",
      degree: "PhD, 2019",
      institution: "IIT Roorkee",
      position: "Assistant Professor, RJIT, Gwalior",
      feedback: "The research culture here taught me not just technical skills but also how to mentor and guide students. The experience shaped my teaching philosophy and research direction.",
      gradient: "from-pink-50 to-rose-50",
      iconGradient: "from-pink-400 to-rose-500",
      textColor: "text-pink-700"
    },
    {
      name: "Dr. Ayushi Barthwal",
      degree: "PhD, 2018",
      institution: "IIT Delhi",
      position: "Assistant Professor, JNU, New Delhi",
      feedback: "The collaborative research environment and access to advanced equipment prepared me exceptionally well for an academic career. The skills I developed here continue to benefit me today.",
      gradient: "from-emerald-50 to-green-50",
      iconGradient: "from-emerald-400 to-green-500",
      textColor: "text-emerald-700"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alumni.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, alumni.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alumni.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + alumni.length) % alumni.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const current = alumni[currentIndex]
  {
    /* opportunity section*/
  }
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2)
          error = "Name must be at least 2 characters";
        else if (!/^[a-zA-Z\s]+$/.test(value))
          error = "Name can only contain letters and spaces";
        break;
      case "mobile":
        if (!value.trim()) error = "Mobile number is required";
        else if (!/^[0-9]{10}$/.test(value))
          error = "Mobile number must be 10 digits";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email address";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field if it's been touched before
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};
    const newTouched = {};

    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      newErrors[key] = validateField(key, formData[key]);
    });

    setTouched(newTouched);
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=karun.rawat@ece.iitr.ac.in&su=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      setIsSubmitted(true);
      setTimeout(() => {
        window.open(mailtoLink, "_blank");
        setIsSubmitted(false);
      }, 1500);
    }
  };

  const getInputClass = (fieldName) => {
    const baseClass =
      "w-full px-4 py-3 rounded-xl border text-blue-900 placeholder-blue-400 focus:outline-none transition-all";

    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200`;
    } else if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-500 bg-green-50 focus:ring-2 focus:ring-green-200`;
    }

    return `${baseClass} border-blue-100 bg-white focus:ring-2 focus:ring-blue-200`;
  };

  return (
    <div
      id="main-content"
      className="min-h-screen bg-white text-gray-800 overflow-x-hidden"
    >
      {/* Enhanced Hero Section */}
      <div
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Dr. Karun Rawat's
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Research Group
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Move beyond theory. Here, we don't just publish papers—we design the
            chips, build the systems, and launch the technologies that will
            define{" "}
            <span className="text-blue-600 font-semibold">
              5G, 6G, and beyond.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("research")}
              className="group px-8 py-4 bg-white text-gray-800 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <span className="flex items-center">
                Explore Research Areas
                <BookOpen className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                label: "Active Projects",
                value: "6+",
                icon: <Rocket className="w-5 h-5" />,
              },
              {
                label: "Industry Partners",
                value: "6",
                icon: <Building className="w-5 h-5" />,
              },
              {
                label: "Patents Filed and Granted",
                value: "10+",
                icon: <Award className="w-5 h-5" />,
              },
              {
                label: "Publications",
                value: "100+",
                icon: <Book className="w-5 h-5" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white/50"
              >
                <div className="flex items-center justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Key Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Join Our Research Group?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience cutting-edge research with real-world impact in an
              environment designed for innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 ${benefit.hoverColor}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {benefit.stats}
                </div>

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.iconBg} mb-6 group-hover:scale-110 transition-all duration-300`}
                >
                  <div className={`text-${benefit.color.split(" ")[0]}-500`}>
                    {benefit.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Research Areas Section */}
      <section
        id="research"
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Microscope className="w-4 h-4 mr-2" />
              Research Focus
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Explore Our Research Areas
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Click on any research area to dive deep into our cutting-edge work
              and discover opportunities for collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchOptions.map((option, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3"
                onClick={() => handleResearchClick(option.path)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${option.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    {option.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                    {option.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {option.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {Object.entries(option.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        {value}
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore Research
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MousePointer className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Infrastructure Section */}
      <section
        id="infrastructure"
        className="py-20 px-6 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4 mr-2" />
              World-Class Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Access the most advanced CAD tools and environments used in
              industry. Our lab is equipped with comprehensive hardware and
              software to ensure research excellence.
            </p>
          </div>

          {/* Equipment Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {equipment.map((category, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">{category.icon}</div>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Tools We Work With
            </h3>
            {/* Skills Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Cutting-edge software and hardware tools used in our research
                  laboratory
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSkills.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                          <ExternalLink className="absolute -top-2 -right-2 w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

{/* Equipment Gallery */}
<div className="p-12 bg-white rounded-3xl shadow-2xl border-4 border-gray-200">
  <h3 className="text-4xl font-extrabold mb-3 text-center text-gray-900 tracking-tight">
    Equipment Gallery
  </h3>
  <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
    Explore our cutting-edge laboratory equipment and research setups
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {equipmentData.map((equipment, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
        onClick={() => openModal(index)}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl bg-gray-50">
          <img
            src={equipment.src}
            alt={equipment.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />

          {/* Fallback placeholder */}
          <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <ZoomIn className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-blue-600 font-medium text-sm">
                {equipment.title}
              </p>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <ZoomIn className="w-6 h-6 text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="p-5">
          <h4 className="font-semibold text-gray-900 text-lg">{equipment.title}</h4>
        </div>
      </div>
    ))}
  </div>

  {/* Modal (unchanged) */}
  {selectedImage && (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      {/* ...modal content unchanged... */}
    </div>
  )}
</div>

        </div>
      </section>

      {/* Alumni Success Section */}
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Alumni Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Launch Your Career
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Our researchers are highly sought after by top academic
            institutions and leading companies in semiconductor and
            telecommunication sectors.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className={`group relative p-12 bg-gradient-to-br ${current.gradient} rounded-3xl shadow-2xl transition-all duration-700 border border-opacity-20`}>
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-24 h-24 text-gray-800" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Badge */}
              <div className={`w-20 h-20 bg-gradient-to-r ${current.iconGradient} rounded-full mb-6 flex items-center justify-center shadow-lg mx-auto`}>
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-lg italic text-center mb-8 leading-relaxed max-w-3xl mx-auto">
                "{current.feedback}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

              {/* Alumni Info */}
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 ${current.textColor}`}>
                  {current.name}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {current.degree} | {current.institution}
                </p>
                <div className="inline-block px-4 py-2 bg-white/50 rounded-full">
                  <p className="text-sm text-green-700 font-semibold">
                    Now: {current.position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          

        </div>
        
                  {/* Collaborators */}
          <div className="text-center margin-top-16 mt-20">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              Our Key Collaborators
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {collaborators.map((collab, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                >
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="mt-2 text-sm text-gray-600">
                    {collab.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_70%)]"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
            Are You Ready to Innovate?
          </h2>

          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            We're looking for motivated, curious, and passionate researchers to
            join our team. Foster innovation in a collaborative environment
            where every member achieves their full potential.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                Key Competencies required:
              </h3>
              <ul className="space-y-3 text-left text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  Strong foundation in ECE, particularly RF/Microwave theory,
                  Electromagnetics, and Analog Circuits
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  Passion for hands-on hardware development and experimental
                  work
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  Proficiency with simulation tools like ADS, Cadence, or
                  CST/HFSS is a plus
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                  Excellent problem-solving skills and desire to tackle complex
                  challenges
                </li>
              </ul>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-green-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-green-600">
                What You'll Gain:
              </h3>
              <ul className="space-y-3 text-left text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3" />
                  Experience with cutting-edge semiconductor technologies
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3" />
                  Strong industry connections and career opportunities
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3" />
                  Publications in top-tier conferences and patent opportunities
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3" />
                  Real-world impact through technology commercialization
                </li>
              </ul>

              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/90 rounded-3xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-800 mb-4">
                Join Our Research Team
              </h2>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClass("name")}
                      />
                      {errors.name && touched.name && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <input
                        name="mobile"
                        type="text"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClass("mobile")}
                      />
                      {errors.mobile && touched.mobile && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.mobile}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClass("email")}
                      />
                      {errors.email && touched.email && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={getInputClass("subject")}
                      />
                      {errors.subject && touched.subject && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your research interests and background..."
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={getInputClass("message")}
                    />
                    {errors.message && touched.message && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                    disabled={isSubmitted}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitted ? "Processing..." : "Send Application"}
                  </button>
                  <p className="text-sm text-indigo-700">
                    📎 This will open Gmail with your message. Please attach
                    your CV manually.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
