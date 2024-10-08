"use client";
import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("simple");

  const tabs = [
    { id: "simple", label: "Simple Bookmark" },
    { id: "speedy", label: "Speedy Searching" },
    { id: "easy", label: "Easy Sharing" },
  ];

    const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* Features heading */}
      <section id="features">
        <div className="container mx-auto mt-8 px-6">
          <h2 className="mb-4 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-gray-400">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="tabs">
        {/* Table/Panels Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-8 px-6">
          <div className="bg-tabs"></div>
          {/* Tabs Flex Container */}
          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:flex-row">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex-1 text-center cursor-pointer border-b-4 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-600 hover:text-red-500"
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                <div className="py-5">{tab.label}</div>
              </div>
            ))}
          </div>

          {/* Tab Panels */}
          <div id="panels" className="container mx-auto">
            {/* Panel 1 */}
            <div className={`panel ${activeTab === "simple" ? "" : "hidden"}`}>
              <div className="flex flex-col py-5 md:flex-row md:space-x-7">
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src="images/illustration-features-tab-1.svg"
                    alt=""
                    className="relative z-10"
                  />
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Bookmark in one click
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className={`panel ${activeTab === "speedy" ? "" : "hidden"}`}>
              <div className="flex flex-col py-5 md:flex-row md:space-x-7">
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src="images/illustration-features-tab-2.svg"
                    alt=""
                    className="relative z-10"
                  />
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Intelligent search
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    Our powerful search feature will help you find saved sites
                    in no time at all. No need to trawl through all of your
                    bookmarks.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3 */}
            <div className={`panel ${activeTab === "easy" ? "" : "hidden"}`}>
              <div className="flex flex-col py-5 md:flex-row md:space-x-7">
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src="images/illustration-features-tab-3.svg"
                    alt=""
                    className="relative z-10"
                  />
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Share your bookmarks
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a
                    button.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
