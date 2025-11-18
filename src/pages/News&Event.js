import React, { useEffect, useState } from "react";
import { getAllPublications, getAllNews } from "../services/getData";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";

const NewsAndEvents = () => {
  const [activeTab, setActiveTab] = useState("news"); // "news" or "workshops"
  const [newsList, setNewsList] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [error, setError] = useState();
  const [isLoader, activeLoader] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // Fetch both news and workshops in parallel
      const [newsRes, workshopsRes] = await Promise.all([
        getAllNews(),
        getAllPublications("workshop")
      ]);
      
      if (newsRes.error || workshopsRes.error) {
        setError(newsRes.error || workshopsRes.error);
      } else {
        setNewsList(newsRes.data || []);
        setWorkshops(workshopsRes.data || []);
        activeLoader(false);
      }
    }
    
    fetchData();
    setTimeout(() => setIsHeaderVisible(true), 100);
  }, []);

  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  const NewsItem = ({ item }) => (
    <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          📰
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {item.content}
          {item.date && (
            <span className="block text-sm text-gray-500 mt-1">
              {new Date(item.date).toLocaleDateString()}
            </span>
          )}
        </p>
      </div>
    </div>
  );

  const WorkshopItem = ({ item, index }) => (
    <div className="group flex items-start gap-4 p-4 hover:bg-gradient-to-r from-teal-50 to-white rounded-lg transition-all duration-300">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
          🎓
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
          {item.content}
          {item.year && (
            <span className="ml-2 text-sm text-gray-500">({item.year})</span>
          )}
        </p>
      </div>
    </div>
  );

  return (
    <div id="main-content" className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Header */}
      <div className="pt-24 pb-8">
        <div className="text-center">
          <h1
            className={`block text-4xl md:text-5xl font-bold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mb-4 transition-all duration-1000 ${
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            News & Events
          </h1>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-150 ${
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Stay updated with our latest news, workshops, and events.
          </p>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isHeaderVisible ? "opacity-100 w-24" : "opacity-0 w-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-2xl mx-auto mb-12 mt-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-sm p-1 border border-gray-100">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "news"
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              News & Highlights
            </button>
            <button
              onClick={() => setActiveTab("workshops")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "workshops"
                  ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Training & Workshops
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoader ? (
          <div className="flex justify-center p-12">
            <Lottie options={loaderSetting} height={120} width={120} />
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : (
          <>
            {/* News Tab Content */}
            {activeTab === "news" && (
              <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden mb-16">
                {newsList.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No news available at the moment.
                  </div>
                ) : (
                  <>

                    <div className="grid gap-4 p-6">
                      {newsList.map((news, index) => (
                        <NewsItem key={news._id || index} item={news} />
                      ))}
                    </div>
                  </>
                )}
                {/* Footer Note */}
                <div className="text-center text-gray-500 text-sm p-6 border-t border-blue-100">
                  <p>For press inquiries or more information, please contact our communications office.</p>
                </div>
              </div>
            )}

            {/* Workshops Tab Content */}
            {activeTab === "workshops" && (
              <div className="bg-white rounded-2xl shadow-md border border-teal-100 overflow-hidden mb-16">
                {workshops.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No workshops available at the moment.
                  </div>
                ) : (
                  <>

                    <div className="grid gap-2 p-6">
                      {workshops
                        .filter((w) => w.type === "workshop")
                        .map((workshop, index) => (
                          <WorkshopItem key={workshop._id || index} item={workshop} />
                        ))}
                    </div>
                  </>
                )}
                {/* Footer Note */}
                <div className="text-center text-gray-500 text-sm p-6 border-t border-teal-100">
                  <p>
                    Interested in joining our next workshop? Contact our team for
                    details and registration.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsAndEvents;