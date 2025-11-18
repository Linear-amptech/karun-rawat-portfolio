import React, { useEffect, useState } from "react";
import { getAllPublications } from "../services/getData";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";

const Publications = () => {
  const [activeSection, setActiveSection] = useState("books");
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState();
  const [isLoader, activeLoader] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    async function fetchPublications() {
      const res = await getAllPublications("");
      if (res.error) {
        setError(res.error);
      } else {
        setPublications(res.data || []);
        activeLoader(false);
      }
    }
    fetchPublications();

    // Animate header on mount
    setTimeout(() => setIsHeaderVisible(true), 100);
  }, []);

  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  const sections = [
    { id: "books", label: "Books", icon: "📚" },
    { id: "patents", label: "Patents", icon: "⚖️" },
    { id: "journals", label: "Journals", icon: "📖" },
    { id: "conferences", label: "Conferences", icon: "🎤" },
  ];

  // Styled list item component
  const PublicationItem = ({ item, index, type }) => (
    <div className="group flex items-start gap-4 p-4 hover:bg-gradient-to-r from-blue-50 to-white rounded-lg transition-all duration-300">
      <div className="flex-shrink-0 mt-1">
        {type === "book" && (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            📚
          </div>
        )}
        {type === "patent" && (
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            ⚖️
          </div>
        )}
        {type === "journal" && (
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
            📄
          </div>
        )}
        {type === "conference" && (
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
            🎤
          </div>
        )}
      </div>
      <div className="flex-grow">
        <p className="text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {item.content}
          {item.year && (
            <span className="ml-2 text-sm text-gray-500">({item.year})</span>
          )}
        </p>
      </div>
    </div>
  );

  return (
    <div
      id="main-content"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50"
    >
      {/* Animated Header */}
      <div className="pt-24 pb-12">
        <div className="text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-4 transition-all duration-1000 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Research Publications
          </h1>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-150 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Explore our collection of published works across various domains
          </p>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isHeaderVisible ? "opacity-100 w-24" : "opacity-0 w-0"
            }`}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-1 mb-12 bg-white rounded-xl p-1 shadow-md border border-blue-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                activeSection === section.id
                  ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>

        {/* Publication Count Badge */}
        {!isLoader && <div className="mb-6 text-center"></div>}

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden mb-16">
          {isLoader ? (
            <div className="flex justify-center p-12">
              <Lottie options={loaderSetting} height={120} width={120} />
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-500">{error}</div>
          ) : (
            <>
              {/* Books Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeSection === "books"
                    ? "opacity-100 p-6 md:p-8"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Published Books
                  </h2>
                </div>
                <div className="grid gap-2">
                  {publications
                    .filter((pub) => pub.type === "book")
                  
                    .map((data, index) => (
                      <PublicationItem
                        key={`book-${index}`}
                        item={data}
                        type="book"
                      />
                    ))}
                </div>
              </div>

              {/* Patents Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeSection === "patents"
                    ? "opacity-100 p-6 md:p-8"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Patent Publications
                  </h2>
                </div>
                <div className="grid gap-2">
                  {publications
                    .filter((pub) => pub.type === "patent")
                    
                    .map((data, index) => (
                      <PublicationItem
                        key={`patent-${index}`}
                        item={data}
                        type="patent"
                      />
                    ))}
                </div>
              </div>

              {/* Journals Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeSection === "journals"
                    ? "opacity-100 p-6 md:p-8"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Journal Publications
                  </h2>
                </div>
                <div className="grid gap-2">
                  {publications
                    .filter((pub) => pub.type === "journal")
                    .sort((a, b) => b.year - a.year)
                    .map((data, index) => (
                      <PublicationItem
                        key={`journal-${index}`}
                        item={data}
                        type="journal"
                      />
                    ))}
                </div>
              </div>

              {/* Conferences Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeSection === "conferences"
                    ? "opacity-100 p-6 md:p-8"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Conference Publications
                  </h2>
                </div>
                <div className="grid gap-2">
                  {publications
                    .filter((pub) => pub.type === "conference")
                    .sort((a, b) => b.year - a.year)
                    .map((data, index) => (
                      <PublicationItem
                        key={`conf-${index}`}
                        item={data}
                        type="conference"
                      />
                    ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm pb-8">
          <p>
            For more information about our publications, please contact our
            research office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publications;