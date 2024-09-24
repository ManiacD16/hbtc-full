import Back from "./Images/background.svg";
import Clouds from "./Images/clouds.svg";
import Logo from "./Images/Logo.svg";
import Mountain from "./Images/mountains.svg";
import Sun from "./Images/sun-glow.svg";
import { useRef, useEffect, useState } from "react";

const Background = () => {
  const mountainRef = useRef(null);
  const [mountainHeight, setMountainHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (mountainRef.current) {
        setMountainHeight(mountainRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    handleResize();

    // Update height on window resize
    window.addEventListener("resize", handleResize);

    // Clean up listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mountainRef]);
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Images */}
      <img
        src={Back}
        alt="Sky"
        className="absolute inset-0 w-full h-full object-cover z-0" // Lowest z-index
      />
      <img
        src={Clouds}
        alt="Clouds"
        className="absolute md:top-0 left-0 sm:-mb-10 w-full h-auto object-contain z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <img
          ref={mountainRef}
          src={Mountain}
          alt="Mountains"
          className="absolute bottom-0 left-0 w-full h-auto object-cover z-20"
        />

        <img
          src={Sun}
          alt="Sun"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 lg:w-200 md:w-150 sm:w-100 h-auto object-contain z-15"
        />
        <img
          src={Logo}
          alt="Logo"
          className="absolute left-1/2 transform -translate-x-1/2 w-20 md:w-40 lg:w-48 h-auto object-contain z-17"
          style={{
            bottom:
              mountainHeight > 100
                ? `${mountainHeight * 0.21}px` // 40% of the mountain height
                : `${mountainHeight * 0.1}px`, // 30% of the mountain height for smaller
          }}
        />
      </div>
    </div>
  );
};

export default Background;
