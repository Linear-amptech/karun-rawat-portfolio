import React, { useState, useEffect } from "react";
import { ExternalLink, BookOpen, Award, Users, Briefcase, MapPin, Calendar, Building2 } from "lucide-react";
import linear_amptech_logo from "../assets/Home/amptech_logo.png";


const amptech_logo = linear_amptech_logo;
const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('biography');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const [hoveredTimelineItem, setHoveredTimelineItem] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoader(false);
      setIsHeaderVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Timeline animation effect
  useEffect(() => {
    if (activeSection === 'biography') {
      const timer = setInterval(() => {
        setVisibleTimelineItems(prev => {
          if (prev.length < timelineData.length) {
            return [...prev, prev.length];
          }
          return prev;
        });
      }, 200);

      return () => clearInterval(timer);
    } else {
      setVisibleTimelineItems([]);
    }
  }, [activeSection]);

  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: {},
  };

  const sections = [
    { id: 'biography', label: 'Biography', icon: <BookOpen size={18} /> },
    { id: 'awards', label: 'Honour & Awards', icon: <Award size={18} /> },
    { id: 'memberships', label: 'Memberships', icon: <Users size={18} /> },
    { id: 'affiliations', label: 'Leadership', icon: <Briefcase size={18} /> },
  ];

  const timelineData = [
    {
      id: 1,
      period: "Aug. 2024-Current",
      position: "Professor",
      department: "Electronics & Communication Engineering",
      institution: "IIT Roorkee",
      location: "Roorkee, India",
      type: "current"
    },
    {
      id: 2,
      period: "Aug. 2024-Dec. 2024",
      position: "Coordinator",
      department: "Re-Think! The Tinkering Lab",
      institution: "IIT Roorkee",
      location: "Roorkee, India",
      type: "past"
    },
    {
      id: 3,
      period: "Dec. 2019-Aug. 2024",
      position: "Associate Professor",
      department: "Electronics & Communication Engineering",
      institution: "IIT Roorkee",
      location: "Roorkee, India",
      type: "past"
    },
    {
      id: 4,
      period: "Dec. 2014-Dec. 2019",
      position: "Assistant Professor",
      department: "Electronics & Communication Engineering",
      institution: "IIT Roorkee",
      location: "Roorkee, India",
      type: "past"
    },
    {
      id: 5,
      period: "April 2013-Dec. 2014",
      position: "Assistant Professor",
      department: "Centre for Applied Research in Electronics",
      institution: "IIT Delhi",
      location: "Delhi, India",
      type: "past"
    },
    {
      id: 6,
      period: "May 2012-Mar. 2013",
      position: "Postdoctoral Fellow",
      department: "Electrical Engineering",
      institution: "University of Calgary",
      location: "Calgary, Canada",
      type: "past"
    },
    {
      id: 7,
      period: "Jan. 2008-April 2012",
      position: "Research Fellow",
      department: "Electrical Engineering",
      institution: "University of Calgary",
      location: "Calgary, Canada",
      type: "past"
    },
    {
      id: 8,
      period: "Oct. 2003-Dec. 2007",
      position: "Scientist/Engineer",
      department: "Space Applications Centre",
      institution: "ISRO",
      location: "Ahmedabad, India",
      type: "past"
    }
  ];

  const getPositionColor = (type) => {
    switch(type) {
      case 'current': return 'bg-emerald-500';
      default: return 'bg-slate-500';
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'current': return 'bg-emerald-500 ring-emerald-200';
      default: return 'bg-slate-400 ring-slate-200';
    }
  };

  // Vertical Timeline Component
  const VerticalTimeline = () => (
    <div className="h-fit">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <div className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-slate-400 rounded-full"></div>
          Academic Journey
        </h3>
        <p className="text-sm text-gray-600">Career progression timeline</p>
      </div>
      
      <div className="relative max-h-[880px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>

        {/* Timeline Items */}
        <div className="space-y-4 pb-4">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-start transition-all duration-500 ${
                visibleTimelineItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              onMouseEnter={() => setHoveredTimelineItem(item.id)}
              onMouseLeave={() => setHoveredTimelineItem(null)}
            >
              {/* Timeline Icon */}
              <div className={`absolute left-3.5 w-3 h-3 rounded-full ${getIconColor(item.type)} border-2 border-white shadow-sm z-10 transition-transform duration-200 ${
                hoveredTimelineItem === item.id ? 'scale-125' : ''
              }`}></div>

              {/* Content Card */}
              <div className={`ml-10 bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all duration-200 hover:shadow-md hover:scale-[1.01] ${
                item.type === 'current' ? 'ring-1 ring-emerald-200 bg-emerald-50' : ''
              }`}>
                {/* Period Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 text-white ${getPositionColor(item.type)}`}>
                  {item.period}
                  {item.type === 'current' && (
                    <span className="ml-2 inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  )}
                </div>

                {/* Position */}
                <h4 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
                  {item.position}
                </h4>

                {/* Department */}
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                  {item.department}
                </p>

                {/* Institution */}
                <p className="text-sm font-medium text-slate-700 mb-2">
                  {item.institution}
                </p>

                {/* Location */}
                <p className="text-xs text-gray-500 mb-1">
                  {item.location}
                </p>

                {/* Note if exists */}
                {item.note && (
                  <p className="text-xs text-gray-500 italic mt-2">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced content item component
  const ContentItem = ({ title, description, meta, type, index, icon }) => (
    <div className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
      type === 'award' ? 'border-green-100 bg-gradient-to-br from-green-50 to-white hover:border-green-200' : 
      type === 'membership' ? 'border-purple-100 bg-gradient-to-br from-purple-50 to-white hover:border-purple-200' : 
      type === 'affiliation' ? 'border-orange-100 bg-gradient-to-br from-orange-50 to-white hover:border-orange-200' : 
      'border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:border-blue-200'
    }`}>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <div className={`w-full h-full rounded-full ${
          type === 'award' ? 'bg-green-400' : 
          type === 'membership' ? 'bg-purple-400' : 
          type === 'affiliation' ? 'bg-orange-400' : 
          'bg-blue-400'
        }`}></div>
      </div>

      <div className="relative p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            {type === 'award' && <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 ring-4 ring-green-50"><Award size={20} /></div>}
            {type === 'membership' && <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 ring-4 ring-purple-50"><Users size={20} /></div>}
            {type === 'affiliation' && <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 ring-4 ring-orange-50"><Briefcase size={20} /></div>}
            {!type && icon && <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ring-4 ring-blue-50">{icon}</div>}
            {!type && !icon && <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ring-4 ring-blue-50 font-bold">{index + 1}</div>}
          </div>
          <div className="flex-grow">
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              type === 'award' ? 'text-green-800 group-hover:text-green-900' :
              type === 'membership' ? 'text-purple-800 group-hover:text-purple-900' :
              type === 'affiliation' ? 'text-orange-800 group-hover:text-orange-900' :
              'text-blue-800 group-hover:text-blue-900'
            }`}>
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            {meta && <p className="text-sm text-gray-500 mt-3 font-medium">{meta}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="main-content" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <div className="relative overflow-hidden pt-24 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-emerald-600/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <div className="inline-block">
            <h1 
              className={`
                text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 mb-6 pb-2
                transition-all duration-1000 ease-out cursor-pointer
                ${isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${isHovered ? "scale-105" : ""}
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Professional Profile
            </h1>
            
            {/* underline effect */}
            <div className={`
              h-2 bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 rounded-full
              transition-all duration-700 ease-out
              ${isHovered ? "w-full opacity-100 shadow-lg" : "w-0 opacity-0"}
            `} />
          </div>
    
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-150 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Explore the comprehensive professional journey, achievements, and affiliations of an accomplished academic leader
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 text-sm font-semibold ${
                activeSection === section.id
                  ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50 hover:scale-102'
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16">

            
              {/* Biography Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'biography' ? 'opacity-100 p-8 md:p-12' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gradient-to-r from-blue-200 to-emerald-200">
                  <div className="w-3 h-12 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">Professional Biography</h2>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Biography Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Hero Bio Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                      <div className="flex items-start gap-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Dr. Karun Rawat</span>
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed mb-2">
                            Professor in the Department of Electronics and Communication Engineering at the Indian Institute of Technology (IIT) Roorkee, India.
                          </p>
                          <p className="text-blue-600 font-semibold">PhD in Electrical Engineering, University of Calgary, Canada (2012)</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Highlights Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <ContentItem
                        title="Research Excellence"
                        description="Over 100+ publications in premier journals and conferences, 10 patents, and several authored books and book chapters in the field of RF and microwave engineering."
                        type="award"
                        icon={<Award size={20} />}
                      />
                      <ContentItem
                        title="Industry Innovation"
                        description="Founding Director of Linear amp-tech technology private limited, bridging academic research with practical industry solutions."
                        type="affiliation"
                        icon={<Briefcase size={20} />}
                      />
                    </div>
                    
                    <ContentItem
                      title="Research Focus & Global Impact"
                      description="As a Senior IEEE member since 2012, his research spans RF power amplifier design, digital transmitters, nonlinear device modeling, and RF CMOS and GaN MMIC designs. His work has been presented at prestigious international conferences including EuMC, IEEE IMS, and IEEE ARFTG, establishing him as a recognized expert in RF and microwave engineering."
                      icon={<BookOpen size={20} />}
                    />
                    
                    <ContentItem
                      title="Editorial & Professional Service"
                      description="Dr. Rawat serves as a reviewer for multiple IEEE transactions and is a distinguished member of the editorial board of Wiley journal in RF and Microwave Computer Aided Engineering. He has contributed to advisory committees of RF industries, national laboratories, and universities, and served as technical program chair for IEEE INDICON 2017."
                      icon={<Users size={20} />}
                    />
                  </div>

                  {/* Vertical Timeline Sidebar */}
                  <div className="lg:col-span-1">
                    <VerticalTimeline />
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'awards' ? 'opacity-100 p-8 md:p-12' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-green-200">
                  <div className="w-3 h-12 bg-gradient-to-b from-green-500 to-green-400 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Awards & Recognition</h2>
                </div>
                
                <div className="grid gap-6">
                  {[
                    {
                      title: "Outstanding Young Faculty Award",
                      description: "Recognized for exceptional contributions to research and teaching excellence at IIT Roorkee",
                      meta: "IIT Roorkee • 2020"
                    },
                    {
                      title: "NASI Scopus Young Scientists Awards (Finalist)",
                      description: "National recognition for innovation in Engineering and Physical Sciences by the National Academy of Sciences",
                      meta: "National Academy of Sciences • 2019"
                    },
                    {
                      title: "Smart Radio Challenge - First Prize & Best Design",
                      description: "Worldwide championship recognition from Wireless Innovation Forum for outstanding radio frequency design",
                      meta: "Wireless Innovation Forum • 2010"
                    },
                    {
                      title: "Research Production Award",
                      description: "Three consecutive years of recognition for outstanding research productivity and scholarly contributions",
                      meta: "University of Calgary • 2009-2011"
                    },
                    {
                      title: "Best Industrial Trainee Award",
                      description: "Excellence in industrial training and practical application of engineering principles",
                      meta: "BEL Hyderabad • B.E. Program"
                    }
                  ].map((item, index) => (
                    <ContentItem
                      key={index}
                      title={item.title}
                      description={item.description}
                      meta={item.meta}
                      type="award"
                    />
                  ))}
                </div>
              </div>

              {/* Memberships Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'memberships' ? 'opacity-100 p-8 md:p-12' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-purple-200">
                  <div className="w-3 h-12 bg-gradient-to-b from-purple-500 to-purple-400 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">Professional Memberships</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Member Technical Committee MTT-12: Microwave High Power Techniques",
                    "Senior Member IEEE",
                    "Member MTT Special Interest Group in Microwave and Wireless Education",
                    "Member, IEEE MTT, IEEE COMSOC, IEEE EDS",
                    "Member NVNA Forum, USA",
                    "Chapter Chair, IEEE Communication Society Chapter"
                  ].map((item, index) => (
                    <ContentItem
                      key={index}
                      title={item}
                      description="Active participation in professional development and industry standards"
                      type="membership"
                    />
                  ))}
                </div>
              </div>

             {/* Leadership Section */}
<div
  className={`transition-all duration-500 ease-in-out ${
    activeSection === "affiliations"
      ? "opacity-100 p-8 md:p-12"
      : "opacity-0 max-h-0 overflow-hidden"
  }`}
>
  {/* --- Professional Leadership Section --- */}
  <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-orange-200">
    <div className="w-3 h-12 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full shadow-lg"></div>
    <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
      Professional Leadership
    </h2>
  </div>

  <div className="space-y-6 mb-10">
    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
      <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
        <Briefcase size={22} className="text-orange-500" />
        Roles at IIT Roorkee
      </h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <span className="font-semibold text-orange-700">
            Head, Centre for Semiconductor Design &amp; Technology
          </span>
          , IIT Roorkee
        </li>
        <li>
          <span className="font-semibold text-orange-700">
            Coordinator, Re-Think! The Tinkering Lab
          </span>
          , IIT Roorkee
        </li>
      </ul>
    </div>
  </div>
  {/* --- End Professional Leadership Section --- */}

  {/* --- Industrial Leadership Section --- */}
  <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-orange-200">
    <div className="w-3 h-12 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full shadow-lg"></div>
    <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
      Industrial Leadership
    </h2>
  </div>

  <div className="space-y-6">
    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
      <a
        href="https://linear-amptech.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-4 text-xl font-bold text-orange-800 hover:text-orange-900 transition-all duration-300 hover:scale-105"
      >
        <div className="w-16 h-16 bg-white rounded-xl shadow-lg p-2 group-hover:shadow-xl transition-all duration-300">
          <img
            src={amptech_logo}
            alt="Linear Amptech Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span>Linear Amptech Technology</span>
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
          <p className="text-sm font-normal text-orange-600 mt-1">
            Founding Director
          </p>
        </div>
      </a>

      <div className="mt-6 p-6 bg-white/50 rounded-xl">
        <p className="text-gray-700 leading-relaxed">
          Leading the indigenous development of cutting-edge power amplifier
          design and linearization technology solutions, bridging the gap
          between academic research and industry applications in RF and
          microwave engineering.
        </p>
      </div>
    </div>
  </div>
  {/* --- End Industrial Leadership Section --- */}
</div>

            
          
        </div>

        {/* Enhanced Footer */}
        <div className="text-center text-gray-500 pb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">For more information, please contact our office</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;