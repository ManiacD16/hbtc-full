import React from "react";
import Logo from "./Images/Logo.svg";

const AboutHbtc = () => {
  return (
    <div className="bg-black min-h-screen text-white px-8 py-12 md:pt-40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center pr-4 sm:pr-8 pl-4 sm:pl-7 mb-8 sm:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-yellow-400">$HBTC</span>
          </h1>
          <p className="text-lg mb-8">
            Step into the future of decentralized finance with Harvest BTC
            (HBTC), where every stake is a step toward growing your wealth.
            Designed for the modern crypto farmer, HBTC offers a seamless blend
            of farming rewards, direct income, and multiple earning
            opportunities. Whether you're a seasoned trader or new to the crypto
            space, HBTC provides a robust platform for multiplying your assets
            and achieving financial freedom. Backed by the security and speed of
            Binance Smart Chain (BSC), Harvest BTC is your gateway to the next
            level of digital farming.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative  rounded-full">
            <div className=" overflow-hidden h-50 w-60 flex items-center justify-center">
              {[...Array(200)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-yellow-400 opacity-50 animate-twinkle"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 90}%`,
                    animationDelay: `${Math.random() * 4}s`,
                  }}
                />
              ))}
              <img
                src={Logo}
                alt="HBTC logo"
                className="w-40 h-40 object-contain z-10 relative flex items-center mr-4 mt-2 bg-transparent"
              />
            </div>
            <div className=" relative right-2 -bottom-2">
              <div className="relative -top-7 w-20 h-8  left-20 mr-40 rounded-full bg-gradient-to-t from-transparent via-yellow-500 to-transparent opacity-100 blur-md"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutHbtc;
