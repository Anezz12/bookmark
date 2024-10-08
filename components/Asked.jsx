"use client";
import { useState, useEffect } from "react";

export default function Asked() {
  const [openTab, setOpenTab] = useState(null);

  const handleTabClick = (tabIndex) => {
    setOpenTab(openTab === tabIndex ? null : tabIndex);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".tab-container")) {
      setOpenTab(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section id="faq-accordion">
      {/* Main Container */}
      <div className="container mx-auto px-6 mb-32">
        {/* Accordion Container */}
        <div className="max-w-2xl m-8 mx-auto overflow-hidden tab-container">
          {/* Tab 1 */}
          <div className="py-1 border-b outline-none group" tabIndex="1">
            {/* Tab Flex Container */}
            <div
              className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              onClick={() => handleTabClick(1)}
            >
              {/* Tab Title */}
              <div className="transition duration-500 ease group-hover:text-red-500">
                What is Bookmark?
              </div>
              {/* Arrow */}
              <div
                className={`transition duration-500 ease ${openTab === 1 ? "rotate-180 text-red-500" : ""
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>

            {/* Tab Inner Content */}
            <div
              className={`overflow-hidden transition duration-500 ease ${openTab === 1 ? "max-h-screen" : "max-h-0"
                }`}
            >
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>

          {/* Tab 2 */}
          <div className="py-1 border-b outline-none group" tabIndex="2">
            {/* Tab Flex Container */}
            <div
              className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              onClick={() => handleTabClick(2)}
            >
              {/* Tab Title */}
              <div className="transition duration-500 ease group-hover:text-red-500">
                How can I request a new browser?
              </div>
              {/* Arrow */}
              <div
                className={`transition duration-500 ease ${openTab === 2 ? "rotate-180 text-red-500" : ""
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>

            {/* Tab Inner Content */}
            <div
              className={`overflow-hidden transition duration-500 ease ${openTab === 2 ? "max-h-screen" : "max-h-0"
                }`}
            >
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>

          {/* Tab 3 */}
          <div className="py-1 border-b outline-none group" tabIndex="3">
            {/* Tab Flex Container */}
            <div
              className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              onClick={() => handleTabClick(3)}
            >
              {/* Tab Title */}
              <div className="transition duration-500 ease group-hover:text-red-500">
                Is there a mobile app?
              </div>
              {/* Arrow */}
              <div
                className={`transition duration-500 ease ${openTab === 3 ? "rotate-180 text-red-500" : ""
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>

            {/* Tab Inner Content */}
            <div
              className={`overflow-hidden transition duration-500 ease ${openTab === 3 ? "max-h-screen" : "max-h-0"
                }`}
            >
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>

          {/* Tab 4 */}
          <div className="py-1 border-b outline-none group" tabIndex="4">
            {/* Tab Flex Container */}
            <div
              className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
              onClick={() => handleTabClick(4)}
            >
              {/* Tab Title */}
              <div className="transition duration-500 ease group-hover:text-red-500">
                What about other Chromium browsers?
              </div>
              {/* Arrow */}
              <div
                className={`transition duration-500 ease ${openTab === 4 ? "rotate-180 text-red-500" : ""
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>

            {/* Tab Inner Content */}
            <div
              className={`overflow-hidden transition duration-500 ease ${openTab === 4 ? "max-h-screen" : "max-h-0"
                }`}
            >
              <p className="py-2 text-justify text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}