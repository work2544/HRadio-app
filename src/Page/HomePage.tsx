import Carousel from "../Component/Carousel";
import React from "react";
import MusicPlayer from "../Component/MusicPlayer/MusicPlayer";
const HomePage = () => {
  return (
    <div className="bg-center flex flex-col space-y-10 bg-gradient-to-b from-slate-900 via-sky-900 to-slate-900">
      <div className="h-96  flex items-center justify-center mt-10">
        <p className="text-center font-LexendDeca text-6xl md:text-8xl text-white">
          HRaio 91.0
        </p>
      </div>
      <div>
        <Carousel></Carousel>
      </div>

      {/* <MusicPlayer></MusicPlayer> */}
    </div>
  );
};
export default HomePage;
