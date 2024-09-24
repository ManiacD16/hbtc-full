import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Roadmap() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const roadmapPhases = [
    {
      date: "END OF Q4 2023",
      title: "Project Research",
      description:
        "Validating business model Securing strategic partners & advisors creating proprietary smart contract architecture Stress test smart contracts.",
    },
    {
      date: "END OF Q1 2024",
      title: "HBTC Launch",
      description:
        "Listing on Uniswap DEX LP assets lock Expand core team Farming Pre-launch marketing campaigns. Free Airdrop Start.",
    },
    {
      date: "END OF Q2 2024",
      title: "Farming Program",
      description:
        "Awareness marketing & PR Expanding global presence awareness Listing on CoinMarketCap Growing international community.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize(); // Set initial cards to show
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(roadmapPhases.length - cardsToShow, prevIndex + 1)
    );
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="flex-grow p-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-bold">
              Our <span className="text-yellow-400">Roadmap</span>
            </h1>
            <div className="flex gap-4">
              <button
                className="p-2 rounded-full border border-yellow-400 disabled:opacity-50"
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous card"
              >
                <ArrowLeft className="w-6 h-6 text-yellow-400" />
              </button>
              <button
                className="p-2 rounded-full border border-yellow-400 disabled:opacity-50"
                onClick={handleNext}
                disabled={startIndex >= roadmapPhases.length - cardsToShow}
                aria-label="Next card"
              >
                <ArrowRight className="w-6 h-6 text-yellow-400" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(startIndex / cardsToShow) * 100}%)`,
              }}
            >
              {roadmapPhases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex-none w-full ${
                    cardsToShow === 1
                      ? "md:w-full"
                      : cardsToShow === 2
                      ? "md:w-1/2"
                      : "md:w-1/3"
                  } px-4`}
                >
                  <div className="relative flex flex-col md:h-[290px]">
                    <div className="pt-16 mt-10 flex flex-col h-full">
                      <div className="absolute top-10 -left-4 text-sm">
                        {phase.date}
                      </div>
                      <div
                        className="bg-opacity-30 p-5 rounded-lg relative flex flex-col h-full"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) -20%, rgba(13, 52, 52, 0.9) 5%, rgba(3, 11, 11, 1) 80%)",
                        }}
                      >
                        <div className="absolute -top-10 left-8 w-[0.01rem] h-20 bg-yellow-200 bg-opacity-50">
                          <div className="relative top-16 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-200 bg-opacity-50">
                            <div className="relative -bottom-1 left-3 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-400"></div>
                          </div>
                        </div>
                        <h2 className="text-2xl mb-4 ml-8">{phase.title}</h2>
                        <p className="text-gray-300 flex-1 overflow-auto">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer
        className="w-full py-4 px-8"
        style={{
          background:
            "radial-gradient(circle at center, rgba(20, 84, 84, 0.8) -50%, rgba(13, 52, 52, 0.9) 0%, rgba(3, 11, 11, 1) 60%)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:pl-12  md:pr-12 md:flex-row justify-between items-center">
          <div className="text-sm text-center md:text-left hover:text-gray-400 mb-4 md:mb-0">
            © 2024 Harvest BTC. All Rights Reserved.
          </div>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  Tokenomics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("plan")}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  Plan
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
