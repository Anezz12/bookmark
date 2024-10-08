"use client";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section id="newsletter" className="bg-blue-500">
      <div className="max-w-lg mx-auto py-24">
        <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
          <span ref={counterRef}>
            {isVisible && <CountUp start={0} end={35000} duration={10} />}
          </span>
          + Already Joined
        </p>
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
          Stay up-to-date with what we're doing
        </h2>
        <form className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
          <div className="flex flex-col justify-between items-center w-full md:flex-row">
            <input
              type="email"
              className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border border-white focus:outline-none md:mr-3 md:mb-0"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-red-500 hover:opacity-90"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
