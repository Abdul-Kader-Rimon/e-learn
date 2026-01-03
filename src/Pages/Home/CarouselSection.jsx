
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://i.ibb.co.com/zHVQDvwx/istockphoto-1500285927-612x612.jpg",
      title: "Learn Anytime, Anywhere",
      description:
        "Affordable courses with lifetime access at E-Learn. From UI/UX Design to Digital Marketing — unlock the best skills for your career.",
    },
    {
      url: "https://i.ibb.co.com/TBcBczr9/istockphoto-1411110345-612x612.jpg",
      title: "Go from Zero to Hero in Web Development",
      description:
        "Master practical skills with courses in JavaScript, React, and MERN Stack. Learn from expert instructor Jhankar Mahbub and become a professional developer easily.",
    },
    {
      url: "https://i.ibb.co.com/7dVmVLJy/istockphoto-1979289147-612x612.jpg",
      title: "Master Future-Ready Skills",
      description:
        "Learn Python, Full-Stack Development, and modern technologies to excel in jobs or freelancing. 100% quality courses with certificates included.",
    },
    {
      url: "https://i.ibb.co.com/SDCFPn4y/istockphoto-1486721631-612x612.jpg",
      title: "Earn a Certificate Upon Completion",
      description:
        "Get an official certificate after every E-Learn course. Gain industry-ready skills from expert instructors.",
    },
    {
      url: "https://i.ibb.co.com/xKWBjc3X/istockphoto-1286802141-612x612.jpg",
      title: "Join the New Era of Online Learning",
      description:
        "24/7 support, affordable pricing, and lifetime access. Enroll today and give your career a powerful boost!",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[70vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="h-full w-full flex-shrink-0 relative">
              <img
                src={slide.url}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute space-y-3 bottom-0 left-0 right-0 p-8 sm:p-12 md:p-16 text-white">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center   tracking-wide drop-shadow-2xl leading-tight">
                  {slide.title}
                </h3>
                <p className="text-center pb-45 text-lg md:pb-58 tracking-wide drop-shadow-2xl leading-tight">
                  {slide.description}
                </p>
              </div>
               
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 border border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 border border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-8 sm:h-8" />
      </button>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white w-10 shadow-lg"
                : "bg-white/50 w-2 hover:bg-white/80 hover:w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
