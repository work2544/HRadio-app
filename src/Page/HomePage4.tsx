import { Images } from "../Assets/img/imgpath";
import Carousel from "../Component/Carousel";
import Contents from "../Component/Contents";
import { SvgOrangeWave ,SvgRedWave} from "../Component/svg";
const headerStyle = {
  zIndex: 2,
};
const HomePage4 = () => {
  return (
    <div>
      {/* <div className="bg-center flex flex-col  space-y-10 bg-gradient-to-b from-theme-Blue via-theme-SkyBlue to-theme-Blue "> */}
      <div className="flex flex-warp bg-center flex flex-col  space-y-10 bg-black ">
        <div className="h-96 flex items-center justify-center  ">
          
          <img className="fixed w-4/12"src={Images.logo2}  style={{ zIndex: 2 }} alt=""></img>
          {/* <p
            className="text-center font-LexendDeca text-6xl md:text-8xl text-white mt-10 "
            style={headerStyle}
          >
            
             HRadio 91.0 
          </p> */}
        </div>

        <Carousel />
        <SvgRedWave />
      </div>

      <Contents />
    </div>
  );
};
export default HomePage4;
