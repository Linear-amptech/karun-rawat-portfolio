import React, { useState, useEffect } from "react";
import chaitaniya_photo from "../assets/TeamAndMemebers/Chaitaniya.jpg";
import ganesh_photo from "../assets/TeamAndMemebers/Ganesh.png";
import tarun_photo from "../assets/TeamAndMemebers/Tarun.jpeg";
import ahmed_zakaria_photo from "../assets/TeamAndMemebers/ahmad_zakaria_ahmad.jpeg";
import abdul_shukoor_photo from "../assets/TeamAndMemebers/Abdul shukoor.jpeg";
import Adity_photo from "../assets/TeamAndMemebers/photo aditya.jpg";
import Avinash_photo from "../assets/TeamAndMemebers/Avinash_photo.png";
import ShankhRaj_photo from "../assets/TeamAndMemebers/ShankhRaj_photo.jpeg";
import Pravesh_photo from "../assets/TeamAndMemebers/Pravesh_photo.jpeg";
import Nitin_photo from "../assets/TeamAndMemebers/Nitin_photo.jpeg";
import kamini_photo from "../assets/TeamAndMemebers/Kamini_photo.png";
import amrit_photo from "../assets/TeamAndMemebers/amrit_photo.jfif";
import Amit_singh_photo from "../assets/TeamAndMemebers/amit_sing_photo.jfif";
import pawan_shukla_photo from "../assets/TeamAndMemebers/pawan_shukla_photo.jpeg";

// Import B.Tech student photos
import vivek_photo from "../assets/TeamAndMemebers/vivek_1.webp";
import harsh_photo from "../assets/TeamAndMemebers/harshKumar.jpg";
import aniket_photo from "../assets/TeamAndMemebers/aniketv.jpeg";
import amit_photo from "../assets/TeamAndMemebers/amitkumar.jpg";
import parth_photo from "../assets/TeamAndMemebers/parthsarthi.jpg";
import divya_photo from "../assets/TeamAndMemebers/Divyaraj.jfif";

const TeamAndMembers = () => {
  //  Post Doctoral Researchers 
  const postDocStudents = [
    {
      name: "Dr. Abdul Shukoor",
      photo: abdul_shukoor_photo,
      linkedin:
        "https://www.linkedin.com/in/abdul-shukoor-a27025110/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      researchArea:
        "His expertise spans a wide array of domains, including advanced metamaterials, electromagnetic absorbers, reconfigurable intelligent surfaces (RIS), terahertz systems, and high-efficiency RF power amplifiers.",
    },
    {
      name: "Dr. Aditya Pal",
      photo: Adity_photo,
      linkedin:
        "https://www.linkedin.com/in/dr-aditya-pal-a31872ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      researchArea:
        "MIMO Antennas, Reconfigurable antennas, implantable Antennas for biomedical applications, metasurfaces and Microwave Circuits including LNAs and PAs.",
    },
    {
      name: "Dr. Pawan Kumar Shukla",
      photo: pawan_shukla_photo,
      linkedin: "https://www.linkedin.com/in/dr-pawan-kumar-shukla-a88ba0250",
      researchArea:
        "MIMO Antennas for mm-wave, DRA, Metamaterial/Metasurface, RF measurement, Quantum Devices",
    },
  ];

  // Past Post-Doc Candidates 
  const pastPostDocCandidates = [
    {
      name: "Dr. Manish Singh",
      researchArea:
        "mm-Wave Front-end Designer (5G/6G, Antenna Design, MMIC PA/LNA, mm-Wave Frequency RF Transitions, Metamaterial/Metasurface, FSS, Absorbers, PA Linearization Techniques, Additive manufacturing.)",
 linkedin: null,
    },
    {
      name: "Dr. Aijaz Mehdi Zaidi",
      researchArea:
        "Frequency Agile RF Power Amplifier for 5G Wireless Application",
      linkedin: null,
    },
  ];

  // B.Tech Students
  const btechStudents = [
    {
      name: "Vivek Sharma",
      photo: vivek_photo,
      year: "B.Tech 2023",
      linkedin: null,
    },
    {
      name: "Harsh Kumar",
      photo: harsh_photo,
      year: "B.Tech 2025",
      linkedin: null,
    },
    {
      name: "Aniket Vishwakarma",
      photo: aniket_photo,
      year: "B.Tech 2025",
      linkedin: null,
    },
    {
      name: "Amit Kumar",
      photo: amit_photo,
      year: "B.Tech 2025",
      linkedin: null,
    },
    {
      name: "Akash Jha",
      photo: null,
      year: "B.Tech 2024",
      linkedin: null,
    },
    {
      name: "Parth Sarthi Mishra",
      photo: parth_photo,
      year: "B.Tech 2024",
      linkedin: null,
    },
    {
      name: "Arun Kumar",
      photo: null,
      year: "B.Tech 2026",
      linkedin: null,
    },
    {
      name: "Divya Raj",
      photo: divya_photo,
      year: "B.Tech 2026",
      linkedin: null,
    },
  ];

  const phdStudentsOngoing = [
    {
      name: "Avinash Singh",
      topic:
        "Design and Analysis of Wideband and Linearized Transmitter in Multi-Chip Module.",
      photo: Avinash_photo,
      linkedin: "https://www.linkedin.com/in/avinash-singh-386930112/",
    },
    {
      name: "B. Ganesh Pandurang",
      topic: "GaN HEMT Device Characterization Modelling and MMIC Design",
      photo: ganesh_photo,
      linkedin:
        "https://www.linkedin.com/in/ganesh-bargaje/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Amrit Kumar Panigrahi",
      topic: "Wireless Radio Design in Embedded Platform",
      photo: amrit_photo,
      linkedin:
        "https://www.linkedin.com/in/amrit-kumar-panigrahi-2646a4101/overlay/photo/",
    },
    {
      name: "Reddy Chaitanya",
      topic: "Power Amplifier Design in SiGe Bi-CMOS Technology",
      photo: chaitaniya_photo,
      linkedin: "https://www.linkedin.com/in/chaitanya-reddy-015b2290/",
    },
    {
      name: "Kamini Singh",
      topic:
        "Power amplifier with high Spectral & Power efficiency for Wireless Communication in CMOS RFIC Technology",
      photo: kamini_photo,
      linkedin: "https://www.linkedin.com/in/kamini-singh-b181a56b/",
    },
    {
      name: "Tarun Kumar Surethiya",
      topic: "Power amplifier Design using CMOS RFIC Technology",
      photo: tarun_photo,
      linkedin: "https://www.linkedin.com/in/tarun-kumar-suretia-900461152/",
    },
    {
      name: "Nupur Sood",
      topic: "High Efficiency & Linearized Power Amplifier Module Design",
      photo: null,
      linkedin: null,
    },
    {
      name: "Amit Singh",
      topic: "High Efficiency & Linearized Power Amplifier Module Design",
      photo: Amit_singh_photo,
      linkedin:
        "https://www.linkedin.com/in/amitsinghrf/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ahmad Zakaria",
      topic: "RF Packaging & Thermal Design for High Power Amplifiers",
      photo: ahmed_zakaria_photo,
      linkedin: "https://www.linkedin.com/in/ahmad-zakaria-ahmad-b63a39284/",
    },
  ];

  const mtechSupervisions = [
    'Anshul Pandey, "A 6-bit 65 nm CMOS Active Phase Shifter in Ku Band for Analog Beamforming Application", Graduation: 2025.',
    'Manmathesh Mishra, "Design of A 47 GHz Power Amplifier in A 130 nm SiGe BiCMOS8XP Process Technology", Graduation: 2023.',
    "Amit placed in GalaxEye Space Pvt. Ltd. (RF design Engineer) 2021 Graduated",
    "Shruti Shikha placed in Qualcomm (Bluetooth Developer) 2021 Graduated",
    'Rohit Gupta, "Enclosure effect on Microwave Power Amplifier", Graduation: 2020.',
    'Zaw Thet, "Design and analysis of multiband microstrip filter", Graduation: 2020.',
    'Ahmad Zakaria, "On-Chip PA Design using GaN HEMT MMIC Process", Graduation: 2019.',
    'Rashmi Soni, "Multiport Network Design and Application for Vector Network Analysis", Graduation: 2018.',
    'Rambabu Kumar, "Wide band Distributed RF power amplifier", Graduation: 2017.',
    'Jai Datt Poonia, "GaN Based Switch Mode Power Amplifier In Class-D Mode", Graduation: 2017.',
    'Pankaj Kakkad, "Broadband Class E RF Power Amplifier", Graduation: 2017.',
    'Samarth Saxena, "Modeling of GaN HEMT and RF Power Amplifier Design", Graduation: 2016.',
    'Viswas N.G., Design, "Analysis and Characterization of GaN HEMT based Power Amplifiers", Graduation: 2015.',
    'Akhilesh K, "Design and Optimization of Doherty Power Amplifier with Extended Efficiency Range", Graduation: 2014.',
    'Parul Gupta, "Design of harmonic terminated power amplifier", Graduation: 2014.',
    'Lalbahadur Dube, "Six Port Modulator Design using Six Port Microwave Network", Graduation: 2014.',
    'Girish Kumar Ajmera, "Design of High Efficiency Multi-Standard Multi-Stage Doherty Power Amplifier", Graduation: 2014.',
  ];

  const phdSupervisionsCompleted = [
    'Ashish Jindal, "Broadband Transmit/Receive Front end functional block using GaN HEMT Technology", Thesis submitted.',
    'Anuj Kumar Sahoo, "Multi-Port Networks For RF Measurement and Wideband Transmitter Design", Graduation: 2023.',
    'Nishant Kumar, "Delta Sigma Modulation Based Digital Transmitter For Upcoming Wireless Communication", Graduation: 2021.',
    'Y.M. AshaLatha, "Waveform Engineering Inspired Power Amplifiers for Wideband Applications", Graduation: 2021.',
    'E. Aggrawal, "Wideband Continuous Mode Power Amplifiers for Outphasing Wireless Transmitters", Graduation: 2021.',
    'H. K. Singhal, "Multi-Octave Transmitter Design With Filter-Less Harmonic Suppression Schemes For Power Amplifiers", Graduation: 2020.',
    'Sujata Ghosh, "Bandwidth and back-off enhancement in Doherty Power Amplifier", Graduation: 2020.',
    'C. Pathak, "Characterization & Mitigation of Linear & Non-Linear Distortions in Six-Port Modulator", Graduation: 2019.',
    'A. Barthwal, "Bandwidth and Dynamic Range Extension of Load Modulation in Doherty PA Architecture", Graduation: 2019.',
    'R. Kalyan, "Reconfigurable Concurrent Multi-band Doherty Power Amplifier", Graduation: 2017.',
  ];

  const adminTechnicalTeam = [
    {
      name: "Pravesh",
      role: "Technical Support",
      photo: Pravesh_photo,
      linkedin: null,
    },
    {
      name: "Shankraj",
      role: "Administrative Support",
      photo: ShankhRaj_photo,
      linkedin: null,
    },
    {
      name: "Nitin",
      role: "Administrative Support",
      photo: Nitin_photo,
      linkedin: null,
    },
  ];

  // placements 
  const placements = [
    [
      "Avinash Singh",
      "PhD, Ongoing",
      "IIT Roorkee",
      "Placed at Global Foundries, Bangalore, India",
    ],
    [
      "Nishant Kumar",
      "PhD, 2021",
      "IIT Roorkee",
      "Principle Engg. Design Enablement Texas Instruments (TI), Bangalore, India",
    ],
    [
      "Y. Mary Asha Latha",
      "PhD, 2021",
      "IIT Roorkee",
      "Asst. Prof, IIT(ISM) Dhanbad",
    ],
    ["Ekta Aggrawal", "PhD, 2021", "IIT Roorkee", "Placed at IISC Bangalore"],
    ["Sujata Ghosh", "PhD, 2020", "IIT Roorkee", "Global Foundries, Bengaluru"],
    [
      "Hemant Kumar Singhal",
      "PhD, 2020",
      "IIT Roorkee",
      "Staff Engineer ,Axiro Semiconductor, Bengaluru",
    ],
    ["Chetan Pathak", "PhD, 2019", "IIT Roorkee", "Asst. Prof, RJIT, Gwalior"],
    ["Ayushi Barthwal", "PhD, 2018", "IIT Delhi", "Asst. Prof, JNU, New Delhi"],
    [
      "Robin Kalyan",
      "PhD, 2017",
      "IIT Delhi",
      "Scientist, A*STAR Singapore (Former Employee ISRO)",
    ],
    ["Rashmi Soni", "M.Tech. 2018", "IIT Roorkee", "Intel, Bangalore, India"],
    ["Varun Deep Singh", "M.Tech. 2017", "IIT Roorkee", "AAI, India"],
    [
      "Viswas N.G.",
      "M.Tech, 2015",
      "IIT Roorkee",
      "Qualcomm, Bangalore, India",
    ],
    [
      "Girish Kumar Ajmera",
      "M.Tech, 2014",
      "IIT Delhi",
      "Applied Materials, India",
    ],
    [
      "Lalbahadur Dube",
      "M.Tech, 2014",
      "IIT Delhi",
      "DEAL, DRDO, Dehradun, India",
    ],
    ["Parul Gupta", "M.Tech, 2014", "IIT Delhi", "SSPL, DRDO, Delhi, India"],
    ["Akhilesh K.", "M.Tech, 2014", "IIT Delhi", "Intel"],
    [
      "Samarth Saxena",
      "B.Tech. & M.Tech. , 2016",
      "IIT Roorkee",
      "Astrome Technologies, Bangalore, India",
    ],
    [
      "Pankaj Kakkad",
      "B.Tech. & M.Tech. , 2017",
      "IIT Roorkee",
      "Airport Authority of India, Government of India",
    ],
    [
      "Jai Dutt Poonia",
      "B.Tech. & M.Tech. , 2017",
      "IIT Roorkee",
      "Bharat Sanchar Nigam Ltd., Government of India",
    ],
    [
      "Rambabu Kumar",
      "B.Tech. & M.Tech. , 2017",
      "IIT Roorkee",
      "Indian Meteorological Department, Government of India",
    ],
    ["Aniket Vishwakarma", "B.Tech, 2025", "IIT Roorkee", "Sprinkler"],
    ["Amit Kumar", "B.Tech, 2025", "IIT Roorkee", "Google"],
    ["Akash Jha", "B.Tech, 2024", "IIT Roorkee", "Google"],
    ["Parth Sarthi Mishra", "B.Tech, 2024", "IIT Roorkee", "Qualcomm"],
       [
      "Piyush Garg",
      "B.Tech. 2018",
      "IIT Roorkee",
      "SAC, ISRO, Ahmedabad, India",
    ]
  ];

  // Demo profile picture generator
  const generateDemoAvatar = (name) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-teal-500",
    ];
    const colorClass = colors[name.length % colors.length];

    return (
      <div
        className={`w-24 h-24 rounded-full mx-auto mb-4 ${colorClass} flex items-center justify-center shadow-lg`}
      >
        <span className="text-white text-xl font-bold">{initials}</span>
      </div>
    );
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Animate header on mount
    setTimeout(() => setIsHeaderVisible(true), 100);
  }, []);

  return (
    <div id="main-content" className="bg-[#F7F7F7] py-10 font-inter">
      {/* Main Header with Animation Effect */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2
            className={`
              block text-4xl md:text-6xl font-bold pb-2 mb-4
              transition-all duration-1000 ease-out cursor-pointer
              ${
                isHeaderVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              ${isHovered ? "scale-105" : "scale-100"}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              className={`
              bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent
              transition-all duration-500
              ${isHovered ? "from-teal-500 to-blue-400" : ""}
            `}
            >
              Team
            </span>

            <span
              className={`
              mx-3 md:mx-4 text-gray-700 
              transition-all duration-300
              ${isHovered ? "text-gray-900 scale-110" : ""}
            `}
            >
              &
            </span>

            <span
              className={`
              bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent
              transition-all duration-500
              ${isHovered ? "from-teal-500 to-blue-400" : ""}
            `}
            >
              Members
            </span>

            {/* Subtle underline effect */}
            <div
              className={`
              h-1 bg-gradient-to-r from-teal-600 to-blue-500 
              transition-all duration-500 ease-out mt-2
              ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}
            `}
            />
          </h2>
          {/* Floating Animation Elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Meet our dedicated research team, administrative staff, and
          accomplished alumni
        </p>
      </div>

      <div className="cardContainer flex flex-col shadow-lg rounded-xl gap-8 bg-white lg:mx-[8%] md:mx-[6%] mx-[3%] px-8 py-12">
        {/* Research Team Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 inline-block rounded"></span>
            Research Team
          </h3>

          {/* Post Doctoral Researchers */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200">
              Post Doctoral Researchers
            </h4>
            {/*column Grid Layout Post-Docs */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {postDocStudents.map((student, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group flex flex-col"
                >
                  <div className="text-center mb-4">
                    {student.photo ? (
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                      />
                    ) : (
                      generateDemoAvatar(student.name)
                    )}
                    <h5 className="font-bold text-lg text-[#1d466e] mb-2">
                      {student.name}
                    </h5>
                  </div>

                  {/* Research Area */}
                  <div className="flex-grow mb-4">
                    <p className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                      Research Area:
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {student.researchArea}
                    </p>
                  </div>

                  {/* LinkedIn Button */}
                  <div className="text-center mt-auto">
                    {student.linkedin && (
                      <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PhD Students Ongoing */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200">
              PhD Students - Ongoing
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdStudentsOngoing.map((student, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                >
                  {student.photo ? (
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                    />
                  ) : (
                    generateDemoAvatar(student.name)
                  )}
                  <h5 className="font-bold text-lg text-[#1d466e] mb-3">
                    {student.name}
                  </h5>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed italic font-medium">
                    {student.topic}
                  </p>
                  {student.linkedin && (
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* B.Tech Students Section*/}
        <div>
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-700 inline-block rounded"></span>
            B.Tech Students
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btechStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                {student.photo ? (
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                  />
                ) : (
                  generateDemoAvatar(student.name)
                )}
                <h5 className="font-bold text-lg text-[#1d466e] mb-2">
                  {student.name}
                </h5>
                <p className="text-sm text-blue-600 font-semibold bg-green-50 px-3 py-1 rounded-full inline-block">
                  {student.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Administrative and Technical Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 inline-block rounded"></span>
            Admin and Technical Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminTechnicalTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-lg overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h5 className="font-bold text-lg text-[#1d466e] mb-2">
                  {member.name}
                </h5>
                <p className="text-sm text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-full inline-block">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Post-Doc Candidates Section */}
        <div className="mt-4">
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-700 inline-block rounded"></span>
            Past Post-Doc Candidates Worked
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            {pastPostDocCandidates.map((candidate, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border border-purple-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg text-[#1d466e] mb-2">
                      {candidate.name}
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      <span className="font-semibold text-purple-600">
                        Research Area:{" "}
                      </span>
                      {candidate.researchArea}
                    </p>
                    {candidate.linkedin && (
                      <a
                        href={candidate.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Supervision Completed Section */}
        <div className="mt-4">
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-700 inline-block rounded"></span>
            PhD Supervision - Completed
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {phdSupervisionsCompleted.map((phdSupervision, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border border-emerald-100"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed text-sm font-medium">
                      {phdSupervision}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* M.Tech Supervision Section */}
        <div className="mt-4">
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-700 inline-block rounded"></span>
            M.Tech. Supervision
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {mtechSupervisions.map((mtechSupervision, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border border-orange-100"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed text-sm font-medium">
                      {mtechSupervision}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Details Section */}
        <div className="mt-4">
          <h3 className="text-3xl font-bold text-[#1d466e] flex gap-3 mb-6 items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-700 inline-block rounded"></span>
            Placement Details of Students Supervised
          </h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Degree
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Institute
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Current Position
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {placements.map((placement, index) => (
                    <tr
                      key={index}
                      className={`hover:bg-blue-50 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full text-sm font-bold">
                          {index + 1}
                        </div>
                      </td>
                      {placement.map((p, idx) => (
                        <td
                          key={idx}
                          className="px-6 py-4 text-sm text-gray-800 leading-relaxed"
                        >
                          <div
                            className={`${
                              idx === 0
                                ? "font-bold text-blue-900"
                                : idx === 3
                                ? "font-semibold"
                                : "font-medium"
                            }`}
                          >
                            {p}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .font-inter {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default TeamAndMembers;
