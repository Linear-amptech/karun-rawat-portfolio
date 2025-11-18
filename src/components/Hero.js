import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { getAllNews } from "../services/getData";

// images
import professorImage from "../assets/karun.jpeg";
import iitBuildingImage from "../assets/back.png";

const ProfessorProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Fetch latest news
    async function fetchNews() {
      const newsRes = await getAllNews();
      if (!newsRes.error && newsRes.data) {
        // Get top 3 news items
        const top3News = newsRes.data.slice(0, 3).map((item, index) => ({
          id: index + 1,
          title: item.content,
          summary: item.content,
        }));
        setLatestNews(top3News);
      }
    }
    
    fetchNews();
  }, []);

  return (
    <div className="bg-slate-950 font-sans text-gray-200 antialiased min-h-screen lg:h-screen lg:overflow-hidden">
    
      <main className="relative w-full min-h-screen lg:h-full flex flex-col overflow-y-auto lg:overflow-hidden">
        {/* Background Image of IIT Roorkee */}
        <div className="absolute inset-0">
          <img
            src={iitBuildingImage}
            alt="IIT Roorkee Main Building"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30"></div>
        </div>

        {/* Hero Section*/}
        <section className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:pr-80 py-8 lg:py-4 mt-16 sm:mt-20 lg:mt-8">
          <div
            className={`w-11/12 max-w-7xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Professor Photo  */}
              <div className="flex-shrink-0 group flex flex-col items-center">
                {/* Professor Photo  */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group-hover:shadow-yellow-500/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-1.5 group-hover:p-2 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={professorImage}
                        alt="Professor Karun Rawat"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/karun-rawat-b732784b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2
                             bg-blue-600 text-white rounded-full shadow-md
                             hover:bg-blue-700 hover:shadow-blue-500/40
                             transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-semibold tracking-wide">
                    LinkedIn
                  </span>
                </a>
              </div>

              {/* Text Section  */}
              <div className="space-y-4 text-center lg:text-left max-w-4xl">
                <div className="bg-slate-950/40 rounded-2xl p-6 border border-amber-500/20 shadow-xl">
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-yellow-100 leading-tight tracking-tight hover:from-amber-200 hover:to-yellow-200 transition-all duration-500 cursor-default">
                      Prof. Karun Rawat
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full mx-auto lg:mx-0"></div>
                  </div>

                  <div className="space-y-2.5 mt-5">
                    <div className="group cursor-default">
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 leading-snug hover:from-amber-300 hover:to-orange-300 transition-all duration-300">
                        Head, Centre for Semiconductor Design & Technology
                      </p>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent transition-all duration-500 mt-1"></div>
                    </div>

                    <div className="group cursor-default">
                      <p className="text-base sm:text-lg lg:text-xl font-semibold text-amber-100 hover:text-white transition-colors duration-300 leading-snug">
                        Professor, Department of Electronics & Communication
                        Engineering
                      </p>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-500 mt-1"></div>
                    </div>

                    <div className="group cursor-default">
                      <p className="text-base sm:text-lg lg:text-xl text-amber-200 font-medium hover:text-amber-100 transition-colors duration-300 leading-snug">
                        Indian Institute of Technology Roorkee
                      </p>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-amber-300 to-transparent transition-all duration-500 mt-1"></div>
                    </div>

                    <div className="group cursor-default">
                      <p className="text-base sm:text-lg lg:text-xl text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-300 leading-snug">
                        Chairman, Linear Amplifier Technologies & Services Pvt.
                        Ltd.
                      </p>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-400 to-transparent transition-all duration-500 mt-1"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-6 lg:pb-4 mt-6 lg:mt-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Office Card */}
              <div className="group relative overflow-hidden bg-slate-800/10
                  rounded-xl shadow-lg border border-amber-500/20 hover:border-amber-400/40
                  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-amber-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-5 flex flex-col items-center text-center">
                  <MapPin className="text-amber-400 w-10 h-10 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Office Location
                  </h3>
                  <p className="text-sm text-amber-100 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    Room 201 N, Dept. of ECE
                    <br />
                    IIT Roorkee, UK - 247667
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative overflow-hidden bg-slate-800/10
                  rounded-xl shadow-lg border border-yellow-500/20 hover:border-yellow-400/40
                  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-yellow-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-5 flex flex-col items-center text-center">
                  <Mail className="text-yellow-400 w-10 h-10 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email Addresses
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:karun.rawat@ece.iitr.ac.in"
                      className="block text-sm text-yellow-100 hover:text-white hover:underline transition-colors duration-300 truncate"
                    >
                      karun.rawat@ece.iitr.ac.in
                    </a>
                    <a
                      href="mailto:karun.rawat.in@ieee.org"
                      className="block text-sm text-yellow-100 hover:text-white hover:underline transition-colors duration-300 truncate"
                    >
                      karun.rawat.in@ieee.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative overflow-hidden bg-slate-800/10
                  rounded-xl shadow-lg border border-orange-500/20 hover:border-orange-400/40
                  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-5 flex flex-col items-center text-center">
                  <Phone className="text-orange-400 w-10 h-10 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phone Number
                  </h3>
                  <p className="text-sm text-orange-100 group-hover:text-white transition-colors duration-300">
                    +91 1332 284830
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Ticker - Compact at bottom */}
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-3">
          <div className="max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-sm border border-amber-500/30 rounded-xl overflow-hidden">
            <div className="py-2">
              <div className="w-full whitespace-nowrap animate-marquee">
                {latestNews.length > 0 ? (
                  latestNews.concat(latestNews).map((news, index) => (
                    <span
                      key={index}
                      className="inline-block px-6 text-xs sm:text-sm font-semibold text-amber-200 hover:text-amber-100 transition-colors duration-300 cursor-default"
                    >
                      <span className="text-amber-400 pr-2 animate-pulse">
                        ✦ LATEST:
                      </span>{" "}
                      {news.title}
                    </span>
                  ))
                ) : (
                  <span className="inline-block px-6 text-xs sm:text-sm font-semibold text-amber-200">
                    <span className="text-amber-400 pr-2 animate-pulse">
                      ✦
                    </span>{" "}
                    Loading latest news...
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Compact */}
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes bounceOnce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        /* Ensure no scrolling on laptop/desktop, but allow on mobile */
        @media (min-width: 1024px) {
          html,
          body {
            overflow: hidden;
          }
        }
        
        @media (max-width: 1023px) {
          html,
          body {
            overflow-y: auto;
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfessorProfile;