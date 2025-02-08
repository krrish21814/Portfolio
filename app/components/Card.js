"use client";
import Tilt from "react-parallax-tilt";

export const Card = ({ w, h, children, tilt = true }) => {
  const cardContent = (
    <div
      className={`relative z-10 
                  ${w} ${h} 
                  bg-white/10 
                  backdrop-blur-sm
                  hover:scale-105
                  hover:backdrop-blur-md
                  rounded-xl 
                  border border-white/20 
                  shadow-lg 
                  p-4
                  hover:bg-white/20 
                  transition-all 
                  duration-300
                  cursor-pointer `}>
      {children}
    </div>
  );

  return tilt ? (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="10px"
      tiltMaxAngleX={0 - 10}
      tiltMaxAngleY={0 - 10}
      transitionEasing="100">
      {cardContent}
    </Tilt>
  ) : (
    cardContent
  );
};
