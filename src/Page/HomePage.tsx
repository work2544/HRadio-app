import { Images } from "../Assets/img/imgpath";
import Carousel from "../Component/Carousel";
import Contents from "../Component/Contents";
import { SvgOrangeWave ,SvgRedWave} from "../Component/svg";
const headerStyle = {
  zIndex: 2,
};
const HomePage = () => {
  return (
    <div>
      {/* <div className="bg-center flex flex-col  space-y-10 bg-gradient-to-b from-theme-Blue via-theme-SkyBlue to-theme-Blue "> */}
      <div className="flex flex-warp bg-center flex flex-col  space-y-10 bg-gradient-to-r from-theme-Orange  to-yellow-500 ">
        <div className="h-96 flex items-center justify-center  ">
         
          <img className="relative lg:w-4/12 md:w-32 lg:w-48"src={Images.logo2}  style={{ zIndex: 2 }} alt=""></img>
        </div>
        <Carousel />
        <SvgRedWave />
      </div>

      <Contents />
    </div>
  );
};
export default HomePage;
